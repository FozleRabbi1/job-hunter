import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useLocation } from 'react-router-dom';

const ShowDynamicFeatherData = () => {
    const locationn = useLocation();
    const idd = locationn.pathname.split("/")[2];

    const featherData = useLoaderData();
    let getData
    if (!featherData) {
        return
    } else {
        getData = featherData?.filter(data => {
            if (data.id === parseInt(idd)) {
                return data
            }
        });
    }
    // console.log(getData)

    const { id, img, jobName, title, jobCategory, otherCategory, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, jobTitle, email, phone, address } = getData[0];
    const dataObj = {
        img: img,
        title: title,
        jobName: jobName

    }

    const getLocalData = () => {
        let stortData = {};
        const getData = localStorage.getItem("dataId");
        // console.log(getData)
        if (getData) {
            stortData = JSON.parse(getData)
        }
        return stortData;
    }



    const stortedApplyData = (jobName, dataObj) => {
        const cart = getLocalData();
        cart[jobName] = dataObj;
        const setData = JSON.stringify(cart);
        localStorage.setItem("dataId", setData)
    }



    return (
        <div>
            <h2 className='text-center text-3xl py-20'>Job Details </h2>


            <div className="details-content bg-white text-black  ">

                <div className="child-content mx-auto grid grid-cols-2 w-10/12  pt-20 ">
                    <div className="requirment-file">
                        <p className=''>Job Description : {jobDescription}</p>
                        <p className=''>Job Responsibility : {jobResponsibility}</p>
                        <h5>Educational Requirements:</h5>
                        <p>{educationalRequirements}</p>
                        <h5>Experiences:</h5>
                        <p>{experiences} Years in this field. </p>
                    </div>

                    <div className="job-details-fild flex justify-center">
                        <div>
                            <div className=' bg-green-100 w-8/12 p-4'>
                                <h2>Job Details</h2>
                                <hr />
                                <div className="ditles-fild">
                                    <h5>salary : <span>{salary} Per Month </span> </h5>
                                    <h5>Job Title : <span>{jobTitle}</span></h5>
                                </div>
                                <h5>Contact Information</h5>
                                <hr />
                                <h5>Phone : {phone}</h5>
                                <h5>Email : {email}</h5>
                                <h5>Address : {address}</h5>
                            </div>
                            <button onClick={() => stortedApplyData(jobName, dataObj)} className='text-center bg-red-500 w-8/12 mt-4'>Applay</button>
                            {/* <button onClick={() => stortedApplyData(id, jobName)} className='text-center bg-red-500 w-8/12 mt-4'>Applay</button> */}
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default ShowDynamicFeatherData;