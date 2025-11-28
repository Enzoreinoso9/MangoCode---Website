const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
    <section id="contacto-section" className="py-20 px-4 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C853]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFA726]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título y subtítulo */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl text-[#FFA726] mb-6 relative"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
          >
            Contáctanos
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FFA726] rounded-full"></div>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para dar el siguiente paso en tu proyecto? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Lado izquierdo - Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">Información de Contacto</h3>
            
            {/* Ubicación */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#00C853]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00E676] mb-2">Ubicación</h4>
                  <p className="text-[#FFFFFF] text-base">Formosa, Argentina</p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#00C853]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00E676] mb-2">Llámanos</h4>
                  <a 
                    href="tel:+543704123456" 
                    className="text-[#FFFFFF] text-lg font-medium hover:text-[#00E676] transition-colors duration-300"
                  >
                    +54 370 412-3456
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#00C853]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00E676] mb-2">Escribinos</h4>
                  <a 
                    href="mailto:info@mangocode.com" 
                    className="text-[#FFFFFF] text-lg font-medium hover:text-[#00E676] transition-colors duration-300"
                  >
                    info@mangocode.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#00C853]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00E676] mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    {/* Instagram */}
                    <a href="#" className="w-10 h-10 bg-[#] hover:bg-[#00E676] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-10 h-10 bg-[#] hover:bg-[#00E676] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8v-2.91h2.5V9.41c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86H18l-.4 2.91h-2.53v7.04A10 10 0 0022 12z"/>
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a href="#" className="w-10 h-10 bg-[#] hover:bg-[#00E676] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-white font-medium text-sm">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-4 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#FFA726] focus:ring-2 focus:ring-[#FFA726]/20 focus:bg-white/20 transition-all duration-300 text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-white font-medium text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#FFA726] focus:ring-2 focus:ring-[#FFA726]/20 focus:bg-white/20 transition-all duration-300 text-base"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label htmlFor="empresa" className="block text-white font-medium text-sm">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full px-4 py-4 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#FFA726] focus:ring-2 focus:ring-[#FFA726]/20 focus:bg-white/20 transition-all duration-300 text-base"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-white font-medium text-sm">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  required
                  className="w-full px-4 py-4 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#FFA726] focus:ring-2 focus:ring-[#FFA726]/20 focus:bg-white/20 transition-all duration-300 text-base resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFA726] to-[#FFA726] hover:from-[#FFB74D] hover:to-[#FFB74D] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                Enviar Mensaje
              </button>
              
              {/* Advertencias */}
              <div className="text-center space-y-1 pt-4">
                <p className="text-white/60 text-xs">
                  No compartas datos personales sensibles en el mensaje.
                </p>
                <p className="text-white/60 text-xs">
                  No envíes información de tarjetas de crédito ni cuentas bancarias.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

