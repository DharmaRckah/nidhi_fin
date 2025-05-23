import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  neumorphic?: boolean;
}
export const Card = ({
  children,
  className = '',
  neumorphic = false
}: CardProps) => {
  return <div className={`
        bg-white dark:bg-gray-800 rounded-lg overflow-hidden
        ${neumorphic ? 'shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_16px_0px_rgba(0,0,0,0.3),-8px_-8px_16px_0px_rgba(255,255,255,0.1)]' : 'shadow-md'}
        ${className}
      `}>
      {children}
    </div>;
};
export const CardHeader = ({
  children,
  className = ''
}) => {
  return <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>;
};
export const CardContent = ({
  children,
  className = ''
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
export const CardFooter = ({
  children,
  className = ''
}) => {
  return <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>;
};