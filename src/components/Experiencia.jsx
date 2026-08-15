import React from 'react';

const experiencias = [
  {
    id: 1,
    rol: "Agente Fiscalizador (CAS N° 093)",
    empresa: "SUNAT",
    fecha: "Mayo 2026 - Presente",
    descripcion: "Evaluación y control de obligaciones tributarias y categorías de renta para asegurar el cumplimiento normativo a nivel nacional.",
    herramientas: ["Legislación Tributaria", "Análisis de Datos", "Gestión de Procesos"]
  },
  {
    id: 2,
    rol: "Desarrollador de Sistema Web (IA)",
    empresa: "Chic Chemin (Miraflores)",
    fecha: "Abril 2026",
    descripcion: "Formulación y desarrollo de un sistema web basado en IA para el control automatizado de inventarios. Se eliminaron tareas manuales y se optimizó la gestión de stock.",
    herramientas: ["IA", "Automatización", "Bases de Datos", "Python"]
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 relative overflow-hidden">
      
      {/* Encabezado de la Sección */}
      <div className="text-center mb-20 relative z-10">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          02. Trayectoria
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-main font-serif">
          Mi Experiencia
        </h2>
      </div>

      {/* Contenedor Principal de la Línea de Tiempo */}
      <div className="relative w-full">
        
        {/* LA LÍNEA CENTRAL PRINCIPAL */}
        {/* Modificado: Aplicamos -translate-x-1/2 a todos los tamaños para centrado perfecto */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2 z-0"></div>

        {/* Mapeo de las Experiencias */}
        <div className="flex flex-col gap-12 md:gap-8">
          {experiencias.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full group">
                
                {/* 1. EL NODO RADIACTIVO (Círculo) */}
                {/* CORRECCIÓN: Agregamos top-1/2, -translate-y-1/2 y -translate-x-1/2 */}
                <div className="absolute top-1/2 left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-white/20 bg-background -translate-y-1/2 -translate-x-1/2 z-20 transition-all duration-500 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_#ffef15]"></div>

                {/* 2. LA LÍNEA CONECTORA (Flujo de datos) */}
                {/* Ajustamos el ancho (w-12 y md:w-16) para que toque exactamente el borde de la tarjeta */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-10 md:w-16 h-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary z-10
                    ${isLeft 
                        ? 'left-6 md:left-auto md:right-1/2' 
                        : 'left-6 md:left-1/2' 
                    }
                  `}
                ></div>

                {/* 3. LA TARJETA (Card) */}
                {/* Modificamos el padding (pl-16) para que empiece exactamente donde termina la línea horizontal */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 relative z-20 
                    ${isLeft ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}
                `}>
                  
                  <div className={`p-6 rounded-2xl bg-surface border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5
                      ${isLeft ? 'md:text-right' : 'md:text-left'}
                  `}>
                    
                    <span className="text-primary/80 font-mono text-sm tracking-wide mb-2 block">
                      {exp.fecha}
                    </span>
                    
                    <h3 className="text-xl font-bold text-text-main mb-1">
                      {exp.rol}
                    </h3>
                    
                    <h4 className="text-text-muted font-medium mb-4">
                      {exp.empresa}
                    </h4>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {exp.descripcion}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.herramientas.map((herramienta, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-text-muted rounded-full border border-white/10 transition-colors group-hover:border-primary/30 group-hover:text-white">
                          {herramienta}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}