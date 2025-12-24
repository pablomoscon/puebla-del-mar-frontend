import { ProductCardProps } from '@/types/product.types';
import ProductBadge from '../ProductBadge';
import ProductColors from './ProductColors';
import ProductFavoriteButton from '../ProductFavoriteButton';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';
import Link from 'next/link';

const ProductCard = ({ product, size }: ProductCardProps) => {
  const image = product.images?.[0];
   const isSmall = size === 'small';

  return (
    <article
      className={`
        relative flex flex-col items-center text-center
        ${isSmall ? 'gap-1' : 'gap-2'}
      `}
    >
      <Link href={`/productos/${product.id}`} className='w-full'>
        <div
          className={`
            relative w-full bg-neutral-100
            ${isSmall ? 'h-64 w-full' : 'h-100 w-60'}
          `}
        >
          {image && <ProductImage src={image} alt={product.title} />}
          <ProductFavoriteButton active={product.isFavorite} />
        </div>
      </Link>

      <ProductTitle className='tracking-wide text-sm'>
        {product.title}
      </ProductTitle>

      <ProductPrice
        price={product.price}
        priceClassName='text-sm tracking-wide'
      />

      {product.colors && (
        <ProductColors
          colors={product.colors}
          className='gap-1 text-xs'
          itemClassName='h-3 w-3'
        />
      )}

      {/* Badges */}
      {product.badges && (
        <div className='mt-1 flex gap-1 text-xs'>
          {product.badges.map((badge) => (
            <ProductBadge key={badge} label={badge} />
          ))}
        </div>
      )}
    </article>
  );
};

export default ProductCard;
