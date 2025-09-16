export default function Register() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
        {/* Lado IZQUIERDO: panel rosa con texto */}
        <div className="bg-[#F7A9B8]/35 px-6 md:px-10 py-10 md:py-16">
          <h2 className="text-[13px] tracking-[.25em] font-extrabold text-[#111]/80 mb-6">
            ENTRENA CONMIGO, <span className="text-[#111]">ALEPH MOTION</span>
          </h2>

          <div className="bg-white rounded-lg shadow-sm border border-black/10 p-4 mb-8">
            <div className="text-[12px] font-extrabold uppercase mb-1">Menos de $1 al día</div>
            <div className="text-[13px]">Solo $29.99/mes. Cobro mensual, cancela cuando quieras.</div>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-[15px]">
            <li>Entrenamientos diarios y plan de alimentación</li>
            <li>Acompañamiento 1 a 1 (si lo necesitas)</li>
            <li>Comunidad que te apoya de verdad</li>
          </ul>
        </div>

        {/* Lado DERECHO: formulario */}
        <div className="px-6 md:px-10 py-10 md:py-16">
          <h3 className="text-xl font-extrabold mb-8">Crea tu cuenta</h3>

          {/* Netlify Forms listo para conectar */}
          <form
            name="signup"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            {/* Campo oculto para Netlify Forms */}
            <input type="hidden" name="form-name" value="signup" />

            {/* Nombre */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" placeholder="Nombre" className="border rounded-md px-3 py-3 w-full" required />
              <input name="lastName" placeholder="Apellidos" className="border rounded-md px-3 py-3 w-full" required />
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="email@dominio.com" className="border rounded-md px-3 py-3 w-full" required />
              <input type="email" name="emailConfirm" placeholder="Confirmar email" className="border rounded-md px-3 py-3 w-full" required />
            </div>

            {/* Password */}
            <input type="password" name="password" placeholder="Contraseña" className="border rounded-md px-3 py-3 w-full" required />

            {/* Checkbox consentimiento */}
            <label className="flex items-start gap-3 text-[13px] text-black/70">
              <input type="checkbox" required className="mt-1" />
              Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad y consientes recibir emails de Aleph Motion.
            </label>

            {/* Botón continuar */}
            <button type="submit" className="w-full bg-[#2E3A3A] text-white font-bold py-3 rounded-md">
              CONTINUAR
            </button>
          </form>

          {/* Login link */}
          <div className="mt-6 text-center">
            <a href="/login" className="text-[#2E3A3A] font-bold text-sm">¿YA TIENES CUENTA? INICIA SESIÓN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
