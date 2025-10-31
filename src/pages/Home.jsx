import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import leafImage from '../assets/Leaf.png'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Servicios from '../components/Servicios/Servicios'
import Nosotros from '../components/Nosotros/Nosotros'
import Proyectos from '../components/Proyectos/Proyectos'
import Integrantes from '../components/Integrantes/Integrantes'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'

const Home = () => {
  useEffect(() => {
    const createLeaf = () => {
      const leaf = document.createElement("img");
      leaf.classList.add("leaf");
      leaf.src = leafImage;
      leaf.style.width = `${Math.random() * 30 + 10}px`;
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;

      document.querySelector('.background-wrapper').appendChild(leaf);

      setTimeout(() => {
        leaf.remove();
      }, 10000);
    };

    const interval = setInterval(createLeaf, 500);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation()
  
  // Al entrar a Home, si viene con ?scrollTo=seccion, hace scroll suave a esa sección
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const scrollTo = params.get('scrollTo')
    if (scrollTo) {
      // Espera al próximo tick para asegurar que el DOM esté listo
      requestAnimationFrame(() => {
        const el = document.getElementById(`${scrollTo}-section`)
        el?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.search])

  return (
    <div className="app-container">
      <div className="background-wrapper">
        <div className="background-container"></div>
        <div className="blur-layer"></div>
      </div>
      <div className="content">
        <Navbar />
        <Hero />
        <Nosotros />
        <Servicios />
        <Proyectos />
        <Integrantes />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
