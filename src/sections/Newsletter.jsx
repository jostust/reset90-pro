export default function Newsletter(){
  return (
    <section className="py-14 bg-gradient-to-b from-[#0e1013] to-[#0b0d0f]">
      <div className="container-outer">
        <h3 className="text-center text-2xl font-extrabold mb-4">DON'T MISS OUT · Tips de entrenamiento y nutrición directo a tu inbox</h3>
        <form name="newsletter" method="POST" data-netlify="true" className="flex flex-wrap gap-3 justify-center">
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="email" name="email" required placeholder="Your email"
            className="min-w-[260px] rounded-xl border border-line bg-[#0a0d10] text-white px-4 py-3" />
          <button className="btn bg-[#2e3338] text-white px-5 py-3" type="submit">HIT ME</button>
        </form>
      </div>
    </section>
  )
}
