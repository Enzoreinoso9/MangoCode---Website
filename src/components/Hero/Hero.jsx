import Mango3DModel from '../3DModel/Mango3DModel'
import './Hero.css'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-start justify-center pt-0 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Contenido del lado izquierdo */}
          <div className="space-y-7">
            <h1
              className="text-5xl lg:text-7xl leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Bienvenido a <span className="text-[#FFA726]">Mango</span><span className="text-[#00C853]">Code</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white-600 leading-relaxed font-regular">
                Software moderno, rápido y hecho para durar. Construimos como se debe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-[#FFA726] hover:bg-[#FFB74D] text-white text-shadow font-semibold rounded-full shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105 animate-pulseScale">
                Conoce Nuestros Servicios
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FFA726] font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                Ver Proyectos
              </button>
            </div>
          </div>
          
          {/* Modelo 3D del lado derecho */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] flex items-center justify-center">
              <Mango3DModel />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 