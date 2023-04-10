import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
          name: 'Assignment-1',
          Mark:55,
          AvgMark: 60,
        },
        {
            name: 'Assignment-2',
          Mark:56,
          AvgMark: 60,
          
        },
        {
            name: 'Assignment-3',
            Mark:60,
            AvgMark: 60,
        },
        {
            name: 'Assignment-4',
            Mark:43,
            AvgMark: 60,
        },
        {
            name: 'Assignment-5',
            Mark:53,
            AvgMark: 60,
        },
        {
            name: 'Assignment-6',
            Mark:48,
            AvgMark: 60,
        },
        {
            name: 'Assignment-7',
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