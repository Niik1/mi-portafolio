export default function NavbarPrueba() {
    return (
        <header className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between py-5">
                    <a href="#" className="flex items-center gap-2">
                        <img  
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png" 
                            alt="Water Logo" 
                            className="w-[100px] h-8 objec-cover rounded" />
                    </a>

                    <nav className="hidden md:flex items-center gap-12 text-sm text-white/80">
                        <a href="#" className="hover:text-text-hover transition font-geist">
                            Inicio
                        </a>
                        <a href="#" className="hover:text-text-hover transition font-geist">
                            Sobre mí
                        </a>
                        <a href="#" className="hover:text-text-hover transition font-geist">
                            Proyectos
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        
                        <a href="#" className="inline-flex items-center  rounded-md border-gradient before:rounded-md bg-primary/100 px-4 py-2.5 text-sm text-black/90  font-medium hover:bg-primary-hover/100 transition font-geist">
                            
                            Contactame
                        </a>
                    </div>
                </div>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linea/80 from-transparent via-venus-pink/100 to-transparent"></span>
            </div>
        </header>
    );
}