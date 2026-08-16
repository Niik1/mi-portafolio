import { useState, useEffect } from 'react';

export default function NavbarPrueba() {
    const [isScrolled, setIsScrolled] = useState(false);
    // 1. Nuevo estado para controlar el menú móvil
    const [isOpen, setIsOpen] = useState(false);

    // Control del scroll para el fondo del Navbar
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

    // 2. Bloquear el scroll de la página cuando el menú móvil está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Arreglo para los enlaces del menú móvil (fácil de editar)
    const mobileLinks = [
        { num: '01', name: 'Inicio', href: '#' },
        { num: '02', name: 'Sobre Mí', href: '#sobremi' },
        { num: '03', name: 'Experiencia', href: '#experiencia' },
        { num: '04', name: 'Proyectos', href: '#proyectos' },
        { num: '05', name: 'Certificados', href: '#certificados' },
        { num: '06', name: 'Contacto', href: '#contacto' },
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                    isScrolled 
                        ? 'bg-background/80 backdrop-blur-md shadow-lg' 
                        : 'bg-transparent' 
                }`}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-5' : 'py-5'}`}>                
                        <a href="#" className="text-white font-serif text-2xl font-bold relative z-50">
                            Niik.
                        </a>
                        
                        {/* NAV DE ESCRITORIO (Intacto) */}
                        <nav className="hidden md:flex items-center gap-12 text-sm text-white/80">
                            <a href="#" className="hover:text-text-hover transition font-geist">
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

                        {/* BOTÓN CONTACTO DE ESCRITORIO (Oculto en móvil con hidden md:flex) */}
                        <div className="hidden md:flex items-center gap-3">
                            <a href="#contacto" className="inline-flex items-center rounded-md border-gradient before:rounded-md bg-primary/100 px-4 py-2.5 text-sm text-black/90 font-medium hover:bg-primary-hover/100 transition font-geist">
                                Contactame
                            </a>
                        </div>

                        {/* BOTÓN HAMBURGUESA (Visible solo en móvil) */}
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="md:hidden flex items-center justify-center p-2 text-white hover:text-primary transition-colors"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linea/80 from-transparent via-venus-pink/100 to-transparent"></span>
                </div>
            </header>

            {/* MENÚ MÓVIL PANTALLA COMPLETA */}
            <div 
                className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-opacity duration-500 md:hidden ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Botón de Cerrar (La 'X' en círculo como tu imagen) */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-6 w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Contenedor central de los enlaces */}
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {mobileLinks.map((link) => (
                        <a
                            key={link.num}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-5 text-white/90 hover:text-white group transition-all"
                        >
                            {/* Número pequeño a la izquierda (en color de acento/primario) */}
                            <span className="text-primary font-mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                                {link.num}
                            </span>
                            {/* Texto principal en grande */}
                            <span className="text-3xl font-bold font-geist tracking-wide">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}