import { useState, useMemo } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiTypescript,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import sinImagen from '../../assets/sinImagen2.png'

const CATEGORIES = [
  { id: 'financiera', label: 'Financiera' },
  { id: 'educacion', label: 'Educación' },
  { id: 'salud', label: 'Salud' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'otros', label: 'Otros' },
]

const ALL_PROJECTS = [
  {
    id: 'banking-crm',
    categoria: 'financiera',
    titulo: 'CRM Bancario',
    descripcion: 'Gestión de clientes, seguimiento de operaciones y tablero analítico para entidades financieras.',
    imagen: sinImagen,
    imagenes: [sinImagen, sinImagen, sinImagen],
    descripcionDetallada: 'Sistema completo de gestión de relaciones con clientes diseñado específicamente para el sector bancario. Permite a las entidades financieras gestionar eficientemente sus clientes, realizar seguimiento de operaciones en tiempo real y acceder a tableros analíticos con métricas clave. Incluye módulos de scoring crediticio, gestión de productos financieros y reportes personalizados.',
    tecnologias: [
      { nombre: 'React', icono: SiReact },
      { nombre: 'Node.js', icono: SiNodedotjs },
      { nombre: 'PostgreSQL', icono: SiPostgresql },
      { nombre: 'TypeScript', icono: SiTypescript },
    ],
    enlaces: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: 'wallet-app',
    categoria: 'financiera',
    titulo: 'Billetera Digital',
    descripcion: 'Pagos, transferencias y recargas con autenticación segura y notificaciones en tiempo real.',
    imagen: sinImagen,
    imagenes: [sinImagen, sinImagen],
    descripcionDetallada: 'Aplicación móvil de billetera digital que permite realizar pagos, transferencias y recargas de manera segura. Cuenta con autenticación biométrica, notificaciones push en tiempo real, historial de transacciones y soporte para múltiples métodos de pago. Implementa las más altas medidas de seguridad y cumple con estándares de la industria financiera.',
    tecnologias: [
      { nombre: 'React Native', icono: SiReact },
      { nombre: 'Firebase', icono: SiFirebase },
      { nombre: 'MongoDB', icono: SiMongodb },
    ],
    enlaces: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: 'edu-portal',
    categoria: 'educacion',
    titulo: 'Portal Educativo',
    descripcion: 'Aulas virtuales, evaluaciones y seguimiento del alumno para instituciones educativas.',
    imagen: sinImagen,
    imagenes: [sinImagen, sinImagen, sinImagen],
    descripcionDetallada: 'Plataforma educativa integral que ofrece aulas virtuales interactivas, sistema de evaluaciones automatizadas y seguimiento detallado del progreso de los alumnos. Los docentes pueden crear contenido multimedia, asignar tareas y realizar videollamadas. Los estudiantes acceden a materiales, participan en foros y reciben feedback inmediato.',
    tecnologias: [
      //{ nombre: 'Vue.js', icono:  },
      //{ nombre: 'Laravel', icono: },
      //{ nombre: 'MySQL', icono:  },
      //{ nombre: 'WebRTC', icono: },
    ],
    enlaces: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: 'telemed',
    categoria: 'salud',
    titulo: 'Telemedicina',
    descripcion: 'Turnos online, historias clínicas y videollamadas seguras entre médicos y pacientes.',
    imagen: sinImagen,
    imagenes: [sinImagen, sinImagen],
    descripcionDetallada: 'Sistema de telemedicina completo que permite a los pacientes agendar turnos online, acceder a sus historias clínicas digitales y realizar consultas mediante videollamadas seguras. Los médicos pueden gestionar su agenda, recetar medicamentos digitalmente y mantener registros completos. Cumple con normativas de privacidad y seguridad de datos médicos.',
    tecnologias: [
     // { nombre: 'Angular', icono: SiAngular },
     // { nombre: 'Django', icono: SiDjango },
     // { nombre: 'Redis', icono: SiRedis },
     // { nombre: 'Docker', icono: SiDocker },
    ],
    enlaces: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
    },
  },
  {
    id: 'storefront',
    categoria: 'ecommerce',
    titulo: 'Tienda Online',
    descripcion: 'Catálogo, carrito y checkout integrados con pasarelas de pago y envíos.',
    imagen: sinImagen,
    imagenes: [sinImagen, sinImagen, sinImagen],
    descripcionDetallada: 'Plataforma de e-commerce completa con catálogo de productos dinámico, carrito de compras inteligente y proceso de checkout optimizado. Integra múltiples pasarelas de pago, calculadora de envíos en tiempo real, sistema de cupones y descuentos, y panel de administración robusto. Incluye recomendaciones personalizadas y gestión de inventario automatizada.',
    tecnologias: [
     // { nombre: 'Next.js', icono: SiNextdotjs },
     // { nombre: 'Stripe', icono: SiStripe },
     // { nombre: 'Prisma', icono: SiPrisma },
     // { nombre: 'Tailwind', icono: SiTailwindcss },
    ],
    enlaces: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
    },
  },
]

