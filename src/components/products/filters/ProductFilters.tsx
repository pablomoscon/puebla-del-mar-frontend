
import { ProductFiltersProps } from '@/types/product.types';
import FilterSection from './FilterSection';
import PriceFilter from './PriceFilter';

const ProductFilters = ({
  filters,
  onToggleOption,
  onPriceChange,
  isMobile = false,
}: ProductFiltersProps & { isMobile?: boolean }) => {
  return (
    <aside
      className={`${
        isMobile ? 'block lg:hidden' : 'hidden lg:block'
      } w-64 pr-6 space-y-6`}
    >
      {filters.map((section) => (
        <FilterSection
          key={section.id}
          sectionId={section.id}
          name={section.name}
          options={section.options}
          onToggleOption={(value) => onToggleOption(section.id, value)}
        />
      ))}

      <PriceFilter
        min={0}
        max={1000}
        onChange={(min, max) => onPriceChange?.(min, max)}
      />
    </aside>
  );
};

export default ProductFilters;
