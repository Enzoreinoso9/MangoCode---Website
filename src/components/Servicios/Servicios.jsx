import { SlGlobe, SlScreenSmartphone, SlSettings } from "react-icons/sl";

const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio o proyecto personal.',
    icono: SlGlobe,
    bullets: [
      'Diseño responsive y adaptable',
      'Optimización SEO y rendimiento',
      'Integración con APIs y servicios',
    ],
  },
  {
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Desarrollamos apps móviles nativas y multiplataforma para Android y iOS, adaptadas a tus necesidades.',
    icono: SlScreenSmartphone,
    bullets: [
      'Apps nativas e híbridas',
      'Publicación en stores',
      'Notificaciones push y actualizaciones',
    ],
  },
  {
    titulo: 'Soluciones a Medida',
    descripcion: 'Automatizamos procesos y creamos software personalizado para potenciar tu empresa.',
    icono: SlSettings,
    bullets: [
      'Análisis de procesos',
      'Desarrollo personalizado',
      'Capacitación y soporte técnico',
    ],
  },
];

const Servicios = () => {
  return (
    <section id="servicios-section" className="relative  py-16 px-4 overflow-hidden">
      {/* Difuminado sutil en bordes (fuera del área del título) */}
     
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div>
        <h2
          className="text-6xl text-center mb-4 text-[#FFA726]"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
          >
          Servicios
        </h2>
        <div className="w-24 h-1 bg-[#FFA726] rounded-full mx-auto mb-12"></div>
          </div>
        <div className="flex flex-col gap-8">
          {servicios.map((servicio, idx) => {
            const Icono = servicio.icono;
            return (
            <div
              key={idx}
                className="group flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 gap-6 md:gap-10 border border-white/10 hover:border-[#FFA726]/60 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA726]/10 hover:scale-105"
            >
                {/* Icono */}
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#FFA726]/20 to-[#FFA726]/10 rounded-xl border border-[#FFA726]/30 group-hover:border-[#FFA726]/60 transition-all duration-300">
                  <Icono className="w-12 h-12 md:w-16 md:h-16 text-[#FFA726]" />
              </div>
              {/* Texto */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#00C853]">{servicio.titulo}</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">{servicio.descripcion}</p>
                  {/* Bullets específicos del servicio */}
                  <div className="flex flex-col gap-2">
                    {servicio.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-center gap-2 text-white/90">
                        <div className="w-2 h-2 bg-[#FFA726] rounded-full flex-shrink-0"></div>
                        <span className="text-base">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;