'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FilterOption from '../details/FilterOption';

const FilterSection = ({
  name,
  sectionId,
  options,
  onToggleOption,
}: {
  name: string;
  sectionId: string;
  options: { value: string; label: string; checked: boolean }[];
  onToggleOption: (value: string) => void;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='border-b border-neutral-200 py-6'>
      {/* Header */}
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className='
          flex w-full items-center justify-between
          text-sm font-medium text-neutral-900
          tracking-wide
        '
      >
        <span>{name}</span>

        <ChevronDown
          size={16}
          className={`
            text-neutral-500
            transition-transform duration-200
            ${open ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Options */}
      <div
        className={`
          grid gap-3 overflow-hidden transition-all duration-200
          ${open ? 'mt-4 max-h-125' : 'max-h-0'}
        `}
      >
        {options.map((option) => (
          <FilterOption
            key={option.value}
            id={`${sectionId}-${option.value}`}
            label={option.label}
            checked={option.checked}
            onChange={() => onToggleOption(option.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
