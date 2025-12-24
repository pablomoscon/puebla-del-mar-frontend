const FilterOption = ({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label
      htmlFor={id}
      className='flex items-center gap-3 text-sm text-gray-600'
    >
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='h-4 w-4 rounded border-gray-300'
      />
      {label}
    </label>
  );
}

export default FilterOption;
