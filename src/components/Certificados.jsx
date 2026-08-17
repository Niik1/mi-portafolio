import React, { useState, useEffect } from 'react';

import imgBachiller from '../assets/Certificado_Bachiller.webp';
import imgCCNASwitches from '../assets/Certificado_CCNA.webp';
import imgCCNA from '../assets/Certificado_CCNAv7.webp';

const certificados = [
  {
    id: 1,
    fecha: "Diciembre 2025",
    titulo: "Bachiller en Ingeniería de Sistemas Computacionales",
    institucion: "Universidad Privada del Norte", 
    imagen: imgBachiller
  },
  {
    id: 2,
    fecha: "Julio 2024",
    titulo: "CCNAv7: Switching, Routing, and Wireless Essentials",
    institucion: "Cisco Networking Academy program",
    imagen: imgCCNASwitches
  },
  {
    id: 3,
    fecha: "Diciembre 2023",
    titulo: "CCNAv7: Introduction to Networks",
    institucion: "Cisco Networking Academy program",
    imagen: imgCCNA
  }
];

const CertModal = ({ cert, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsVisible(true));
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); 
  };

  if (!cert) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose} 
    >
      <div 
        className={`relative transition-all duration-500 ease-out transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()} 
      >

        <div className="relative inline-block">
          
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img 
            src={cert.imagen} 
            alt={cert.titulo} 
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            className="w-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default function Certificados() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificados" className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 relative overflow-hidden">
      
      <div className="mb-16 relative z-10">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          04. Credenciales
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-main font-serif">
          Certificaciones
        </h2>
      </div>

      <div className="relative w-full">
        
        <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/5 hidden md:block z-0"></div>

        <div className="flex flex-col gap-4">
          {certificados.map((cert) => (
            
            <div 
              key={cert.id} 
              className="relative flex flex-col md:flex-row w-full rounded-2xl p-4 md:p-6 transition-colors duration-300 hover:bg-white/[0.02] group"
            >
              
              <div className="absolute left-[20%] top-10 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_12px_#ffef15] hidden md:block z-10"></div>

              <div className="md:w-[20%] shrink-0 pb-3 md:pb-0 md:pt-1.5 flex items-start">
                <span className="text-white/40 font-mono text-sm font-medium tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                  {cert.fecha}
                </span>
              </div>

              <div className="md:w-[80%] md:pl-12 flex flex-col items-start transition-transform duration-500 ease-out group-hover:translate-x-2 relative z-10">
                
                <h2 className="text-xl md:text-1xl  font-mono text-text-main  mb-1 group-hover:text-white transition-colors duration-300">
                  {cert.titulo}
                </h2>
                <p className="text-white/50 text-sm mb-5 font-medium tracking-wide">
                  {cert.institucion}
                </p>

                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-40 h-28 md:w-39 md:h-24 rounded-lg overflow-hidden border border-white/10 cursor-pointer shadow-lg group/thumb bg-surface"
                >
                  <img 
                    src={cert.imagen} 
                    alt="Miniatura" 
                    loading="lazy"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-110 select-none"
                  />
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black transform scale-75 group-hover/thumb:scale-100 transition-transform duration-300 delay-75">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertModal 
          cert={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}

    </section>
  );
}