import React from 'react';

const experiencias = [
  {
    id: 1,
    rol: "Analista de Business Intelligence (BI) y Automatización",
    empresa: "Importaciones Game Center Latam S.A.C - Lima",
    fecha: "Agosto 2025 - Junio 2026",
    descripcion: [
      "Implementé procesos ETL para la recolección, limpieza y transformación de datos desde múltiples fuentes, garantizando la calidad y estructura de la información.",
      "Diseñé dashboards interactivos en Power BI y Looker Studio para el monitoreo de KPIs, identificando patrones de ventas que optimizaron la gestión de inventarios.",
      "Desarrolle un sistema automatizado de precios de publicacion segun reglas internas de las diferentes plataformas e-commerce (Mercado Libre, Falabella, Ripley, Yape, Rappi).",
      "Optimicé flujos operativos mediante reportes automatizados, reduciendo las tareas manuales y errores administrativos.",
      "Desarrollé un generador automatizado de catálogos en Python para clientes mayoristas, reduciendo drásticamente las tareas manuales y tiempos operativos."
    ],
    herramientas: ["Power BI", "Python", "Looker Studio", "ETL", "SQL", "Análisis de Datos", "Automatización"]
  },
  {
    id: 2,
    rol: "Desarrollador de Sistema Web",
    empresa: "Nanas & Amas Perú - Trujillo",
    fecha: "Agosto 2024 - Diciembre 2024",
    descripcion: [
      "Colaboré en la migración de un sistema de escritorio hacia una plataforma web moderna, trabajando en equipo para centralizar la gestión operativa.",
      "Contribui en el diseño e implementación de las interfaces de usuario en el frontend utilizando React, creando una experiencia visual e interactiva fluida para la búsqueda de perfiles.",
      "Participé en la construcción del proyecto desde cero, implementando el modelado relacional en PostgreSQL y la API en Node.js.",
      "Contribuí en la puesta en producción del sistema, ejecutando resoluciones de errores (bug fixing) y optimizaciones continuas durante la fase de mantenimiento."
    ],
    herramientas: ["React", "Node js", "PostgresSQL", "Diseño UI/UX", "Trabajo en Equipo"]
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 relative overflow-hidden">
      
      <div className="text-center mb-20 relative z-10">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
          02. Trayectoria
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-main font-serif">
          Mi Experiencia
        </h2>
      </div>

      <div className="relative w-full">  
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2 z-0"></div>
        <div className="flex flex-col gap-12 md:gap-8">
          {experiencias.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="absolute top-1/2 left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-white/20 bg-background -translate-y-1/2 -translate-x-1/2 z-20 transition-all duration-500 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_#ffef15]"></div>
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-10 md:w-16 h-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary z-10
                    ${isLeft 
                        ? 'left-6 md:left-auto md:right-1/2' 
                        : 'left-6 md:left-1/2' 
                    }
                  `}
                ></div>

                <div className={`w-full md:w-1/2 pl-16 md:pl-0 relative z-20 
                    ${isLeft ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}
                `}>
                  <div className={`p-6 rounded-2xl bg-surface border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 md:text-left`}>
                    
                    <span className="text-primary/80 font-mono text-sm tracking-wide mb-2 block">
                      {exp.fecha}
                    </span>
                    
                    <h3 className="text-xl font-bold text-text-main mb-1">
                      {exp.rol}
                    </h3>
                    
                    <h4 className="text-text-muted font-medium mb-4">
                      {exp.empresa}
                    </h4>
                    <ul className="text-white/60 text-sm leading-relaxed mb-6 space-y-2 list-disc list-inside">
                      {exp.descripcion.map((item, i) => (
                        <li key={i} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 md:justify-start">
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