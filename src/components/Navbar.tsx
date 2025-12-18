// src/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-white bg-opacity-90 shadow-md backdrop-blur-sm`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-verde-azulado">
          <a href="#">Puebla del Mar</a>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-verde-azulado hover:text-rosa transition-colors duration-200">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="text-verde-azulado hover:text-rosa transition-colors duration-200">
              Productos
            </a>
          </li>
          <li>
            <a href="#" className="text-verde-azulado hover:text-rosa transition-colors duration-200">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

