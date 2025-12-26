'use client';

import { ChevronDown } from 'lucide-react';
import { SortMenuProps } from '@/types/sort.types';

const SortMenu = ({ options, value, onChange }: SortMenuProps) => {
  const selected = options.find((o) => o.value === value);

  return (
    <details className='relative'>
      <summary
        className='
          flex items-center gap-2
          cursor-pointer list-none
          rounded-full border border-neutral-300
          px-4 py-2
          text-sm font-medium text-neutral-800
          hover:border-neutral-400
          transition
        '
      >
        <span className='uppercase text-neutral-900 transition'>Ordenar:</span>
        <span>{selected?.label}</span>
        <ChevronDown size={14} className='text-neutral-500 ' />
      </summary>

      <div
        className='
          absolute right-0 z-20 mt-2 w-48
          rounded-xl bg-white
          shadow-lg ring-1 ring-black/5
        '
      >
        <ul className='py-1'>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type='button'
                onClick={() => onChange(option.value)}
                className={`
                  flex w-full items-start text-start
                  px-4 py-2 text-sm
                  hover:bg-neutral-100
                  transition
                  uppercase

                  ${
                    value === option.value
                      ? 'font-medium text-black'
                      : 'text-neutral-600 '
                  }
                `}
              >
                {option.label}
                {value === option.value && (
                  <span className='text-xs text-neutral-400 uppercase text-start'>●</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default SortMenu;
