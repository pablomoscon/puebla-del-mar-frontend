'use client';

const ProductInfoBlock = ({ title }: { title: string }) => {
  return (
    <button
      type='button'
      className='
        w-full
        border-t border-neutral-200
        py-4
        flex items-center justify-between
        text-sm
        text-neutral-700
        hover:text-black
        transition
      '
    >
      <span>{title}</span>
      <span className='text-neutral-400'>›</span>
    </button>
  );
};

export default ProductInfoBlock;
