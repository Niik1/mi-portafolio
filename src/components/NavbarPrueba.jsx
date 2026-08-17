import { useState, useEffect } from 'react';

export default function NavbarPrueba() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
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
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    const mobileLinks = [
        { num: '01', id: 'inicio', name: 'Inicio', href: '#' },
        { num: '02', id: 'sobremi', name: 'Sobre Mí', href: '#sobremi' },
        { num: '03', id: 'experiencia', name: 'Experiencia', href: '#experiencia' },
        { num: '04', id: 'proyectos', name: 'Proyectos', href: '#proyectos' },
        { num: '05', id: 'certificados', name: 'Certificados', href: '#certificados' },
        { num: '06', id: 'contacto', name: 'Contacto', href: '#contacto' },
    ];
    const getLinkClasses = (sectionId) => {
        const isActive = activeSection === sectionId;
        return `transition-all duration-300 font-geist inline-block ${
            isActive 
                ? 'text-primary scale-110 font-bold' 
                : 'text-white/80 hover:text-text-hover hover:scale-105'
        }`;
    };

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
                        
                        <a href="#inicio" className="flex items-center font-serif text-2xl font-bold relative z-50">
                            <span className="text-white">Nikcey</span>
                            <span className="w-[14px] h-[3px] bg-white ml-1 self-end mb-[4px] animate-console-blink "></span>
                        </a>
                        <nav className="hidden md:flex items-center gap-12 text-sm">
                            <a href="#" className={getLinkClasses('inicio')}>Inicio</a>
                            <a href="#sobremi" className={getLinkClasses('sobremi')}>Sobre mí</a>
                            <a href="#experiencia" className={getLinkClasses('experiencia')}>Experiencia</a>
                            <a href="#proyectos" className={getLinkClasses('proyectos')}>Proyectos</a>
                            <a href="#certificados" className={getLinkClasses('certificados')}>Certificados</a>
                        </nav>
                        <div className="hidden md:flex items-center gap-3">
                            <a href="#contacto" className="inline-flex items-center rounded-md border-gradient before:rounded-md bg-primary/100 px-4 py-2.5 text-sm text-black/90 font-medium hover:bg-primary-hover/100 transition font-geist hover:scale-105">
                                Contactame
                            </a>
                        </div>
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
            <div 
                className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-opacity duration-500 md:hidden ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-6 w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {mobileLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        
                        return (
                            <a
                                key={link.num}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-5 group transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
                            >
                                <span className={`font-mono text-sm transition-opacity ${isActive ? 'text-primary opacity-100 font-bold' : 'text-primary opacity-70 group-hover:opacity-100'}`}>
                                    {link.num}
                                </span>
                                <span className={`text-3xl font-geist tracking-wide transition-colors ${isActive ? 'text-primary font-black' : 'text-white/90 hover:text-white font-bold'}`}>
                                    {link.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
}