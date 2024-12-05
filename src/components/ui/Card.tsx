import { cn } from '../../lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700",
      className
    )}>
      {children}
    </div>
  );
}