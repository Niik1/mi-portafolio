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
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex items-center pt-20 pb-8 md:pt-20">  
              <Hero />
            </main>
          </div>   
          <About />
          <Experiencia />
          <Proyectos></Proyectos>
          <Certificados></Certificados>
          <Footer></Footer>
    </div>
  );
} 

