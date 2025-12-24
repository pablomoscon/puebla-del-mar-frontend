import { ProductImageProps } from '@/types/product.types';
import Image from 'next/image';

const ProductImage = ({ src, alt, priority = false }: ProductImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes='
        (max-width: 768px) 100vw,
        50vw
      '
      className='object-cover'
    />
  );
};

export default ProductImage;
