import React, { useEffect, useState } from 'react';
import SingleApplyData from './SingleApplyData';

const ApplayJobPage = () => {
    const getData = localStorage.getItem("dataId");

    const data = JSON.parse(getData)
    let getDatas = [];
    for (const id in data) {
        getDatas.push(data[id])

    }


    return (
        <div>
            <h2>appplayed Job</h2>


            <div className="py-10 w-8/12 mx-auto">
                {
                    getDatas.map(data => <SingleApplyData key={data.id} data={data} ></SingleApplyData>)
                }
            </div>
        </div>
    );
};

export default ApplayJobPage;