const Proyectos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('financiera')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [imagenActual, setImagenActual] = useState(0)

  const proyectosFiltrados = useMemo(
    () => ALL_PROJECTS.filter(p => p.categoria === categoriaActiva),
    [categoriaActiva]
  )

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto)
    setImagenActual(0)
  }

  const cerrarModal = () => {
    setProyectoSeleccionado(null)
    setImagenActual(0)
  }

  const siguienteImagen = () => {
    if (proyectoSeleccionado) {
      setImagenActual((prev) => (prev + 1) % proyectoSeleccionado.imagenes.length)
    }
  }

  const imagenAnterior = () => {
    if (proyectoSeleccionado) {
      setImagenActual((prev) => (prev - 1 + proyectoSeleccionado.imagenes.length) % proyectoSeleccionado.imagenes.length)
    }
  }

  return (
    <section id="proyectos-section" className=" py-16 px-4">
      <div>
      <h2
        className="text-6xl text-center mb-4 text-[#FFA726]"
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
      >
        Proyectos
      </h2>
      <div className="w-24 h-1 bg-[#FFA726]/60 rounded-full mx-auto mb-12"></div>
      <p className="text-lg md:text-xl text-white/90 max-w-3xl md:max-w-4xl mx-auto leading-relaxed text-center mb-12">"Proyectos cultivados con dedicación: diseño claro, funcionalidad impecable y tecnología moderna. Así crece nuestro trabajo, uno por vez."</p>  
      </div>

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Sidebar categorías */}
          <aside className="md:col-span-1 bg-gradient-to-b from-[#FFA726]/90 to-[#FFA726]/70 text-white font-bold p-6 md:p-8">
            <nav className="space-y-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                    categoriaActiva === cat.id ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Panel proyectos */}
          <div className="md:col-span-3 p-6 md:p-8">
            <div className="h-[500px] overflow-y-auto pr-2">
              {proyectosFiltrados.map((p, idx) => (
                <div key={p.id} className={`flex items-center gap-6 py-12 ${idx !== proyectosFiltrados.length - 1 ? 'border-b border-white/20' : ''}`}>
                  {/* Imagen a la izquierda */}
                  <div className="flex-shrink-0 w-32 h-32 md:w-38 md:h-38 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover" />
                  </div>
                  {/* Texto a la derecha */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{p.titulo}</h3>
                    <p className="text-white/90 mb-4">
                      {p.descripcion}
                    </p>
                    <button 
                      onClick={() => abrirModal(p)}
                      className="px-4 py-2 bg-[#00C853] hover:bg-[#43A047] text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              ))}

              {proyectosFiltrados.length === 0 && (
                <div className="text-center text-white/80 py-10">No hay proyectos en esta categoría todavía.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {proyectoSeleccionado && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={cerrarModal}
        >
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con botón cerrar */}
            <div className="flex justify-end p-6">
              <button
                onClick={cerrarModal}
                className="flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <IoMdClose className="w-6 h-6 text-white hover:text-[#FFA726]" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              {/* Columna izquierda - Galería de imágenes */}
              <div className="lg:w-1/2 p-6 pt-0 flex flex-col overflow-y-auto">
                <div className="relative w-full h-[500px] bg-white/5 rounded-2xl overflow-hidden border border-white/20 shadow-xl mb-4">
                  {proyectoSeleccionado.imagenes.length > 1 && (
                    <>
                      <button
                        onClick={imagenAnterior}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFA726]/80 hover:bg-[#FFA726] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 z-10 cursor-pointer hover:scale-110 shadow-lg"
                      >
                        <FaAngleLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={siguienteImagen}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFA726]/80 hover:bg-[#FFA726] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 z-10 cursor-pointer hover:scale-110 shadow-lg"
                      >
                        <FaAngleRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}
                  <img
                    src={proyectoSeleccionado.imagenes[imagenActual]}
                    alt={`${proyectoSeleccionado.titulo} - Imagen ${imagenActual + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Indicadores de imágenes */}
                {proyectoSeleccionado.imagenes.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {proyectoSeleccionado.imagenes.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImagenActual(idx)}
                        className={`rounded-full transition-all duration-200 cursor-pointer ${
                          idx === imagenActual ? 'bg-[#FFA726] w-8 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Columna derecha - Información */}
              <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {proyectoSeleccionado.titulo}
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {proyectoSeleccionado.descripcionDetallada}
                </p>

                {/* Tecnologías */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#FFA726] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Tecnologías</h4>
                  <div className="flex flex-wrap gap-6">
                    {proyectoSeleccionado.tecnologias.map((tech, idx) => {
                      const IconoTech = tech.icono;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-2"
                        >
                          <IconoTech className="text-3xl text-white" />
                          <span className="text-white font-medium text-sm text-center">{tech.nombre}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enlaces */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {proyectoSeleccionado.enlaces.demo && (
                    <a
                      href={proyectoSeleccionado.enlaces.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FFA726] hover:bg-[#FFB74D] text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <MdOpenInNew className="w-5 h-5" />
                      Ver Demo
                    </a>
                  )}
                  {proyectoSeleccionado.enlaces.github && (
                    <a
                      href={proyectoSeleccionado.enlaces.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-[#FFA726]/50 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                      <FaGithub className="w-5 h-5" />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Proyectos
