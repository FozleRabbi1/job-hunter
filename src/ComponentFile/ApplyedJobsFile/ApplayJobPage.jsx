import React, { useEffect, useState } from 'react';
import SingleApplyData from './SingleApplyData';

const ApplayJobPage = () => {
    const [datas, setDatas] = useState([])
    const getData = localStorage.getItem("dataId");

    const data = JSON.parse(getData)
    let getDatas = [];
    for (const id in data) {
        // idd.push(data[id])
        getDatas.push(data[id])

    }
    console.log(getDatas)

    useEffect(() => {
        fetch("featuradData.json")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div>
            <h2>appplay</h2>
            <h2>length {getDatas.length}</h2>
            
            {
                getDatas.map(data => <SingleApplyData data={data} ></SingleApplyData> )
            }
        </div>
    );
};

export default ApplayJobPage;
