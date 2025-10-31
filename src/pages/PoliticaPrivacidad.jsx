import { useEffect } from 'react'
import '../App.css'
import leafImage from '../assets/Leaf.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const PoliticaPrivacidad = () => {
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

  return (
    <div className="app-container">
      <div className="background-wrapper">
        <div className="background-container"></div>
        <div className="blur-layer"></div>
      </div>
      <div className="content">
        <Navbar />
        
        {/* Contenido de Política de Privacidad */}
        <section id="politica-privacidad-section" className="py-20 px-4 relative overflow-hidden min-h-screen">
          {/* Fondo con gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a7d44]/20 to-[#1e3a24]/20"></div>
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C853]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFA726]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#00E676]/10 rounded-full blur-2xl"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Título principal */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-[#FFA726] mb-6 relative"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.5px' }}>
                Política de Privacidad
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FFA726] rounded-full"></div>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Conoce cómo protegemos y manejamos tu información personal
              </p>
            </div>

            {/* Contenido principal */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Fecha de actualización */}
              <div className="mb-8 p-4 bg-gradient-to-r from-[#FFA726]/20 to-[#00C853]/20 rounded-xl border border-white/20">
                <p className="text-white/80 text-sm font-medium">
                  Última actualización: 20 de septiembre de 2025
                </p>
              </div>

              {/* Introducción */}
              <div className="mb-12">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza el Servicio, y le informa sobre sus derechos de privacidad y cómo la ley lo protege.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Usamos sus datos personales para proporcionar y mejorar el Servicio. Al usar el Servicio, usted acepta la recopilación y el uso de la información de acuerdo con esta Política de Privacidad. Esta Política de Privacidad fue creada con la ayuda del <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank" className="text-[#00C853] hover:text-[#00E676] transition-colors duration-300 underline">Generador de Políticas de Privacidad</a>.
                </p>
              </div>

              {/* Interpretación y Definiciones */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Interpretación y Definiciones
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Interpretación</h3>
                    <p className="text-white/90 leading-relaxed">
                      Las palabras cuya inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o plural.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Definiciones</h3>
                    <p className="text-white/90 mb-4">Para los efectos de esta Política de Privacidad:</p>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <ul className="space-y-4 text-white/90">
                        <li><strong className="text-[#FFA726]">Cuenta</strong>: significa una cuenta única creada para que usted acceda a nuestro Servicio o a partes de nuestro Servicio.</li>
                        <li><strong className="text-[#FFA726]">Afiliado</strong>: significa una entidad que controla, es controlada por, o está bajo control común con una parte, donde "control" significa la propiedad del 50% o más de las acciones, participación de capital u otros valores con derecho a voto para la elección de directores u otra autoridad de gestión.</li>
                        <li><strong className="text-[#FFA726]">Compañía</strong> (referida como "la Compañía", "Nosotros" o "Nuestro" en este Acuerdo) se refiere a MangoCode, B° La Nueva Formosa Mz60 C19.</li>
                        <li><strong className="text-[#FFA726]">Cookies</strong>: son pequeños archivos que se colocan en su computadora, dispositivo móvil o cualquier otro dispositivo por un sitio web, que contienen detalles de su historial de navegación en ese sitio web, entre otros usos.</li>
                        <li><strong className="text-[#FFA726]">País</strong>: se refiere a Argentina.</li>
                        <li><strong className="text-[#FFA726]">Dispositivo</strong>: significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital.</li>
                        <li><strong className="text-[#FFA726]">Datos Personales</strong>: es cualquier información que se relacione con una persona identificada o identificable.</li>
                        <li><strong className="text-[#FFA726]">Servicio</strong>: se refiere al Sitio Web.</li>
                        <li><strong className="text-[#FFA726]">Proveedor de Servicios</strong>: significa cualquier persona física o jurídica que procese los datos en nombre de la Compañía. Se refiere a empresas o personas externas contratadas por la Compañía para facilitar el Servicio, prestar el Servicio en nombre de la Compañía, realizar servicios relacionados con el Servicio o ayudar a la Compañía a analizar cómo se utiliza el Servicio.</li>
                        <li><strong className="text-[#FFA726]">Datos de Uso</strong>: se refiere a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o por la propia infraestructura del Servicio (por ejemplo, la duración de una visita a una página).</li>
                        <li><strong className="text-[#FFA726]">Sitio Web</strong>: se refiere a MangoCode, accesible desde <a href="www.magocode.com" rel="external nofollow noopener" target="_blank" className="text-[#00C853] hover:text-[#00E676] transition-colors duration-300 underline">www.magocode.com</a></li>
                        <li><strong className="text-[#FFA726]">Usted</strong>: significa la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recopilación y Uso de Sus Datos Personales */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Recopilación y Uso de Sus Datos Personales
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>

                <div className="space-y-8">
                  {/* Tipos de Datos Recopilados */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Tipos de Datos Recopilados</h3>
                    
                    <div className="space-y-6">
                      {/* Datos Personales */}
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4">Datos Personales</h4>
                        <p className="text-white/90 mb-4">
                          Al utilizar nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que puede usarse para contactarlo o identificarlo. La información de identificación personal puede incluir, entre otros:
                        </p>
                        <ul className="space-y-2 text-white/90 ml-4">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                            Dirección de correo electrónico
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                            Nombre y apellido
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                            Datos de uso
                          </li>
                        </ul>
                      </div>

                      {/* Datos de Uso */}
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4">Datos de Uso</h4>
                        <p className="text-white/90 mb-4">
                          Los Datos de Uso se recopilan automáticamente al utilizar el Servicio.
                        </p>
                        <p className="text-white/90 mb-4">
                          Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet (por ejemplo, dirección IP) de su dispositivo, tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visita, la hora y fecha de su visita, el tiempo que pasa en esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
                        </p>
                        <p className="text-white/90 mb-4">
                          Cuando accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, incluyendo, pero no limitado a, el tipo de dispositivo móvil que utiliza, el ID único de su dispositivo móvil, la dirección IP de su dispositivo móvil, su sistema operativo móvil, el tipo de navegador de Internet móvil que utiliza, identificadores únicos de dispositivos y otros datos de diagnóstico.
                        </p>
                        <p className="text-white/90">
                          También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede al Servicio mediante un dispositivo móvil.
                        </p>
                      </div>

                      {/* Tecnologías de Seguimiento y Cookies */}
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4">Tecnologías de Seguimiento y Cookies</h4>
                        <p className="text-white/90 mb-4">
                          Utilizamos Cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y almacenar cierta información. Las tecnologías de seguimiento que utilizamos incluyen balizas, etiquetas y scripts para recopilar y rastrear información y mejorar y analizar nuestro Servicio.
                        </p>
                        <p className="text-white/90 mb-4">Las tecnologías que utilizamos pueden incluir:</p>
                        <ul className="space-y-3 text-white/90 ml-4">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#FFA726] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-[#FFA726]">Cookies del navegador.</strong> Una cookie es un pequeño archivo colocado en su dispositivo. Puede indicar a su navegador que rechace todas las cookies o que le avise cuando se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda usar algunas partes de nuestro Servicio.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#FFA726] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-[#FFA726]">Balizas web.</strong> Ciertas secciones de nuestro Servicio y nuestros correos electrónicos pueden contener pequeños archivos electrónicos conocidos como balizas web (también llamadas gifs transparentes, etiquetas de píxel y gifs de un solo píxel) que permiten a la Compañía, por ejemplo, contar usuarios que han visitado esas páginas o abierto un correo electrónico, y para otras estadísticas relacionadas con el sitio web.
                            </div>
                          </li>
                        </ul>
                        <p className="text-white/90 mt-4">
                          Las cookies pueden ser "Persistentes" o de "Sesión". Las cookies persistentes permanecen en su computadora o dispositivo móvil cuando está desconectado, mientras que las cookies de sesión se eliminan tan pronto como cierra su navegador web.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Uso de Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Uso de Sus Datos Personales</h3>
                    <p className="text-white/90 mb-4">La Compañía puede usar los Datos Personales para los siguientes fines:</p>
                    <ul className="space-y-2 text-white/90 ml-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                        Proporcionar y mantener nuestro Servicio.
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                        Contactarlo por correo electrónico, teléfono u otros medios relacionados con el Servicio.
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                        Atender y gestionar sus solicitudes hacia nosotros.
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                        Analizar el uso del Servicio y mejorar la experiencia del usuario.
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                        Cumplir con obligaciones legales o contractuales.
                      </li>
                    </ul>
                  </div>

                  {/* Retención de Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Retención de Sus Datos Personales</h3>
                    <p className="text-white/90">
                      La Compañía conservará sus Datos Personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad, o según lo exija la ley.
                    </p>
                  </div>

                  {/* Transferencia de Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Transferencia de Sus Datos Personales</h3>
                    <p className="text-white/90">
                      Su información puede transferirse y mantenerse en computadoras ubicadas fuera de su jurisdicción. Al enviar su información, usted acepta dicha transferencia. La Compañía tomará todas las medidas razonables para asegurar que sus datos se manejen de forma segura.
                    </p>
                  </div>

                  {/* Eliminar Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Eliminar Sus Datos Personales</h3>
                    <p className="text-white/90">
                      Usted tiene derecho a solicitar la eliminación de sus Datos Personales. Puede hacerlo contactándonos directamente.
                    </p>
                  </div>

                  {/* Divulgación de Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Divulgación de Sus Datos Personales</h3>
                    <ul className="space-y-3 text-white/90 ml-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#FFA726] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#FFA726]">Transacciones comerciales:</strong> Sus datos pueden transferirse en caso de fusión, adquisición o venta de activos.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#FFA726] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#FFA726]">Requerimientos legales:</strong> Podemos divulgar sus datos si así lo exige la ley o autoridades competentes.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Seguridad de Sus Datos Personales */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Seguridad de Sus Datos Personales</h3>
                    <p className="text-white/90">
                      Nos esforzamos por usar medios razonables para proteger sus Datos Personales, pero ningún método de transmisión en Internet o de almacenamiento electrónico es 100% seguro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacidad de los Niños */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Privacidad de los Niños
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed">
                    Nuestro Servicio no está dirigido a menores de 13 años. No recopilamos información personal de menores de manera intencional. Si usted es padre/madre y tiene conocimiento de que su hijo nos proporcionó Datos Personales, contáctenos.
                  </p>
                </div>
              </div>

              {/* Enlaces a Otros Sitios Web */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Enlaces a Otros Sitios Web
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed">
                    Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por nosotros. No tenemos control sobre las políticas de privacidad de terceros y le recomendamos revisarlas en cada sitio que visite.
                  </p>
                </div>
              </div>

              {/* Cambios a esta Política de Privacidad */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Cambios a esta Política de Privacidad
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed">
                    Podemos actualizar nuestra Política de Privacidad ocasionalmente. Publicaremos los cambios en esta página y actualizaremos la fecha de "Última actualización".
                  </p>
                </div>
              </div>

              {/* Contáctenos */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#00C853] mb-8 relative">
                  Contáctenos
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00C853] rounded-full"></div>
                </h2>
                <div className="bg-gradient-to-r from-[#FFA726]/20 to-[#00C853]/20 rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 mb-4">Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:</p>
                  <ul className="space-y-3 text-white/90 ml-4">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                      Por correo electrónico: <a href="mailto:mangocode@gmail.com" className="text-[#00C853] hover:text-[#00E676] transition-colors duration-300 underline ml-2">mangocode@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#00C853] rounded-full mr-3"></div>
                      Por teléfono: <a href="tel:+543704854110" className="text-[#00C853] hover:text-[#00E676] transition-colors duration-300 underline ml-2">3704854110</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
