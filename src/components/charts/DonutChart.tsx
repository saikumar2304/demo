import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

type DonutChartProps = {
  data: {
    name: string;
    value: number;
  }[];
  colors: string[];
  height?: number;
};

export function DonutChart({
  data,
  colors,
  height = 400
}: DonutChartProps) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={colors[index % colors.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#F3F4F6'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}