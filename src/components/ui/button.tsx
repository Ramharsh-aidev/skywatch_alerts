import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'default', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded transition-colors';
  const variantClasses = variant === 'outline' 
    ? 'border border-gray-300 bg-white hover:bg-gray-100' 
    : 'bg-blue-500 text-white hover:bg-blue-600';
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}