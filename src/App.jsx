import NavbarPrueba from './components/NavbarPrueba';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main selection:bg-primary/30">   
        {/* Tu barra de navegación superior */}
        <NavbarPrueba/>
        
        {/* El contenido principal de tu página */}
        <main className="flex-1 flex items-center">
          <Hero />
        </main>
        <Hero />
    </div>
  );
}