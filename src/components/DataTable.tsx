import { cn } from '../lib/utils';

type Column = {
  header: string;
  accessor: string;
  render?: (value: any) => React.ReactNode;
};

type DataTableProps = {
  columns: Column[];
  data: any[];
  className?: string;
};

export function DataTable({ columns, data, className }: DataTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
            {columns.map((column) => (
              <th key={column.accessor} className="pb-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
              {columns.map((column) => (
                <td key={column.accessor} className="py-3 text-gray-900 dark:text-white">
                  {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}