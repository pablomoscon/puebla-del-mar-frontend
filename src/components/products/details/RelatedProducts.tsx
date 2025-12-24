import SortMenu from '@/components/ui/SortMenu';
import { RelatedProductsProps } from '@/types/product.types';
import ProductGrid from '../common/ProductGrid';

const RelatedProducts = ({
  products,
  sortOptions,
  sort,
  setSort,
}: RelatedProductsProps) => {
  if (!products.length) return null;

  return (
    <section className=' px-6 md:px-8 lg:px-10'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6'>
        <h2 className='text-lg md:text-base font-semibold uppercase tracking-[0.18em] text-neutral-900 text-center md:text-left'>
          También te puede interesar
        </h2>

        <SortMenu options={sortOptions} value={sort} onChange={setSort} />
      </div>

      {/* Grid */}
      <ProductGrid products={products} size='normal' />
    </section>
  );
};

export default RelatedProducts;
