import AddToCartButton from './AddCartButton';
import ProductColors from '../common/ProductColors';
import ProductDescription from './ProductDescription';
import ProductImage from '../common/ProductImage';
import ProductPrice from '../common/ProductPrice';
import ProductSizes from './ProductSizes';
import ProductTitle from '../common/ProductTitle';
import { Product } from '../../../types/product.types';
import ProductQuantity from './ProductQuantity';
import ProductServiceInfo from './ProductServiceInfo';

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <section
      className='
    grid grid-cols-1 md:grid-cols-2 gap-10
    px-4 sm:px-10 md:px-12 lg:px-4
    py-6 md:py-10 mb-20 md:mb-20 lg:mb-45
  '
    >
      {/* Images */}
      <div className='relative w-full flex justify-center'>
        {product.images.length > 0 && (
          <div
            className='
        relative
        w-full
        md:w-[95%]
        lg:w-full
        aspect-square
        overflow-hidden
      '
          >
            <ProductImage
              src={product.images[0]}
              alt={product.title}
              priority
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className='flex flex-col gap-4 px-2'>
        <ProductTitle
          className='text-[20px] sm:text-[22px] font-bold'
          showShare
          showFavorite
        >
          {product.title}
        </ProductTitle>
        <ProductPrice
          priceClassName='text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.08em]'
          price={product.price}
          installments={product.installments}
        />

        <div className='w-full'>
          {/* Talles */}
          <div className='py-3 me-5'>
            {product.sizes && <ProductSizes sizes={product.sizes} />}
          </div>

          {/* Colores */}
          <div className='py-3 me-5 border-t border-neutral-200 mt-4 text-md'>
            {product.colors && <ProductColors colors={product.colors} />}
          </div>
        </div>
        <div className='flex items-stretch gap-5 w-full me-5'>
          <ProductQuantity />
          <AddToCartButton />
        </div>

        <div className='mt-8 text-md text-justify'>
          <p className='mb-1'>Descripción: </p>
          {product.description && (
            <ProductDescription text={product.description} />
          )}
        </div>

        {/* Info blocks */}
        <div className='mt-4'>
          <ProductServiceInfo />
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
