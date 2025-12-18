// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-verde-azulado text-rosa-claro py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Puebla del Mar. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-rosa-claro hover:text-rosa transition-colors duration-200">
            Privacidad
          </a>
          <a href="#" className="text-rosa-claro hover:text-rosa transition-colors duration-200">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

