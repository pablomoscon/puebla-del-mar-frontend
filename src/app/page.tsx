import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Aquí irá el contenido de tu página */}
        <h1 className="text-4xl font-bold text-gray-800 my-8">Bienvenido a Puebla del Mar</h1>
        <p className="text-lg text-gray-600 mb-16">Explora nuestra exclusiva colección de ropa.</p>
        {/* Puedes añadir más secciones aquí, por ejemplo, un carrusel de productos, etc. */}
        <div className="h-250"></div> {/* Esto es solo para hacer scroll y probar el navbar */}
        </main>
      <Footer />
    </>
  );
}
