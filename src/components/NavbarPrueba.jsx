import { useState, useEffect } from 'react';

export default function NavbarPrueba() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                isScrolled 
                    ? 'bg-background/80 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent' 
            }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-5' : 'py-5'}`}>                
                    <a href="#" className="flex items-center gap-2">
                        <img  
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png" 
                            alt="Water Logo" 
                            className="w-[100px] h-8 object-cover rounded" 
                        />
                    </a>
                    <nav className="hidden md:flex items-center gap-12 text-sm text-white/80">
                        <a href="#inicio" className="hover:text-text-hover transition font-geist">
                            Inicio
                        </a>
                        <a href="#sobremi" className="hover:text-text-hover transition font-geist">
                            Sobre mí
                        </a>
                        <a href="#experiencia" className="hover:text-text-hover transition font-geist">
                            Experiencia
                        </a>
                        <a href="#proyectos" className="hover:text-text-hover transition font-geist">
                            Proyectos
                        </a>
                        <a href="#certificados" className="hover:text-text-hover transition font-geist">
                            Certificados
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="#" className="inline-flex items-center rounded-md border-gradient before:rounded-md bg-primary/100 px-4 py-2.5 text-sm text-black/90 font-medium hover:bg-primary-hover/100 transition font-geist">
                            Contactame
                        </a>
                    </div>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linea/80 from-transparent via-venus-pink/100 to-transparent"></span>
            
            </div>
        </header>
    );
}