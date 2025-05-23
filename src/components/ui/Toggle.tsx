import React from 'react';
interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}
export const Toggle = ({
  checked,
  onChange,
  label,
  disabled = false
}: ToggleProps) => {
  return <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={e => onChange(e.target.checked)} disabled={disabled} />
        <div className={`block w-14 h-8 rounded-full ${disabled ? 'bg-gray-300 dark:bg-gray-600' : checked ? 'bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
        <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${checked ? 'transform translate-x-6' : ''}`}></div>
      </div>
      {label && <span className={`ml-3 text-sm font-medium ${disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
          {label}
        </span>}
    </label>;
};