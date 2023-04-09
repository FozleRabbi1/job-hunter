import React from 'react';
import './JobCatehoryListStyle.css';

const JobCategoryList = ({ jobData }) => {
    // console.log(jobData)

    return (
        <div className=''>

            <div className="catagory-text-div w-10/12 md:w-6/12 lg:w-5/12">
                <h2 className="heading-text text-center text-2xl md:text-4xl py-2 md:px-6 font-medium md:font-bold">Job Category List</h2>
            </div>
            <p className=' text-center mt-4 '>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="job-data-style grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 text-black w-10/12 md:w-9/12 mx-auto mt-6 gap-5">
                {
                    jobData.map(data => <div className='single-data-style p-4 duration-700 ' key={data.id}>
                        <img src={data?.img} alt="" />

                        <div className="text-div pt-2">
                            <h2>{data?.jobName}</h2>
                            <small>{data?.availableJob} Jobs Available </small>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default JobCategoryList;