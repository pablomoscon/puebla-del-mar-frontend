import { ProductPriceFilterProps } from '@/types/product.types';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

const ProductPriceFilter = ({
  min,
  max,
  onChange,
}: ProductPriceFilterProps) => {
  const [value, setValue] = useState<[number, number]>([min, max]);

  return (
    <div className='w-full pt-10 pb-2 border-t border-neutral-200'>
      {/* Header */}
      <div className='mb-6 flex items-baseline justify-between'>
        <h3 className='text-[13px] font-medium tracking-[0.08em] text-neutral-900 uppercase'>
          Precio
        </h3>

        <span className='text-[11px] text-neutral-500 tracking-wide'>
          ${value[0]} — ${value[1]}
        </span>
      </div>

      {/* Slider */}
      <Slider.Root
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={(v) => {
          const range = v as [number, number];
          setValue(range);
          onChange(range[0], range[1]);
        }}
        className='relative flex w-full h-7 items-center'
      >
        {/* Track */}
        <Slider.Track className='relative h-px w-full bg-neutral-300'>
          <Slider.Range className='absolute h-full bg-neutral-900' />
        </Slider.Track>

        {/* Thumbs */}
        <Slider.Thumb
          className='
            h-3 w-3 rounded-full bg-white
            border border-neutral-900
            shadow-[0_1px_2px_rgba(0,0,0,0.08)]
            transition-transform duration-150
            hover:scale-105
            focus:outline-none
          '
        />
        <Slider.Thumb
          className='
            h-3 w-3 rounded-full bg-white
            border border-neutral-900
            shadow-[0_1px_2px_rgba(0,0,0,0.08)]
            transition-transform duration-150
            hover:scale-105
            focus:outline-none
          '
        />
      </Slider.Root>
    </div>
  );
};

export default ProductPriceFilter;
