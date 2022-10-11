import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, CartesianGrid, Legend, Bar } from 'recharts';
import './Statistices.css'

const Statistics = () => {


    const statistic = useLoaderData();
    const statisticData = statistic.data;
    console.log(statisticData)

    /*

     <LineChart width={900} height={600} data={statisticData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Tooltip />

            </LineChart>*/
    return (
        <div className=''>
            <div className='line-chart'>
                <ResponsiveContainer width={500} height={250}>
                    <LineChart width={500} height={400} data={statisticData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <Tooltip />

                    </LineChart>

                </ResponsiveContainer>
            </div>

            <div className='line-chart m-3'>

                <BarChart width={500} height={250} data={statisticData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>

            </div>
        </div>





    );
};

export default Statistics;