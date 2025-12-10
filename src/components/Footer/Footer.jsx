import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServicios = (e) => {
    e.preventDefault();
    const section = document.getElementById('servicios-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNosotros = (e) => {
    e.preventDefault();
    const section = document.getElementById('nosotros-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProyectos = () => {
    document.getElementById('proyectos-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToIntegrantes = () => {
    document.getElementById('integrantes-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContacto = () => {
    document.getElementById('contacto-section')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <footer className="relative w-full bg-[#064232]">
      
      {/* Contenido del footer */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Logo y descripción - Columna izquierda */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="MangoCode Logo" className="h-16 w-auto" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFA726] to-[#00C853] bg-clip-text text-transparent">MangoCode</h3>
            </div>
            <p className="text-gray-100 text-sm leading-relaxed max-w-xs">
              Transformamos ideas en soluciones digitales innovadoras. 
              Especialistas en desarrollo web, aplicaciones móviles y tecnologías emergentes.
            </p>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8v-2.91h2.5V9.41c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86H18l-.4 2.91h-2.53v7.04A10 10 0 0022 12z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.9 11.9 0 0012.02 0C5.4 0 .03 5.37.03 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.96 11.96 0 005.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.2-3.51-8.38zM12.03 22a9.93 9.93 0 01-5.06-1.39l-.36-.21-3.69.97.99-3.6-.23-.37A9.93 9.93 0 012.1 12c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92A9.9 9.9 0 0122 12.01C22 17.5 17.52 22 12.03 22zm5.51-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.2 3.07.15.2 2.09 3.2 5.05 4.49.7.3 1.25.47 1.67.6.7.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación - Columna central */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="#nosotros-section" 
                onClick={scrollToNosotros}
                className="text-gray-100 hover:text-[#FFA726] transition-colors duration-300 text-sm"
              >
                Nosotros
              </a>
              <a 
                href="#servicios-section" 
                onClick={scrollToServicios}
                className="text-gray-100 hover:text-[#FFA726] transition-colors duration-300 text-sm"
              >
                Servicios
              </a>
              <a 
                href="#proyectos-section" 
                onClick={scrollToProyectos}
                className="text-gray-100 hover:text-[#FFA726] transition-colors duration-300 text-sm"
              >
                Proyectos
              </a>
              <a 
                href="#integrantes-section" 
                onClick={scrollToIntegrantes}
                className="text-gray-100 hover:text-[#FFA726] transition-colors duration-300 text-sm"
              >
                Integrantes
              </a>
              <a 
                href="#contacto-section" 
                onClick={scrollToContacto}
                className="text-gray-100 hover:text-[#FFA726] transition-colors duration-300 text-sm"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Información de contacto - Columna derecha */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-100 text-sm">info@mangocode.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-100 text-sm">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-100 text-sm">Formosa, Argentina</span>
              </div>
            </div>
            
            {/* Botón de volver arriba */}
            <button
              onClick={scrollToTop}
              className="mt-4 bg-gradient-to-r from-[#FFA726] to-[#FFA726] hover:from-[#FFB74D] hover:to-[#FFB74D] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-100 text-sm">
              © 2025 MangoCode. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/politicayprivacidad"
                className="text-gray-100 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <a href="#" className="text-gray-100 hover:text-orange-500 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
