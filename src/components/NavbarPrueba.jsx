export default function NavbarPrueba() {
    return (
        <header className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between py-5">
                    <a href="#" className="flex items-center gap-2">
                        <img  
                            src="https://i.pinimg.com/1200x/5e/7b/60/5e7b604aacf57df6ab8c1629dd11a337.jpg" 
                            alt="Water Logo" 
                            className="w-[100px] h-8 objec-cover rounded" />
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
                        <a href="#" className="hover:text-white transition font-geist">
                            Certificados
                        </a>
                        <a href="#" className="hover:text-white transition font-geist">
                            Experiencia
                        </a>
                        <a href="#" className="hover:text-white transition font-geist">
                            Habilidades
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="#" className="hidden sm:inline-flex text-sm text-white/80 hover:text-white transition font-geist">
                            Iniciar Sesion
                        </a>
                        <a href="#" className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-4 py-2.5 text-sm text-white/80 hover:text-white font-medium hover:bg-white/10 transition font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                            >
                                <path d="m10 17 5-5-5-5" className=""></path>
                                <path d="M15 12H3" className=""></path>
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" className=""></path>            
                            </svg>
                            Crear Cuenta
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}