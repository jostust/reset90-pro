import { m, AnimatePresence } from "framer-motion";
import React from "react";

export default function MobileBottomBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Barra inferior fija (solo móvil) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#2E3A3A] border-t border-line"
           style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="max-w-[1200px] mx-auto px-3 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white/90 font-extrabold"><span className="text-white/80">AC</span></div>
          <a href="https://wa.me/XXXXXXXXXXX" target="_blank"
             className="bg-[#F7A9B8] text-black font-extrabold rounded-xl px-5 py-2 shadow">JOIN NOW</a>
          <button onClick={()=>setOpen(true)} className="text-white/90 font-extrabold">MENU ☰</button>
        </div>
      </div>

      {/* Drawer del menú */}
      <AnimatePresence>
        {open && (
          <>
            <m.div className="fixed inset-0 bg-black/60 z-[60]" onClick={()=>setOpen(false)}
                   initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>
            <m.aside className="fixed bottom-0 inset-x-0 z-[61] bg-[#0A0D10] border-t border-line rounded-t-2xl"
                     initial={{y:"100%"}} animate={{y:0}} exit={{y:"100%"}}
                     transition={{type:"spring", stiffness:280, damping:30}}
                     style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
              <div className="max-w-[1200px] mx-auto px-5 pt-5 pb-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-extrabold">ALEPH_RESET</div>
                  <button onClick={()=>setOpen(false)} className="text-white/70">Close ✕</button>
                </div>
                <nav className="grid gap-3 text-lg">
                  <a href="#home" onClick={()=>setOpen(false)} className="py-2 border-b border-line">Home</a>
                  <a href="#workouts" onClick={()=>setOpen(false)} className="py-2 border-b border-line">Workouts</a>
                  <a href="#nutrition" onClick={()=>setOpen(false)} className="py-2 border-b border-line">Nutrition</a>
                  <a href="#faqs" onClick={()=>setOpen(false)} className="py-2 border-b border-line">FAQs</a>
                  <a href="#blog" onClick={()=>setOpen(false)} className="py-2">Blog</a>
                </nav>
                <a href="/register" target="_blank"
                   className="mt-5 inline-flex w-full items-center justify-center bg-[#F7A9B8] text-black font-extrabold rounded-xl px-5 py-3">
                  JOIN NOW
                </a>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
