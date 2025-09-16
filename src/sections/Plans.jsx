export default function Plans(){
  return (
    <section id="planes" className="py-14">
      <div className="container-outer grid lg:grid-cols-3 gap-4">
        {[
          {title:'Básico', items:['24 sesiones (60 min)','24 rutinas para casa','Checklist de hábitos','2 estudios InBody'], price:'$9,000 1:1 · $6,200 1:2'},
          {title:'Estándar', featured:true, items:['36 sesiones (60 min)','24 rutinas','Plan nutricional recomendado','2 estudios InBody'], price:'$13,500 1:1 · $9,000 1:2'},
          {title:'Premium', items:['36 sesiones + rutinas avanzadas','Programa nutricional completo','3 estudios InBody','Soporte ilimitado + plan de continuidad'], price:'$16,500 1:1 · $11,300 1:2'},
        ].map((p,i)=>(
          <div key={i} className={"rounded-2xl border border-line p-6 text-center bg-[#0e0f10] " + (p.featured?"border-accent-pink":"")}>
            {p.featured && <div className="badge bg-accent-pink text-black mb-2">RECOMENDADO</div>}
            <h3 className="text-2xl font-extrabold">{p.title}</h3>
            <ul className="text-[#d0d3d7] mt-2 space-y-1">
              {p.items.map((it,ix)=>(<li key={ix}>{it}</li>))}
            </ul>
            <div className="font-extrabold mt-3">{p.price}</div>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" className="btn btn-primary mt-3">Quiero este plan</a>
          </div>
        ))}
      </div>
    </section>
  )
}
