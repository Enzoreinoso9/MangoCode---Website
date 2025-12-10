import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoB from '../../assets/LogoB.png'
import logo from '../../assets/Logo.png'
import { ImArrowUp } from 'react-icons/im'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=hero')
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServicios = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/?scrollTo=servicios')
      return
    }
    const section = document.getElementById('servicios-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNosotros = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/?scrollTo=nosotros')
      return
    }
    const section = document.getElementById('nosotros-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProyectos = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=proyectos')
      return
    }
    document.getElementById('proyectos-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToIntegrantes = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=integrantes')
      return
    }
    document.getElementById('integrantes-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContacto = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=contacto')
      return
    }
    document.getElementById('contacto-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className="navbar bg-transparent pl-0 pr-6 lg:pl-0 lg:pr-5 py-0 min-h-0 items-center -mt-2 lg:-mt-8">
        <div className="flex-1">
          <a 
            onClick={scrollToTop}
            className="text-2xl lg:text-3xl font-bold cursor-pointer hover:text-orange-500 transition-colors duration-300 flex items-center leading-none"
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt="logo" className="block h-12 w-auto lg:h-[148px]" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-6 gap-4 lg:gap-6">
            <li><a className="hover:text-[#FFA726] text-base lg:text-lg font-bold" href="#nosotros-section" onClick={scrollToNosotros}>Nosotros</a></li>
            <li><a className="hover:text-[#FFA726] text-base lg:text-lg font-bold" href="#servicios-section" onClick={scrollToServicios}>Servicios</a></li>
            <li><a className="hover:text-[#FFA726] text-base lg:text-lg font-bold" href="#proyectos-section" onClick={scrollToProyectos}>Proyectos</a></li>
            <li><a className="hover:text-[#FFA726] text-base lg:text-lg font-bold" href="#integrantes-section" onClick={scrollToIntegrantes}>Integrantes</a></li>
            <li><a className="hover:text-[#FFA726] text-base lg:text-lg font-bold" href="#contacto-section" onClick={scrollToContacto}>Contactanos</a></li>
          </ul>
        </div>
      </div>

      {isScrolled && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="bg-green-500 hover:bg-[#FFA726] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ImArrowUp />
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
