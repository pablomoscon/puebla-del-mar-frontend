'use client';

import { Truck, RefreshCcw, Shirt } from 'lucide-react';

const items = [
  {
    icon: Truck,
    label: 'Envíos',
  },
  {
    icon: RefreshCcw,
    label: 'Cambios y devoluciones',
  },
  {
    icon: Shirt,
    label: 'Cuidados de la prenda',
  },
];


const ProductServiceInfo = () => {
  return (
    <div
      className='
      w-full
      border-t border-neutral-200
      mt-8
      pt-6
      grid grid-cols-1 sm:grid-cols-3
      divide-y sm:divide-y-0 sm:divide-x
      divide-neutral-200
    '
    >
      {items.map(({ icon: Icon, label }) => (
        <button
          key={label}
          type='button'
          className='
            flex flex-col items-center justify-center
            gap-2
            py-4
            text-sm
            text-neutral-700
            hover:text-black
            transition
          '
        >
          <Icon size={30} className='text-neutral-500' />
          <span className='text-center'>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductServiceInfo;
