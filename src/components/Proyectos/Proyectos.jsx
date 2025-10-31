import { useState, useMemo } from 'react'
import mangoLogo from '../../assets/mango-logo.png'

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
    imagen: mangoLogo,
  },
  {
    id: 'wallet-app',
    categoria: 'financiera',
    titulo: 'Billetera Digital',
    descripcion: 'Pagos, transferencias y recargas con autenticación segura y notificaciones en tiempo real.',
    imagen: mangoLogo,
  },
  {
    id: 'edu-portal',
    categoria: 'educacion',
    titulo: 'Portal Educativo',
    descripcion: 'Aulas virtuales, evaluaciones y seguimiento del alumno para instituciones educativas.',
    imagen: mangoLogo,
  },
  {
    id: 'telemed',
    categoria: 'salud',
    titulo: 'Telemedicina',
    descripcion: 'Turnos online, historias clínicas y videollamadas seguras entre médicos y pacientes.',
    imagen: mangoLogo,
  },
  {
    id: 'storefront',
    categoria: 'ecommerce',
    titulo: 'Tienda Online',
    descripcion: 'Catálogo, carrito y checkout integrados con pasarelas de pago y envíos.',
    imagen: mangoLogo,
  },
]

const Proyectos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('financiera')

  const proyectosFiltrados = useMemo(
    () => ALL_PROJECTS.filter(p => p.categoria === categoriaActiva),
    [categoriaActiva]
  )

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
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
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
                    <button className="btn btn-sm md:btn-md bg-[#00C853] hover:bg-[#43A047] border-[#43A047] text-white">Ver más</button>
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
    </section>
  )
}

export default Proyectos
