import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
          name:'ass-1',
          Mark:55,
          AvgMark: 60,
        },
        {
            name: 'ass-2',
          Mark:56,
          AvgMark: 60,
          
        },
        {
            name: 'ass-3',
            Mark:60,
            AvgMark: 60,
        },
        {
            name: 'ass-4',
            Mark:43,
            AvgMark: 60,
        },
        {
            name: 'ass-5',
            Mark:53,
            AvgMark: 60,
        },
        {
            name: 'ass-6',
            Mark:48,
            AvgMark: 60,
        },
        {
            name: 'ass-7',
            Mark:60,
            AvgMark: 60,
        },
      ];
    return (
        <div>
        {/* <ResponsiveContainer width="100%" height="100%">    */}
        <BarChart
          width={500}
          height={300}
          data={data}
          
        >
          {/* <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend /> */}
          <Bar dataKey="Mark" fill="#8884d8"></Bar>
          <Bar dataKey="AgvMark" fill="#8884d8" ></Bar>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </BarChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Statistics;