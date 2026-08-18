import NavbarPrueba from './components/NavbarPrueba';
import Hero from './components/Hero';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Certificados from './components/Certificados';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background text-text-main selection:bg-primary/30">  
      <NavbarPrueba />
      
      {/* Envolvemos todo en main, dejando que cada componente (Hero, About, etc.)
          maneje su propia altura y espaciado de forma independiente */}
      <main> 
        <Hero />
        <About />
        <Experiencia />
        <Proyectos />
        <Certificados />
      </main>
      
      <Footer />
    </div>
  );
}