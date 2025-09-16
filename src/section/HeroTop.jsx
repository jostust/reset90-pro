import { m } from "framer-motion";

export default function HeroTop() {
  return (
    <section id="home" className="relative bg-black pb-24 md:pb-0">
      {/* IMAGEN DE FONDO (usa tu archivo de /public) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/heroleft.jpg')", // ← si tu archivo tiene otro nombre, cámbialo aquí
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      {/* Degradado oscuro para dar el look de la referencia */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000080] to-[#0a0d10]"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 pt-24 pb-16 text-center text-white">
        {/* Chevrons arriba */}
        <div className="flex justify-between max-w-[950px] mx-auto mb-8 opacity-80">
          <div className="chev -rotate-135"></div>
          <div className="chev -rotate-135"></div>
        </div>

        <m.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}
             className="text-white/80 text-sm mb-3">
          Join today and get access to
        </m.p>

        <div className="space-y-2 mb-6">
          <m.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.05,duration:.55}}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
            <span className="text-[#F7A9B8]">NEW</span> <span>BOOTY</span>
          </m.h1>
          <m.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.08,duration:.55}}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
            <span>BOOTCAMP</span> <span className="text-[#F7A9B8]">WORKOUTS</span>
          </m.h2>

        {/* Línea tipo outline */}
          <m.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:.1}}
                 className="text-3xl sm:text-4xl md:text-5xl font-extrabold outline-text">
            EVERY DAY IN SEPTEMBER
          </m.div>
        </div>

        <m.a initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.25}}
             href="https://wa.me/XXXXXXXXXXX" target="_blank" className="btn-pink inline-block">
          JOIN NOW
        </m.a>

        {/* Chevron abajo */}
        <div className="mt-10 flex justify-center">
          <div className="chev rotate-45"></div>
        </div>
      </div>

      {/* franja inferior oscura como remate */}
      <div className="h-16 w-full bg-[#0f1417] border-t border-line"></div>
    </section>
  );
}
