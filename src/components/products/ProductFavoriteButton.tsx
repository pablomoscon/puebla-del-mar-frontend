const ProductFavoriteButton = ({
  active = false,
}: {
  active?: boolean;
}) => {
  return (
    <button
      aria-label='Add to favorites'
      className='absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white flex items-center justify-center shadow'
    >
      <span className={active ? 'text-black' : 'text-neutral-400'}>♥</span>
    </button>
  );
}

export default ProductFavoriteButton;