'use client';

import { useState } from 'react';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import { ProductDetailsContentProps } from '@/types/product.types';
import { sortOptions } from '@/data/filterData';

const ProductDetailsContent = ({
  product,
  relatedProducts = [],
}: ProductDetailsContentProps) => {
  const [sort, setSort] = useState('popular');

  return (
    <main className='mx-auto max-w-7xl pt-20 pb-40'>
      <ProductInfo product={product} />

      {relatedProducts.length > 0 && (
        <RelatedProducts
          products={relatedProducts}
          sortOptions={sortOptions}
          sort={sort}
          setSort={setSort}
        />
      )}
    </main>
  );
};

export default ProductDetailsContent;
