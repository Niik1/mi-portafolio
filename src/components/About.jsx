import React from "react";

// 1. Tu lista de tecnologías (Fácil de actualizar)
const techStack = [
    { nombre: "Excel", icono: "/public/excel.svg" },
    { nombre: "SQL", icono: "/public/sqlserver.svg" },
    { nombre: "Python", icono: "/public/python.svg" },
    { nombre: "Power BI", icono: "/public/powerbi.svg" },
    { nombre: "Looker Studio", icono: "/public/looker.svg" },
    { nombre: "N8N", icono: "/public/n8ncolor.svg" },
    { nombre: "HTML", icono: "/public/html5.svg" },
    { nombre: "CSS", icono: "/public/css.svg" },
    { nombre: "Java", icono: "/public/java.svg" },
    { nombre: "Javascript", icono: "/public/javascript.svg" },
    
];

export default function About() {

    // 2. El truco del loop perfecto:
    // Repetimos tu lista base 3 veces para crear un "bloque" lo suficientemente largo para monitores grandes.
    const bloque = [...techStack, ...techStack, ...techStack];
    // Luego, unimos dos bloques idénticos para que el desplazamiento de -50% coincida milimétricamente.
    const carruselInfinito = [...bloque, ...bloque];

    return (
        <section
        id="sobremi"
        className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24"
        >
        {/* =========================================
            PARTE SUPERIOR: Foto y Texto (Opción A)
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado Izquierdo: Fotografía Limpia */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-surface border border-white/5">
                {/* Reemplaza el src con tu foto real */}
                <img
            src="https://i.pinimg.com/736x/fe/2f/40/fe2f4092648b860f699dde4405112771.jpg"
            alt="Nikcey Bada trabajando"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            {/* Lado Derecho: Información */}
            <div className="flex flex-col text-left">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                01. Sobre Mí
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-text-main mb-6 font-serif">
                Datos limpios, <br />
                <span className="text-text-muted">Análisis profundo.</span>
                </h2>

            <div className="text-text-muted space-y-4 text-lg leading-relaxed">
                <p>
                Soy Ingeniero de Sistemas Computacionales con experiencia en
                automatización, análisis de datos y optimización de procesos
                mediante el uso de herramientas de Business Intelligence y
                programación.
                </p>
                <p>
                Experiencia en el desarrollo de dashboards e indicadores clave de
                desempeño (KPIs) en Power BI y Looker Studio, así como en la
                automatización de reportes y procesos mediante Python, Google Apps
                Script y Excel avanzado. Perfil analítico, proactivo y orientado a
                la mejora.
                </p>
            </div>

            {/* Subtítulo y Checks de Habilidades Blandas */}
            <div className="mt-10">
                <h3 className="text-text-hover font-semibold text-xl mb-4">
                Habilidades Blandas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                "Resolución de problemas",
                "Pensamiento analítico",
                "Comunicación efectiva",
                "Adaptabilidad al cambio",
                ].map((habilidad, index) => (
                    <li
                    key={index}
                    className="flex items-center gap-3 text-text-muted"
                    >
                        {/* Icono de Check Esmeralda */}
                        <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                            />
                        </svg>
                    {habilidad}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>

      {/* =========================================
          PARTE INFERIOR: Loop de Tecnologías
          ========================================= */}
      <div className="mt-8 pt-8 border-t border-white/5 overflow-hidden">
        <h3 className="text-center text-text-hover font-medium tracking-widest uppercase mb-12">
        Tecnologías y Habilidades Técnicas
      </h3>
      
      <div className="relative flex overflow-hidden group">
        
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Cambiamos techStack.map por carruselInfinito.map y aseguramos el w-max */}
        <div className="flex w-max gap-16 items-center animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {carruselInfinito.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-3 min-w-max opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img 
                src={tech.icono} 
                alt={tech.nombre} 
                className="h-12 w-12 object-contain bg-surface/50 rounded-lg p-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${tech.nombre.charAt(0)}&background=2a2d42&color=fff`;
                }}
              />
              <span className="text-xs text-text-muted font-medium">{tech.nombre}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
