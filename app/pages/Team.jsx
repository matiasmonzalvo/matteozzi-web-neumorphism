import { FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('.team');

      elements.forEach((element) => {
        if (viewportWidth < 1024) {
          element.setAttribute('data-scroll-speed', '0');
        }
      });
    };

    updateScrollSpeed();
    window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);

  return (
    <section
      id="team"
      className="bg-white text-black p-4 sm:px-8 sm:pt-32 pb-8 relative overflow-hidden"
      data-scroll-section
    >
      <div className="w-[80%] mx-auto relative z-10 py-6 sm:pt-16">
        <div className="team flex flex-col items-start justify-start w-full">
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            Team
          </span>
          <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
            Nuestro Equipo
          </h1>
          <p className="text-sm lg:text-[0.9vw] text-gray-600 mt-4 sm:mt-6">
            Conformado por profesionales altamente capacitados y comprometidos
            con la innovación y el éxito de cada proyecto.
          </p>
        </div>

        <div className="team flex flex-col items-center justify-center mt-16 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 w-[90%] lg:w-[80%] text-center mt-16">
            {/* CARD1 */}
            <div className="h-[400px]">
              <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-gradient-to-r from-[#DEE3CD] to-[#93bec7]">
                <a
                  href="https://www.linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-30 text-gray-50 hover:text-gray-100"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <img
                  src="/member1.png"
                  alt="Member"
                  className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">
                Tomás Agustín Matteozzi
              </h3>
              <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
                CEO
              </span>
            </div>
            {/* CARD1 */}
            <div className="h-[400px]">
              <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-[#93bec7]">
                <a
                  href="https://www.linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-30 text-gray-50 hover:text-gray-100"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <img
                  src="/member1.png"
                  alt="Member"
                  className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">
                Tomás Agustín Matteozzi
              </h3>
              <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
                Fundador de la empresa
              </span>
            </div>
            {/* CARD1 */}
            <div className="h-[400px]">
              <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-gradient-to-r from-[#93bec7] to-[#46939f]">
                <a
                  href="https://www.linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-30 text-gray-50 hover:text-gray-100"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <img
                  src="/member1.png"
                  alt="Member"
                  className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">
                Tomás Agustín Matteozzi
              </h3>
              <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
                CTO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
