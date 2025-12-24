import { ProductTitleProps } from '@/types/product.types';
import { Share2, Heart } from 'lucide-react';

const ProductTitle = ({
  children,
  as: Tag = 'h3',
  className = '',
  showShare = false,
  showFavorite = false,
}: ProductTitleProps) => {
  const showIcons = showShare || showFavorite;

  return (
    <div className='flex items-center justify-between'>
      {/* Título */}
      <Tag
        className={`
          uppercase
          tracking-[0.14em]
          text-neutral-900
          ${className}
        `}
      >
        {children}
      </Tag>

      {/* Íconos (solo si alguno está activo) */}
      {showIcons && (
        <div className='flex items-center gap-4'>
          {showShare && (
            <button
              aria-label='Compartir producto'
              className='text-neutral-900 hover:text-neutral-600 transition'
            >
              <Share2 size={20} />
            </button>
          )}

          {showFavorite && (
            <button
              aria-label='Agregar a favoritos'
              className='text-neutral-900 hover:text-neutral-600 transition'
            >
              <Heart size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductTitle;
