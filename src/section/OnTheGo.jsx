export default function OnTheGo(){
  return (
    <section className="py-14 border-y border-line">
      <div className="container-outer grid lg:grid-cols-2 gap-6 items-center">
        <div className="max-w-sm mx-auto">
          <img src="/phone-mock.png" alt="App" className="drop-shadow-2xl" />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold">WORKOUTS + NUTRITION <span className="text-accent-pink">ON THE GO</span></h2>
          <p className="text-muted mt-2 max-w-prose">Donde estés, te acompaño con rutinas para casa y gym, listas de compras y desayunos proteicos. Recibe ajustes semanales y soporte por WhatsApp.</p>
          <a href="https://wa.me/XXXXXXXXXXX" target="_blank" className="btn btn-primary mt-6">JOIN NOW</a>
        </div>
      </div>
    </section>
  )
}
