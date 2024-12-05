import { cn } from '../lib/utils';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  subtext?: string;
  className?: string;
};

export function StatCard({ title, value, icon, subtext, className }: StatCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 p-6 rounded-xl",
      "border border-gray-200 dark:border-gray-700",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            {title}
          </h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
            {value}
          </p>
          {subtext && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {subtext}
            </p>
          )}
        </div>
        <div className="text-gray-400 dark:text-gray-500">
          {icon}
        </div>
      </div>
    </div>
  );
}