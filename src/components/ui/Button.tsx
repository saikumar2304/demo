import { cn } from '../../lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg font-medium transition-colors",
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
          'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600': variant === 'secondary',
          'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800': variant === 'outline',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3': size === 'lg',
        },
        className
      )}
    >
      {children}
    </button>
  );
}