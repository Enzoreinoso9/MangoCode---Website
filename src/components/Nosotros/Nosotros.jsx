import mangui2 from '../../assets/mangui2.png'

const Nosotros = () => {
  return (
    <section id="nosotros-section" className=" py-16 px-4">
      <div>
        <h2
          className="text-6xl text-center mb-4 text-[#FFA726]"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
        >
          Nosotros
        </h2>
        <div className="w-24 h-1 bg-[#FFA726]/60 rounded-full mx-auto mb-12"></div>
      </div>
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda */}
          <div className="space-y-5">
            <p className="text-white/95 text-lg leading-relaxed font-regular">
            En MangoCode, creemos en el poder de la tecnología para transformar ideas en soluciones reales. Nuestro objetivo es acompañar a empresas y emprendedores en su camino hacia la innovación, creando herramientas digitales que agreguen valor y potencien sus proyectos.</p>

<p className="text-white/90 text-lg leading-relaxed font-regular">Con sede en Formosa, Argentina, somos un equipo comprometido con la excelencia, la creatividad y el aprendizaje constante. Nos enfocamos en el desarrollo de aplicaciones web y estamos ampliando nuestra experiencia hacia el desarrollo móvil, con el objetivo de ofrecer un portafolio más versátil y completo.
Nuestra visión es construir relaciones sólidas basadas en confianza, compromiso y resultados, contribuyendo al éxito de cada desafío que asumimos.</p>

<p className="text-white/85 text-lg leading-relaxed font-regular">¡Estamos listos para crecer juntos y llevar tus ideas al próximo nivel!
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <img src={mangui2} alt="Nosotros - MangoCode" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros

