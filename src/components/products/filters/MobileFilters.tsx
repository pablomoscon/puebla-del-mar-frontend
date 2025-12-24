const MobileFilters = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-40 lg:hidden'>
      <div className='absolute inset-0 bg-black/30' onClick={onClose} />

      <div className='absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto'>
        <button onClick={onClose} className='mb-4 text-sm'>
          ✕ Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}

export default MobileFilters;
