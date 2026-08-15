import NavbarPrueba from './components/NavbarPrueba';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <div className="bg-background text-text-main selection:bg-primary/30">   
        
        <div className="min-h-screen flex flex-col">
            <NavbarPrueba />
            <main className="flex-1 flex items-center">
              <Hero />
            </main>
        </div>       
        <About />
        
    </div>
  );
}