import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShowDynamicFeatherData = () => {
    const idd = useParams();
    // const naviGate = useNavigate();

    const featherData = useLoaderData();
    let getData
    if (!featherData) {
        return
    } else {
        getData = featherData?.filter(data => {
            if (data.id === parseInt(idd.id)) {
                return data
            }
        });
    }

    const { id, img, jobName, title, jobCategory, otherCategory, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, jobTitle, email, phone, address } = getData[0];
    
    const dataObj = {
        id: id,
        img: img,
        title: title,
        jobName: jobName,
        jobCategory: jobCategory,
        otherCategory: otherCategory,
        location: location,
        salary: salary,
    }

    const getLocalData = () => {
        let stortData = {};
        const getData = localStorage.getItem("dataId");
        if (getData) {
            stortData = JSON.parse(getData)
        }
        return stortData;
    }

    const stortedApplyData = (jobName, dataObj) => {
        toast("SuccessFully Applayed")
        const cart = getLocalData();
        cart[jobName] = dataObj;
        const setData = JSON.stringify(cart);
        localStorage.setItem("dataId", setData)
    }



    return (
        <div>
            <h2 className='text-center text-3xl py-20  '>Job Details </h2>


            <div className="details-content bg-white text-black  ">

                <div className="child-content mx-auto grid grid-row md:grid-cols-2 w-full md:w-11/12 lg:w-10/12 p-10 md:pt-20 ">
                    <div className="requirment-files p-2 md:p-0">
                        <p className=''><span className='font-semibold'>Job Description</span> : {jobDescription}</p>
                        <p className=''><span className='font-semibold'>Job Responsibility</span> : {jobResponsibility}</p>
                        <h5 className='font-semibold'>Educational Requirements :</h5>
                        <p>{educationalRequirements}</p>
                        <h5 className='font-semibold'>Experiences :</h5>
                        <p>{experiences} Years in this field. </p>
                    </div>

                    <div className="job-details-fild flex justify-center">
                        <div>
                            <div className=' bg-green-100 w-full md:w-10/12 p-4'>
                                <h2 className='font-bold'>Job Details</h2>
                                <hr />
                                <div className="ditles-fild">
                                    <h5><span className='font-semibold' >salary</span> : <span>{salary} Per Month </span> </h5>
                                    <h5><span className='font-semibold' >Post Name</span>  : <span>{title} </span> </h5>
                                    <h5><span className='font-semibold' >Job Title</span>  : <span>{jobTitle}</span></h5>
                                </div>
                                <h5 className='pt-2 font-bold'>Contact Information</h5>
                                <hr />
                                <h5><span className='font-semibold' >Phone</span> : {phone}</h5>
                                <h5><span className='font-semibold' >Email</span> : {email}</h5>
                                <h5><span className='font-semibold' >Address</span> : {address}</h5>
                            </div>
                            <button onClick={() => stortedApplyData(jobName, dataObj)} className='text-center bg-red-500 w-full md:w-10/12 py-2 mt-4'>Applay</button>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default ShowDynamicFeatherData;