'use client';

import { ShoppingBag } from 'lucide-react';

const AddToCartButton = () => {
  return (
    <button
      className='
        w-full
        h-14
        bg-black
        text-white
        flex
        items-center
        justify-center
        gap-2
        rounded-md
        text-md
        font-bold
        tracking-wide
        hover:bg-neutral-900
        transition-colors
      '
    >
      <ShoppingBag size={18} />
      <span>Agregar al carrito</span>
    </button>
  );
};

export default AddToCartButton;
