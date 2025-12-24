'use client';
import { useState } from 'react';

const ProductQuantity = () => {
  const [qty, setQty] = useState(1);

  return (
    <div
      className='
        flex
        items-center
        justify-between
        border
        border-neutral-300
        rounded-md
        h-14
        w-28
        px-3
      '
    >
      <button
        onClick={() => setQty(Math.max(1, qty - 1))}
        className='text-lg text-neutral-600 hover:text-black'
      >
        −
      </button>

      <span className='text-sm font-medium'>{qty}</span>

      <button
        onClick={() => setQty(qty + 1)}
        className='text-lg text-neutral-600 hover:text-black'
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
