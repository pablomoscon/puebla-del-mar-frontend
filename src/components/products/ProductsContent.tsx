'use client';

import { useState } from 'react';
import ProductGrid from '@/components/products/common/ProductGrid';
import SortMenu from '@/components/ui/SortMenu';
import { toggleFilterOption } from '@/utils/productFilters';
import { filtersData, sortOptions } from '@/data/filterData';
import { ProductsProps } from '@/types/product.types';
import ProductFilters from './filters/ProductFilters';
import MobileFilters from './filters/MobileFilters';
import { useFilteredProducts } from '@/hooks/useFilterProducts';

const ProductsContent = ({ products }: ProductsProps) => {
  const [filters, setFilters] = useState(filtersData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sort, setSort] = useState('popular');
const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  
  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const handleToggleOption = (sectionId: string, value: string) => {
    setFilters((prev) => toggleFilterOption(prev, sectionId, value));
  };

const filteredProducts = useFilteredProducts(products, filters, priceRange);

  return (
    <main className='mx-auto mt-30 max-w-7xl px-4 pb-20'>
      <div className='flex items-center justify-between border-b py-6'>
        <h1 className='text-3xl font-bold'></h1>

        <div className='flex items-center gap-4 uppercase'>
          <SortMenu options={sortOptions} value={sort} onChange={setSort} />
          <button
            onClick={() => setMobileOpen(true)}
            className='lg:hidden inline-flex items-center gap-2
      text-[12px] tracking-[0.08em] uppercase
      text-neutral-900
      hover:text-neutral-600
      transition'
          >
            <span>Filtros</span>

            <span className='block h-1 w-6 rounded-full bg-neutral-900' />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 pt-6 lg:grid-cols-4'>
        <ProductFilters
          filters={filters}
          onToggleOption={handleToggleOption}
          onPriceChange={(min, max) => setPriceRange([min, max])}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        <div className='lg:col-span-3'>
          {filteredProducts.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <p className='text-lg font-medium text-gray-700 tracking-[0.08em] uppercase'>
                No se encontraron productos
              </p>
              <p className='mt-2 text-sm text-gray-500'>
                Probá cambiar o quitar algunos filtros
              </p>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} size='small' />
          )}
        </div>
      </div>

      <MobileFilters open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <ProductFilters
          filters={filters}
          onToggleOption={handleToggleOption}
          isMobile
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </MobileFilters>
    </main>
  );
};

export default ProductsContent;
