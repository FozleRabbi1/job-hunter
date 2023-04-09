import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const ShowDynamicFeatherData = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)

    const featherData = useLoaderData();
    let getData
    if (!featherData) {
        return
    } else {
        getData = featherData?.filter(data => {
            if (data.id === parseInt(id)) {
                return data
            }
        });
    }

    const { img, jobName, title } = getData[0];
    console.log(jobName)

    return (
        <div>


            <h2 className='text-4xl text-white'>jobName : {jobName}</h2>
            <h2 className='text-4xl text-white'>jobName : {title}</h2>



        </div>
    );
};

export default ShowDynamicFeatherData;