import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-cyan hover:bg-cyan-500 text-dark-900 shadow-lg hover:shadow-xl',
  secondary:
    'bg-dark-800 border border-dark-700 hover:bg-dark-700 text-dark-100',
  outline:
    'border border-accent-indigo text-accent-indigo hover:bg-accent-indigo/10',
  ghost: 'hover:bg-dark-800/50 text-dark-100',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = '', variant = 'primary', size = 'md', fullWidth = false, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed';
    const fullWidthStyle = fullWidth ? 'w-full' : '';

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidthStyle} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
