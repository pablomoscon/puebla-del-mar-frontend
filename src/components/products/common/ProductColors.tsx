'use client';

import { ProductColorsProps } from '@/types/product.types';
import { PRODUCT_COLOR_CLASS } from '../../../lib/productColors';
import { useState } from 'react';

const ProductColors = ({
  colors,
  className = '',
  itemClassName = '',
}: ProductColorsProps & {
  className?: string;
  itemClassName?: string;
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <p className='uppercase tracking-wide text-neutral-600'>
        Color{selected && ` — ${selected}`}
      </p>

      <div className='flex gap-3'>
        {colors.map((color) => (
          <button
            title='colorButton'
            key={color}
            onClick={() => setSelected(color)}
            className={`
              h-5 w-5 rounded-full border
              ${PRODUCT_COLOR_CLASS[color]}
              ${selected === color ? 'ring-2 ring-black' : ''}
              ${itemClassName}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
