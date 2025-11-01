"use client";
import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
      lerp: 0.1, // lower = more smoothing
    });

    // ✅ Smooth RAF loop that syncs immediately with Lenis
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // ✅ Prevent anchor jump (optional)
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", e => {
        const href = (anchor as HTMLAnchorElement).getAttribute("href");
        if (!href) return;
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: 0 });
        }
      });
    });

    // ✅ Cleanup to avoid double instances in dev
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
