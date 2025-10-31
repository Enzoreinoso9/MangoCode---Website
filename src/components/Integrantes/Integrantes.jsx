import { useState } from 'react'
import mangoLogo from '../../assets/mango-logo.png'
import sinPerfil from '../../assets/sinperfil.jfif'

const DIVISIONS = {
  desarrollo: {
    label: 'Desarrollo',
    icon: '💻',
    gradient: 'from-[#00C853]/20 to-[#00E676]/20',
    borderColor: 'border-[#00C853]/30',
    bgColor: 'bg-[#00C853]/10',
    accentColor: 'text-[#00C853]'
  },
  gestion: {
    label: 'Gestión / Organización',
    icon: '📊',
    gradient: 'from-[#00C853]/20 to-[#00C853]/20',
    borderColor: 'border-[#00C853]/30',
    bgColor: 'bg-[#00C853]/10',
    accentColor: 'text-[#00C853]'
  },
  diseno: {
    label: 'Diseño',
    icon: '🎨',
    gradient: 'from-[#00C853]/20 to-[#00C853]/20',
    borderColor: 'border-[#00C853]/30',
    bgColor: 'bg-[#00C853]/10',
    accentColor: 'text-[#00C853]'
  },
  calidad: {
    label: 'Calidad y Soporte',
    icon: '🔧',
    gradient: 'from-[#00C853]/20 to-[#00C853]/20',
    borderColor: 'border-[#00C853]/30',
    bgColor: 'bg-[#00C853]/10',
    accentColor: 'text-[#00C853]'
  }
}

const INTEGRANTES = [
  {
    id: 1,
    nombre: 'Enzo Reinoso',
    rol: 'Frontend Developer',
    division: 'desarrollo',
    imagen: sinPerfil,
    descripcion: 'Desarrollador frontend con 4 años de experiencia en Javascript, React y tecnologías modernas. Especializado en interfaces de usuario responsivas y accesibles.',
    tecnologias: ['React', 'JavaScript', 'Laravel', 'Tailwind CSS', 'DaysiUi'],
    redesSociales: [
      { nombre: 'LinkedIn', usuario: 'Enzo Reinoso', icono: '💼' },
      { nombre: 'GitHub', usuario: '@enzoexe99', icono: '🐙' },
      { nombre: 'Twitter', usuario: '@EnzoReinoso9', icono: '🐦' },
      { nombre: 'Instagram', usuario: '@enzoreinoso9', icono: '📷' }
    ],
    esFundador: true
  },
  {
    id: 2,
    nombre: 'Santiago Bernardez',
    rol: 'Backend Developer',
    division: 'desarrollo',
    imagen: sinPerfil,
    descripcion: 'Desarrolladora backend experta en Node.js, Python y bases de datos. Especializada en APIs RESTful, microservicios y arquitectura escalable.',
    tecnologias: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'],
    redesSociales: [
      { nombre: 'LinkedIn', usuario: '@mariagarcia', icono: '💼' },
      { nombre: 'GitHub', usuario: '@mariagarcia', icono: '🐙' },
      { nombre: 'Twitter', usuario: '@mariagarcia', icono: '🐦' }
    ],
    esFundador: true
  },
  {
    id: 3,
    nombre: 'Rodrigo Rios',
    rol: 'Scrum Master',
    division: 'gestion',
    imagen: sinPerfil,
    descripcion: 'Scrum Master certificado con amplia experiencia en metodologías ágiles. Facilitador de equipos de desarrollo y promotor de buenas prácticas.',
    tecnologias: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'Agile'],
    redesSociales: [
      { nombre: 'LinkedIn', usuario: '@carloslopez', icono: '💼' },
      { nombre: 'Twitter', usuario: '@carloslopez', icono: '🐦' }
    ],
    esFundador: true
  },
  {
    id: 4,
    nombre: 'Ana Rodríguez',
    rol: 'UI/UX Designer',
    division: 'diseno',
    imagen: sinPerfil,
    descripcion: 'Diseñadora de experiencia de usuario con enfoque en investigación, prototipado y testing. Especializada en diseño centrado en el usuario.',
    tecnologias: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'User Research'],
    redesSociales: [
      { nombre: 'LinkedIn', usuario: '@anarodriguez', icono: '💼' },
      { nombre: 'Behance', usuario: '@anarodriguez', icono: '🎨' },
      { nombre: 'Dribbble', usuario: '@anarodriguez', icono: '🏀' }
    ],
    esFundador: false
  },
  {
    id: 5,
    nombre: 'Luis Martínez',
    rol: 'QA Tester',
    division: 'calidad',
    imagen: sinPerfil,
    descripcion: 'Tester de calidad con experiencia en testing manual y automatizado. Especializado en herramientas de testing y metodologías de calidad.',
    tecnologias: ['Selenium', 'Jest', 'Cypress', 'Postman', 'TestRail'],
    redesSociales: [
      { nombre: 'LinkedIn', usuario: '@luismartinez', icono: '💼' },
      { nombre: 'GitHub', usuario: '@luismartinez', icono: '🐙' }
    ],
    esFundador: false
  }
]

