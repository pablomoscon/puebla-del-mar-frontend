import { ProductPriceFilterProps } from '@/types/product.types';
import * as Slider from '@radix-ui/react-slider';

const ProductPriceFilter = ({
  min,
  max,
  onChange,
}: ProductPriceFilterProps) => {
  return (
    <div className='w-full space-y-4 mt-10'>
      <h3 className='text-sm text-gray-800 mb-4'>Precio</h3>

      <Slider.Root
        min={min}
        max={max}
        defaultValue={[min, max]}
        step={1}
        onValueChange={([minValue, maxValue]) => onChange(minValue, maxValue)}
        className='relative flex w-full items-center'
      >
        <Slider.Track className='relative h-0.5 w-full rounded-full bg-gray-400'>
          <Slider.Range className='absolute h-full rounded-full bg-gray-400' />
        </Slider.Track>

        <Slider.Thumb className='block h-3 w-3 rounded-full bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500' />
        <Slider.Thumb className='block h-3 w-3 rounded-full bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500' />
      </Slider.Root>

      <div className='flex justify-between text-sm text-gray-500'>
        <span>{`$${min}`}</span>
        <span>{`$${max}`}</span>
      </div>
    </div>
  );
};

export default ProductPriceFilter;
