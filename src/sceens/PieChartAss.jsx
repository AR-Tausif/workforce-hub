import React, { useState } from "react";
import { PieChart, Pie,Bar, Sector,Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
  { name: 'Assignment One', value: 48 },
  { name: 'Assignment Two', value: 27 },
  { name: 'Assignment Three', value: 27 },
  { name: 'Assignment Four', value: 50 },
  { name: 'Assignment Five', value: 35 },
  { name: 'Assignment Six', value: 54 },
  { name: 'Assignment Seven', value: 60 },
  { name: 'Assignment Eight', value: 58 },
];


const PieChartAss = ()=> {
  const [activeIndex, setActiveIndex] = useState(0)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

 const onPieEnter = (_, index) => {
   setActiveIndex(index)
 };

   return (
        <PieChart width={400} height={400}>
          <Tooltip/>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
   );
 }



export default PieChartAss;