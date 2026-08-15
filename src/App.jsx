import NavbarPrueba from './components/NavbarPrueba';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main selection:bg-primary/30">   
        {/* Tu barra de navegación superior */}
        <NavbarPrueba/>
        
        {/* El contenido principal de tu página */}
        <main className="flex-1 flex items-center">
          <Hero></Hero>
        </main>
        <About></About>
        
    </div>
  );
}