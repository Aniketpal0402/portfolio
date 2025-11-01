// app/components/Hero.jsx (or .tsx)
"use client"
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2300], [0, 200]); // Adjusted for smoother parallax over both sections

  return (
    <>
    <div className="relative">
      {/* Fixed background container that spans both sections */}
      <motion.div 
        className="fixed top-0 left-0 w-[100vw] h-full bg-cover bg-center z-[-1]"
        style={{ 
          backgroundImage: "url('/assets/bg-images/hero-image.png')",
          y,
          scale: 1.2, // Increased scale to prevent white edges during parallax
        }}
      />
    <section className="relative h-screen w-full ">
     
      {/* Overlay for dimming, optional */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end h-full">
        <div className="flex justify-between items-end w-full px-8 pb-12 gap-8">
          {/* Bottom Left */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white"
          >
            <h1 className=" font-[Staatliches] text-4xl md:text-8xl lg:text-[5.5rem] leading-none mb-2 tracking-tight inline pr-[1vw]">
              CREATIVE
            </h1>
            <span className="font-[Stint_Ultra_Condensed] text-2xl md:text-7xl lg:text-7xl mb-2 inline tracking-wide">
              DESIGNER
            </span>
            <h1 className=" font-[Staatliches] text-4xl md:text-8xl lg:text-[6rem] leading-none tracking-tight">
              AND DEVELOPER.
            </h1>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white text-right max-w-lg"
          >
            <p className="font-medium text-lg md:text-3xl mb-6 font-[Stint_Ultra_Condensed] text-left" >
              A designer who loves to code and a developer who loves to design. I create things that look simple, but feel alive. For me, a good website isn't just about pixels and performance, it's about how it makes people feel when they use it.
            </p>
            <div className=" text-3xl md:text-4xl mb-6 text-left font-[Staatliches]">
              MOVE PEOPLE, NOT JUST <span className="font-stint">SCREENS.</span>
            </div>
            <div className="flex flex-row gap-4  font-[Staatliches] ">
              <a href="#contact" className="px-7 py-3 border border-white text-white hover:bg-white hover:text-black font-staatliches rounded transition">
                LET'S COLLABORATE
              </a>
              <a href="#contact" className="px-7 py-3 bg-white text-black font-staatliches rounded hover:bg-black hover:text-white border transition">
                HIRE ME
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

     <section className=" relative w-full min-h-[80vh] bg-cover bg-center pb-12 px-4"
      >
        <div className="absolute inset-0 bg-black/40 h-[110vh]"></div>
      {/* Title */}
      <div className="absolute">
      <div className=" pt-8 px-2 flex items-center gap-2">
        <h2 className="font-[Staatliches] text-[3rem] sm:text-[3rem] md:text-[7rem] lg:text-[4.5rem] leading-none text-white tracking-tight pr-[1vw]">
          ABOUT
        </h2>
        <span className="font-[Stint_Ultra_Condensed] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] text-white tracking-wide">
          ME
        </span>
      </div>
      {/* Content grid */}
      <div className="flex flex-col md:flex-row gap-12 pt-6 items-start justify-center">
        {/* Left: image */}
        <div className="md:w-1/2 w-full h-[80vh] flex justify-center items-center">
          <img
            src="/assets/bg-images/gg.png"
            alt="About Me"
            className="w-full h-[400px] sm:h-[600px] object-cover rounded-md shadow-lg"
          />
        </div>
        {/* Right: text */}
        <div className="md:w-1/2 w-full text-white flex flex-col justify-between">
          <p className="font-[Stint] text-lg md:text-xl mb-6 leading-snug">
            Namaste, I'm Swaraj Singh, a final-year B.Tech student at NIT Goa, majoring in Mechanical Engineering, but my heart beats for design and code.<br /><br />
            For the past two years, I've been exploring the world of web development, building websites that don't just look good, but feel alive. I love creating experiences that draw people in clean, immersive, and thoughtfully detailed.<br /><br />
            What keeps me going is curiosity, the urge to learn, to experiment, and to make something meaningful out of an idea. I believe every website tells a story, and I love being the one who shapes how that story unfolds.<br /><br />
            Let's work together to create something that truly stands out on the web.
          </p>
          <div className="mt-8">
            <h3 className="font-staatliches text-3xl mb-2 tracking-tight text-white font-[Stint]">
              FUN FACT
            </h3>
            <p className="text-2xl font-medium  leading-snug font-[Stint_Ultra_Condensed] ">
              I'm also the President of the Dance Club at my university. When I'm not designing or coding, you'll probably find me Dancing.
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