const Integrantes = () => {
  const [activeTabs, setActiveTabs] = useState({})

  const getActiveTabFor = (id) => activeTabs[id] || 'profile'
  const setActiveTabFor = (id, tab) => {
    setActiveTabs(prev => ({ ...prev, [id]: tab }))
  }

  const renderProfileTab = (integrante) => (
    <div className="relative h-full">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src={integrante.imagen} 
          alt={integrante.nombre}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {/* Overlay para el texto */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-bold text-white mb-1">{integrante.nombre}</h3>
          <p className="text-sm text-white/90">{integrante.rol}</p>
        </div>
      </div>
    </div>
  )

  const renderSkillsTab = (integrante) => (
    <div className="h-full overflow-y-auto p-4 pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      {/* Tecnologías */}
      <div className="text-center">
        <h4 className="text-sm font-semibold text-white mb-2">Tecnologías</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {integrante.tecnologias.map((tech, index) => {
            const division = DIVISIONS[integrante.division];
            return (
              <span 
                key={index}
                className={`px-3 py-1.5 bg-gradient-to-r ${division.gradient} ${division.accentColor} text-xs sm:text-sm rounded-xl border ${division.borderColor} backdrop-blur-sm hover:from-${division.gradient.replace('/20', '/30')} hover:to-${division.gradient.replace('/20', '/30')} transition-all duration-300`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      
      {/* Descripción */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">Experiencia</h4>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{integrante.descripcion}</p>
      </div>
    </div>
  )

  const renderSocialTab = (integrante) => (
    <div className="h-full overflow-y-auto p-4 pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      {/* Redes sociales */}
      <div className="space-y-3">
        <h4 className="text-base font-semibold text-white mb-3 text-center">Redes Sociales</h4>
        <div className="grid grid-cols-1 gap-3">
          {integrante.redesSociales.map((red, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/20 hover:border-${DIVISIONS[integrante.division].accentColor.replace('text-', '')}/50 transition-all duration-300 group`}>
              <div className={`w-10 h-10 bg-gradient-to-br ${DIVISIONS[integrante.division].accentColor.includes('FFA726') ? 'from-[#FFA726] to-[#FFB74D]' : 'from-[#00C853] to-[#00E676]'} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <span className="text-lg">{red.icono}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm">{red.nombre}</p>
                <p className="text-white/70 text-xs">{red.usuario}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTabs = (integrante) => {
    const division = DIVISIONS[integrante.division];
    const isOrangeDivision = division.accentColor.includes('FFA726');
    const activeTab = getActiveTabFor(integrante.id)
    
    return (
      <div className="flex border-t border-white/20 bg-black/30">
        <button
          onClick={() => setActiveTabFor(integrante.id, 'profile')}
          className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${
            activeTab === 'profile' 
              ? `bg-gradient-to-r ${isOrangeDivision ? 'from-[#FFA726] to-[#FFB74D]' : 'from-[#00C853] to-[#00E676]'} text-white shadow-lg` 
              : 'text-white/70 hover:text-white hover:bg-white/20'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTabFor(integrante.id, 'skills')}
          className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${
            activeTab === 'skills' 
              ? `bg-gradient-to-r ${isOrangeDivision ? 'from-[#FFA726] to-[#FFB74D]' : 'from-[#00C853] to-[#00E676]'} text-white shadow-lg` 
              : 'text-white/70 hover:text-white hover:bg-white/20'
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTabFor(integrante.id, 'social')}
          className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${
            activeTab === 'social' 
              ? `bg-gradient-to-r ${isOrangeDivision ? 'from-[#FFA726] to-[#FFB74D]' : 'from-[#00C853] to-[#00E676]'} text-white shadow-lg` 
              : 'text-white/70 hover:text-white hover:bg-white/20'
          }`}
        >
          Social
        </button>
      </div>
    );
  }

  const renderIntegranteCard = (integrante) => (
    <div 
      key={integrante.id}
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:border-${DIVISIONS[integrante.division].accentColor.replace('text-', '')}/50 transition-all duration-300 group ${
        integrante.esFundador ? 'ring-2 ring-[#FFA726] shadow-2xl' : 'ring-2 ring-white/60 shadow-2xl'
      }`}
    >
      {/* Badge Fundador */}
      {integrante.esFundador && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-gradient-to-r from-[#FFA726] to-[#FFB74D] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            Fundador
          </span>
        </div>
      )}

      {/* Contenido de la card */}
      <div className="h-80">
        {getActiveTabFor(integrante.id) === 'profile' && renderProfileTab(integrante)}
        {getActiveTabFor(integrante.id) === 'skills' && renderSkillsTab(integrante)}
        {getActiveTabFor(integrante.id) === 'social' && renderSocialTab(integrante)}
      </div>

      {/* Pestañas de navegación */}
      {renderTabs(integrante)}
    </div>
  )

  const renderEmptyDivision = (division) => (
    <div className="text-center py-16 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 border-dashed">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#00C853]/20 to-[#FFA726]/20 rounded-full flex items-center justify-center border-2 border-dashed border-[#00C853]/30">
        <span className="text-4xl text-[#00C853]">+</span>
      </div>
      <h4 className="text-xl font-medium text-white mb-3">¡Pronto se unirá alguien aquí!</h4>
      <p className="text-white/70">Estamos buscando talento para esta área</p>
    </div>
  )

  const renderDivision = (divisionKey, division) => {
    const integrantesEnDivision = INTEGRANTES.filter(i => i.division === divisionKey)
    const hasIntegrantes = integrantesEnDivision.length > 0

    return (
      <div key={divisionKey} className="mb-20">
        {/* Header de la división integrado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className={`w-16 h-16 ${division.bgColor} rounded-2xl flex items-center justify-center border ${division.borderColor} shadow-lg`}>
              <span className="text-3xl">{division.icon}</span>
            </div>
            <div className="text-left">
              <h3 className={`text-4xl font-bold ${division.accentColor} mb-2 leading-tight py-1`}>
                {division.label}
              </h3>
              <div className={`w-full h-1 bg-gradient-to-r ${division.gradient} rounded-full`}></div>
            </div>
          </div>
        </div>

        {/* Contenido de la división sin fondo separado */}
        <div className="relative">
          {/* Grid de integrantes */}
          {hasIntegrantes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {integrantesEnDivision.map(integrante => renderIntegranteCard(integrante))}
            </div>
          ) : (
            renderEmptyDivision(division)
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="integrantes-section" className="relative bg-[#092e15]/80 py-16 px-4 overflow-hidden">
      {/* Difuminado sutil en bordes (fuera del área del título) */}
      <div className="absolute -top-8 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-black/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl text-[#FFA726] mb-4 leading-tight text-center"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
          >
            Integrantes
          </h2>
          <div className="w-24 h-1 bg-[#FFA726]/60 rounded-full mx-auto mb-12"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            "Juntos creamos soluciones que transforman ideas en realidad. Nuestro equipo combina 
            creatividad, experiencia y pasión por la tecnología para llevar tu proyecto al siguiente nivel."
          </p>
        </div>

        {/* Divisiones */}
        {Object.entries(DIVISIONS).map(([divisionKey, division]) =>
          renderDivision(divisionKey, division)
        )}
      </div>
    </section>
  )
}

export default Integrantes
