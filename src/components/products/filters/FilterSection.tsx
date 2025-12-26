'use client';

import { useState } from 'react';
import FilterOption from '../details/FilterOption';

const MAX_VISIBLE = 3;

type Option = {
  value: string;
  label: string;
  checked: boolean;
};

const FilterSection = ({
  name,
  sectionId,
  options,
  onToggleOption,
}: {
  name: string;
  sectionId: string;
  options: Option[];
  onToggleOption: (value: string) => void;
}) => {
  const hasChecked = options.some((o) => o.checked);
  const [open, setOpen] = useState(hasChecked);

  const visibleOptions = open ? options : options.slice(0, MAX_VISIBLE);

  const canExpand = options.length > MAX_VISIBLE;

  return (
    <div className='border-b border-neutral-200 py-6 px-2'>
      {/* Header (informativo, no interactivo) */}
      <div className='text-[13px] font-medium tracking-[0.08em] text-neutral-900 uppercase'>
        {name}
      </div>

      {/* Options */}
      <div className='relative mt-4'>
        <div className='grid gap-3'>
          {visibleOptions.map((option) => (
            <FilterOption
              key={option.value}
              id={`${sectionId}-${option.value}`}
              label={option.label}
              checked={option.checked}
              onChange={() => onToggleOption(option.value)}
            />
          ))}
        </div>

        {/* Expand / collapse control */}
        {canExpand && (
          <button
            title='expandFilters'
            type='button'
            onClick={() => setOpen((prev) => !prev)}
            className='group mx-auto mt-4  flex items-center justify-center'
          >
            <div
              className={`
                h-2 w-22 mt-2 rounded-full bg-neutral-300 
                transition-all duration-200
                ${open ? 'scale-x-95 opacity-60' : 'animate-pulse'}
                group-hover:bg-neutral-400  h-2 w-18
              `}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
