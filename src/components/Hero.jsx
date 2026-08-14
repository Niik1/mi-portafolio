export default function Hero() {
    return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado Izquierdo: Textos y Botones */}
            <div className="flex flex-col items-start text-left">
                {/* Etiqueta Superior */}
                <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                Hola, soy Nikcey Bada
                </span>

                {/* Título Principal */}
                <h1 className="text-5xl lg:text-7xl font-bold text-text-main leading-[1.1] font-serif">
                Data Analyst & <br />
                <span className="text-primary font-sans">Automatización</span>
                </h1>

                {/* Subtítulo / Propuesta de Valor */}
                <p className="mt-6 text-text-muted text-lg max-w-lg leading-relaxed">
                Transformo datos complejos en historias claras que impulsan el
                crecimiento de tu negocio. A través de la automatización de
                procesos, elimino tareas repetitivas para resolver problemas reales
                y permitirte tomar decisiones estratégicas.
                </p>

            {/* Contenedor de Botones Principales */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
                {/* Botón Primario */}
                <a
                href="#proyectos"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background px-8 py-3.5 rounded-md font-medium transition-colors"
                >
                Ver Proyectos
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>

                {/* Botón Secundario */}
                <a
                href="#contacto"
                className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 text-text-main px-8 py-3.5 rounded-md font-medium transition-colors"
                >
                Descargar CV
                </a>
            </div>

            {/* Redes Sociales (GitHub y LinkedIn) */}
            <div className="mt-12 flex items-center gap-6 border-t border-white/5 pt-8 w-full max-w-md">
                <a
                href="https://github.com/TuUsuario"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted hover:text-text-main transition-colors"
                aria-label="GitHub"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>

                <a
                href="https://linkedin.com/in/TuUsuario"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted hover:text-text-main transition-colors"
                aria-label="LinkedIn"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
            </div>
        </div>

        {/* Lado Derecho: Imagen y Resplandor */}
        <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
            {/* El resplandor (Glow) detrás de la foto */}
            <div className="absolute inset-0 bg-resplandor/15 blur-[100px] rounded-full scale-110"></div>
                {/* Tu Fotografía */}
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-surface">
                    {/* Reemplaza el src con la ruta de tu foto real (ej: /perfil.png) */}
                    <img
                    src="https://i.pinimg.com/736x/fe/2f/40/fe2f4092648b860f699dde4405112771.jpg"
                    alt="Perfil"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
    );
}
