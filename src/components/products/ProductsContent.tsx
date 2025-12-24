'use client';

import { useState } from 'react';
import ProductGrid from '@/components/products/common/ProductGrid';
import SortMenu from '@/components/ui/SortMenu';
import { toggleFilterOption } from '@/utils/productFilters';
import { filtersData, sortOptions } from '@/data/filterData';
import { ProductsProps } from '@/types/product.types';
import ProductFilters from './filters/ProductFilters';
import MobileFilters from './filters/MobileFilters';

const ProductsContent = ({ products }: ProductsProps) => {
  const [filters, setFilters] = useState(filtersData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sort, setSort] = useState('popular');

  const handleToggleOption = (sectionId: string, value: string) => {
    setFilters((prev) => toggleFilterOption(prev, sectionId, value));
  };

  return (
    <main className='mx-auto mt-30 max-w-7xl px-4 pb-20'>
      <div className='flex items-center justify-between border-b py-6'>
        <h1 className='text-3xl font-bold'></h1>

        <div className='flex items-center gap-4'>
          <SortMenu options={sortOptions} value={sort} onChange={setSort} />

          <button
            onClick={() => setMobileOpen(true)}
            className='lg:hidden text-sm text-gray-600'
          >
            Filtros
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className='grid grid-cols-1 gap-8 pt-6 lg:grid-cols-4'>
        <ProductFilters filters={filters} onToggleOption={handleToggleOption} />

        <div className='lg:col-span-3'>
          <ProductGrid products={products} size='small' />
        </div>
      </div>

      <MobileFilters open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <ProductFilters
          filters={filters}
          onToggleOption={handleToggleOption}
          isMobile
        />
      </MobileFilters>
    </main>
  );
};

export default ProductsContent;
