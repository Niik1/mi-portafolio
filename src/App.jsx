import NavbarPrueba from './components/NavbarPrueba';
import GlassButton from './components/GlassButton';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">   
        {/* Tu Cabecera */}
        <Navbar />
        
        {/* Tu Contenido Principal */}
        <main className="flex justify-center items-center p-20 mt-10">
          <GlassButton />
        </main>
    </div>
  )
}