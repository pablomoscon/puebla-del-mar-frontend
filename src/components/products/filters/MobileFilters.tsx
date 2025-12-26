'use client';

import { X } from 'lucide-react';

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
    <div className='fixed inset-0 z-50 lg:hidden'>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/30 backdrop-blur-[1px]'
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className='absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col py-4 px-1'
      >
        {/* Header */}
        <div className='relative flex items-center justify-center py-4 border-b border-neutral-200'>
          {/* Swipe hint */}
          <div className='absolute top-2 h-1 w-10 rounded-full bg-neutral-300' />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label='Cerrar filtros'
            className='absolute right-4 text-neutral-500 hover:text-neutral-900 transition'
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto px-4'>{children}</div>
      </div>
    </div>
  );
};

export default MobileFilters;
