const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio o proyecto personal.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
  },
  {
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Desarrollamos apps móviles nativas y multiplataforma para Android y iOS, adaptadas a tus necesidades.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/2721/2721304.png',
  },
  {
    titulo: 'Soluciones a Medida',
    descripcion: 'Automatizamos procesos y creamos software personalizado para potenciar tu empresa.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/2721/2721307.png',
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
        <div className="w-24 h-1 bg-[#FFA726]/60 rounded-full mx-auto mb-12"></div>
          </div>
        <div className="flex flex-col gap-8">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 gap-6 md:gap-10 hover:border-[#FFA726]/50 hover:bg-white/15 transition-all duration-300"
            >
              {/* Imagen/logo/sticker */}
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-xl ">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              {/* Texto */}
              <div className="flex-1 text-center md:text-left ">
                <h3 className="text-2xl font-semibold mb-2 text-[#00C853]">{servicio.titulo}</h3>
                <p className="text-white/90 text-lg">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;