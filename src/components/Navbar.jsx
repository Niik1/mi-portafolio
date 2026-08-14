export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent">
      <div
        className="max-w-4xl mx-auto border border-white/10 rounded-full px-6 py-3"
        style={{
          background: "rgba(10, 11, 20, 0.9)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Tu Nombre / Logo */}
          <div className="flex items-center">
            <span className="text-lg font-semibold tracking-tight text-white font-sans">
              Nikcey Bada
            </span>
          </div>

          {/* Enlaces de Navegación Personalizados */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans"
              >
                Dashboard PL-300
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans"
              >
                Automatizaciones
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Botones de Iconos */}
          <div className="flex items-center gap-2">
            <button
              className="bg-white/[0.02] hover:bg-white/10 p-2 rounded-full transition-all duration-300 border border-white/5 cursor-pointer"
              aria-label="Cuenta"
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
                className="w-4 h-4 stroke-[1.5] text-white/60"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button
              className=" bg-white/[0.02] relative hover:bg-white/10 p-2 rounded-full transition-all duration-300 border border-white/5
              cursor-pointer"
              aria-label="Notificaciones"
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
                className="w-4 h-4 stroke-[1.5] text-white/60"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
              {/* Le cambié el color de la notificación a esmeralda (bg-emerald-500) para que combine con tu diseño */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-sans">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
