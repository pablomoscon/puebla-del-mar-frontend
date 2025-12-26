import { ProductFiltersProps } from '@/types/product.types';
import FilterSection from './FilterSection';
import ProductPriceFilter from './ProductPriceFilter';

const ProductFilters = ({
  filters,
  onToggleOption,
  onPriceChange,
  minPrice,
  maxPrice,
  isMobile = false,
}: ProductFiltersProps & {
  isMobile?: boolean;
  minPrice: number;
  maxPrice: number;
}) => {
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

      {Number.isFinite(minPrice) &&
        Number.isFinite(maxPrice) &&
        minPrice <= maxPrice && (
          <ProductPriceFilter
            min={minPrice}
            max={maxPrice}
            onChange={(min, max) => onPriceChange?.(min, max)}
          />
        )}
    </aside>
  );
};

export default ProductFilters;
