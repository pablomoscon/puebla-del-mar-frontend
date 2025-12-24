'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductSizes = ({ sizes }: { sizes: string[] }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className='flex flex-col gap-3'>
      {/* Header */}
      <div className='flex items-baseline justify-between'>
        <p className='text-md uppercase tracking-wide text-neutral-600'>
          Talle: {selected ?? '—'}
        </p>

        <button className='flex items-center gap-1 text-md text-neutral-500 hover:text-black transition-colors'>
          <ArrowUpRight size={14} />
          Tabla de talles
        </button>
      </div>

      {/* Sizes */}
      <div className='flex gap-3'>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`
              min-w-11
              border
              px-4 py-2
              text-sm
              tracking-wide
              transition-colors
              ${
                selected === size
                  ? 'border-black text-black'
                  : 'border-neutral-300 text-neutral-700 hover:border-black'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
