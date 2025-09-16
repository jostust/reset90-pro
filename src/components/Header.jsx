export default function Header() {
  const nav = [
    {label: "INICIO", href: "#home"},
    {label: "PROGRAMA", href: "#workouts"},
    {label: "NUTRICIÓN", href: "#nutrition"},
    {label: "FAQS", href: "#faqs"},
    {label: "BLOG", href: "#blog"}
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#2E3A3A]">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-14">
        <div className="font-extrabold tracking-wide">Aleph Motion</div>
        <nav className="hidden md:flex gap-6 text-white/90 text-sm font-semibold">
          {nav.map(n => (
            <a key={n.label} href={n.href} className="hover:opacity-100 opacity-80">{n.label}</a>
          ))}
        </nav>
        <a href="https://wa.me/+529981535113" target="_blank"
           className="bg-[#F7A9B8] text-black font-extrabold rounded-xl px-5 py-2">
          Comenzar ahora
        </a>
      </div>
    </header>
  );
}
