const ProductBadge = ({ label }: { label: string }) => {
  return (
    <span className=' px-2 py-1 border uppercase tracking-wide me-1'>
      {label}
    </span>
  );
}

export default ProductBadge;