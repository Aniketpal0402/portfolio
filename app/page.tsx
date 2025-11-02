// app/components/Hero.jsx (or .tsx)
"use client"
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2600], [0, 100]); // Adjusted for smoother parallax over both sections

  return (
    <>
    <div className="relative">
      {/* Fixed background container that spans both sections */}
      <motion.div 
        className="fixed top-0 left-0 w-[100vw] h-full bg-cover bg-center z-[-1]"
        style={{ 
          backgroundImage: "url('/assets/bg-images/hero-image.jpeg')",
          y,
          scale: 1.2, // Increased scale to prevent white edges during parallax
        }}
      />
    <section id="hero" className="relative h-screen w-full min-h-[600px]">
     
      {/* Overlay for dimming, optional */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-12 gap-6 md:gap-8">
          {/* Bottom Left */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white w-full md:w-auto"
          >
            <h1 className="font-[Staatliches] text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] leading-none mb-1 sm:mb-2 tracking-tight inline pr-[1vw] block sm:inline">
              CREATIVE
            </h1>
            <span className="font-[Stint_Ultra_Condensed] text-xl sm:text-2xl md:text-5xl lg:text-7xl mb-1 sm:mb-2 inline tracking-wide block sm:inline">
              DESIGNER
            </span>
            <h1 className="font-[Staatliches] text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] xl:text-[7rem] leading-none tracking-tight block">
              AND DEVELOPER.
            </h1>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white w-full md:w-auto md:text-right md:max-w-lg"
          >
            <p className="font-medium text-[1.2rem] sm:text-base md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 font-[Stint_Ultra_Condensed] text-left md:text-left leading-relaxed">
              A designer who loves to code and a developer who loves to design. I create things that look simple, but feel alive. For me, a good website isn't just about pixels and performance, it's about how it makes people feel when they use it.
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 text-left font-[Staatliches]">
              MOVE PEOPLE, NOT JUST <span className="font-stint">SCREENS.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-[Staatliches]">
              <a href="#contact" className="px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 border border-white text-white hover:bg-white hover:text-black font-staatliches rounded transition text-sm sm:text-base md:text-lg text-center">
                LET'S COLLABORATE
              </a>
              <a href="#contact" className="px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 bg-white text-black font-staatliches rounded hover:bg-black hover:text-white border transition text-sm sm:text-base md:text-lg text-center">
                HIRE ME
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

     <section id="about" className="relative w-full min-h-screen bg-cover bg-center pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
      >
        <div className="absolute inset-0 bg-black/40 min-h-full"></div>
      {/* Title */}
      <div className="relative z-10">
      <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 px-2 sm:px-4 flex items-center gap-1 sm:gap-2">
        <h2 className="font-[Staatliches] text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-none text-white tracking-tight pr-[1vw]">
          ABOUT
        </h2>
        <span className="font-[Stint_Ultra_Condensed] text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] xl:text-[6rem] text-white tracking-wide">
          ME
        </span>
      </div>
      {/* Content grid */}
      <div className="w-full flex flex-col xl-1100:flex-row gap-6 sm:gap-8 md:gap-12 pt-6 sm:pt-8 md:pt-12 items-stretch justify-center">
        {/* Image - First on small screens, Left on large screens */}
        <div className="w-full xl-1100:w-1/2 flex min-h-[200px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl-1100:min-h-0">
          <img
            src="/assets/bg-images/about.jpeg"
            alt="About Me"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
        {/* Text - Second on small screens, Right on large screens */}
        <div className="w-full xl-1100:w-1/2 text-white flex flex-col justify-start xl-1100:justify-between gap-6 xl-1100:gap-0 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl-1100:min-h-0">
          <p className="font-[Stint] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-snug">
            Namaste! I'm Aniket Pal, a passionate Full-Stack Developer currently pursuing my MCA at Mumbai University after completing my BCA from Tilak Maharashtra Vidyapeeth.<br /><br />
            I love building modern, responsive web applications that blend design and functionality. For me, clean code and a great user experience go hand in hand.<br /><br />
            What keeps me going is curiosity. I love learning new things, trying out ideas, and turning small thoughts into real projects that work. Every website has its own vibe and story, and I love shaping how that story comes to life — clean, creative, and full of energy.<br /><br />
            Let's work together to create something that truly stands out on the web.
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h3 className="font-staatliches text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-tight text-white font-[Stint]">
              FUN FACT
            </h3>
            <p className="text-base sm:text-xl md:text-2xl font-medium tracking-[0.05rem] leading-relaxed sm:leading-snug font-[Stint_Ultra_Condensed]">
              I spend more time choosing the perfect color palette than I do choosing what to wear.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
    </>
  );
}
