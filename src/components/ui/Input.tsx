import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  return <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
        {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>}
        <input ref={ref} className={`
            px-4 py-2.5 bg-white dark:bg-gray-800 border rounded-lg text-sm
            focus:outline-none focus:ring-2 focus:ring-[#4A00E0] focus:border-transparent
            transition-colors duration-200
            ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            ${fullWidth ? 'w-full' : ''}
            ${className}
          `} {...props} />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>;
});