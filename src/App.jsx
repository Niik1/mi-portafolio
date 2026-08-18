import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Certificados from './components/Certificados';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background text-text-main selection:bg-primary/30">  
      <Navbar />
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