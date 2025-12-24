import { Product } from '@/types/product.types';
import ProductCard from './ProductCard';

const ProductGrid = ({
  products,
  size = 'normal',
}: {
  products: Product[];
  size?: 'normal' | 'small';
}) => {
  return (
    <div
      className='
        grid
        grid-cols-1        /* Mobile: 1 columna */
        sm:grid-cols-2     /* ≥640px: 2 columnas */
        lg:grid-cols-3     /* ≥1024px: 3 columnas */
        gap-4              /* Espacio entre cards (mobile) */
        lg:gap-6           /* Más aire en desktop */
      '
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} size={size} />
      ))}
    </div>
  );
};

export default ProductGrid;
