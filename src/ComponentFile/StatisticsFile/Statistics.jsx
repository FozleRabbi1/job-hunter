import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Assignment 1', value: 60 },
    { name: 'Assignment 2', value: 60 },
    { name: 'Assignment 3', value: 60 },
    { name: 'Assignment 4', value: 60 },
    { name: 'Assignment 5', value: 60 },
    { name: 'Assignment 6', value: 60 },
    { name: 'Assignment 7', value: 60 },
];
const Statistics = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
