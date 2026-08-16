import React, { useRef, useState, useEffect } from 'react';

// 1. Base de datos de tus proyectos
const proyectos = [
    {
    id: 1,
    titulo: "Sistema Web con IA",
    categoria: "Desarrollo Frontend & Backend",
    año: "2026",
    descripcionCorta: "Sistema de gestión para la tienda Chic Chemin que centraliza el control automatizado de inventarios mediante Inteligencia Artificial.",
    descripcionLarga: "Desarrollo integral de un sistema web basado en IA para el control automatizado de inventarios en la tienda Chic Chemin (Miraflores). El proyecto resuelve problemas reales de gestión de stock, eliminando tareas manuales repetitivas y permitiendo decisiones estratégicas basadas en el análisis de datos predictivo.",
    herramientas: ["React", "Python", "IA", "PostgreSQL", "Tailwind CSS"],
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", 
    enlace: "#", 
    },
    {
    id: 2,
    titulo: "Dashboard Financiero",
    categoria: "Business Intelligence",
    año: "2025",
    descripcionCorta: "Panel interactivo para el análisis de rendimiento comercial y proyecciones, automatizando el flujo de datos.",
    descripcionLarga: "Creación de un panel interactivo corporativo para el análisis profundo de ventas trimestrales, KPIs financieros y proyecciones. Se diseñó una arquitectura de datos que automatiza la ingesta desde múltiples fuentes (Excel, SQL) para generar reportes ejecutivos en tiempo real.",
    herramientas: ["Power BI", "SQL", "Excel Avanzado", "DAX"],
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", 
    enlace: "#",
    },
    {
    id: 3,
    titulo: "Automatización Fiscal",
    categoria: "Análisis de Datos",
    año: "2026",
    descripcionCorta: "Script de automatización para la evaluación y control masivo de obligaciones tributarias y categorías de renta.",
    descripcionLarga: "Desarrollo de un flujo automatizado para la evaluación, control y cruce de datos de obligaciones tributarias. La herramienta procesa grandes volúmenes de información fiscal para asegurar el cumplimiento normativo, reduciendo el margen de error humano al 0%.",
    herramientas: ["Python", "Pandas", "Google Apps Script"],
    imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    enlace: "#",
  }
];

// 2. Componente de la Tarjeta Interactiva
const SpotlightCard = ({ proyecto, onClick }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(proyecto)}
      // 1. Aumentamos la altura de h-[420px] a h-[520px] para ese formato vertical
      className="relative flex flex-col overflow-hidden rounded-2xl bg-surface border border-white/5 cursor-pointer group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[520px]"
    >
      {/* Reflector (Spotlight) */}
      <div
        className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(236, 236, 226, 0.2), transparent 30%)`,
        }}
      />

      {/* Imagen Superior con efecto Zoom */}
      <div className="relative w-full h-56 overflow-hidden">
        
        <img 
          src={proyecto.imagen} 
          alt={proyecto.titulo} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu z-0"
        />
        
      </div>

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 flex flex-col flex-grow p-7">
        
        {/* Categoría superior (Como en tu foto de referencia) */}
        <span className="inline-block w-max px-3 py-1 bg-white/5 border border-white/10 rounded text-white/60 font-mono text-xs font-bold tracking-wider uppercase mb-4">
          {proyecto.categoria}
        </span>

        <h3 className="text-2xl font-bold text-text-main font-serif transition-colors duration-300 mb-3">
          {proyecto.titulo}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
          {proyecto.descripcionCorta}
        </p>

        {/* Etiquetas redondas con transición de opacidad */}
        <div className="mt-auto flex flex-wrap gap-2">
          {proyecto.herramientas.map((herramienta, i) => (
            <span 
              key={i} 
              // 3. Usamos rounded-full y py-1.5 px-4 para darles la forma de píldora
              className="px-4 py-1.5 text-xs font-medium rounded-full border border-white/10 transition-all duration-300 text-white/40 group-hover:text-white/80 group-hover:border-white/20 bg-transparent"
            >
              {herramienta}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
// 3. Componente de la Ventana Modal de Proyectos
const ProjectModal = ({ proyecto, onClose }) => {
  // 1. Estado para manejar la animación de entrada/salida
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 2. Solo ocultamos el scroll nativamente
    document.body.style.overflow = 'hidden';
    
    // 3. Activamos la animación un instante después de renderizar
    requestAnimationFrame(() => setIsVisible(true));
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // 4. Función especial para cerrar con animación
  const handleClose = () => {
    setIsVisible(false);
    // Esperamos 300ms (lo que dura la transición) antes de desmontar el componente
    setTimeout(onClose, 300); 
  };

  if (!proyecto) return null;

  return (
    <div 
      // Efecto Cristal Esmerilado (Blur) progresivo
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      // IMPORTANTE: Cambiamos onClose por handleClose para que haya animación al cerrar haciendo clic afuera
      onClick={handleClose} 
    >
      <div 
        // Efecto Scale-in desde el centro hacia arriba
        className={`relative w-full max-w-3xl bg-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh] transition-all duration-500 ease-out transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Botón de cerrar (X) */}
        <button 
          // IMPORTANTE: Cambiamos onClose por handleClose aquí también
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen: Delgada en celular (h-36), amplia en PC (h-72) */}
        <div className="w-full h-60 sm:h-90 relative shrink-0">
          <img 
            src={proyecto.imagen} 
            alt={proyecto.titulo} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenedor de texto optimizado */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 flex flex-col">
          
          <div className="flex items-center gap-1.5 text-primary text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3 shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {proyecto.categoria} • {proyecto.año}
          </div>
          
          <h2 className="text-xl sm:text-3xl font-bold text-text-main font-serif mb-2 sm:mb-4 shrink-0">
            {proyecto.titulo}
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-snug sm:leading-relaxed mb-4 sm:mb-8 shrink-0">
            {proyecto.descripcionLarga}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8 shrink-0">
            {proyecto.herramientas.map((herramienta, i) => (
              <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-md border border-white/10 text-white/80 bg-white/5">
                {herramienta}
              </span>
            ))}
          </div>

          <div className="mt-auto shrink-0 pb-1">
            <a 
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 bg-primary text-background text-sm sm:text-base font-bold rounded-lg hover:bg-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Componente Principal de la Sección
export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // CORRECCIÓN 2: Cambiado 'py-24' por 'pt-12 pb-24' para equilibrar los márgenes
    <section id="proyectos" className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-30 pb-24 relative">
      
      <div className="mb-16">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          03. Portafolio
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-main font-serif">
          Proyectos Destacados
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <SpotlightCard 
            key={proyecto.id} 
            proyecto={proyecto} 
            onClick={(proj) => setSelectedProject(proj)} 
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          proyecto={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
}