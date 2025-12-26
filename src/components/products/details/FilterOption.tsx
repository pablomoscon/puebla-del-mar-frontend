
import { PRODUCT_COLOR_CLASS } from '@/lib/productColors';
import { ProductColor } from '@/types/product.types';

const FilterOption = ({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;

}) => {
  return (
    <label
      htmlFor={id}
      className='flex items-center gap-3 text-xs text-gray-600 tracking-[0.08em] uppercase'
    >
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='h-4 w-4 rounded border-gray-300'
      />
      {label}
    </label>
  );
};

export default FilterOption;
