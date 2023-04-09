import React, { useEffect, useState } from 'react';
import "./Home.css";
import JobCategoryList from './JobCategoryListFile/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import SingleFeatherData from './FeaturedJobsFile/SingleFeatherData';

const Home = () => {
    const jobData = useLoaderData()
    // console.log(jobData)
    const [feathurdData, setFeathurdData] = useState([]);
    const [datas, setNewdatas] = useState([]);
    const [showMore, setShowmore] = useState(false)
    useEffect(() => {
        fetch("featuradData.json")
            .then(res => res.json())
            .then(data => setFeathurdData(data))
    }, [])

    const showMoreFun = () => {
        setShowmore(true);
    }
    useEffect(() => {
        if (showMore) {
            // const newData = feathurdData
            setNewdatas(feathurdData)
        }
        else {
            const newData = feathurdData.slice(0, 4)
            setNewdatas(newData)
        }

    }, [showMoreFun])
    // console.log(feathurdData.slice(0,4))


    return (
        <div className="main-div">
            <div className='w-full home-main-div px-10 md:p-0 lg:p-10 '>
                <div className="w-full grid md:grid-cols-2 justify-between  ">
                    <div className="text-div text-white p-0 md:pt-20 md:ps-20">
                        <div className="heading-text">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold tracking-tight">
                                One Step Closer To Your
                            </h2>

                            <div className="job-text-div my-2">
                                <h2 className='job-text-style text-3xl md:text-4xl lg:text-6xl  font-bold '>Dream Job</h2>
                            </div>
                        </div>

                        <p className="font-normal py-4 text-sm">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='text-1xl md:3xl'>Get Start</button>
                    </div>

                    <div className="img flex justify-center px-5 md:p-0 ">
                        <img src="https://i.ibb.co/MnHLs5r/P3-OLGJ1-copy-1.png" alt="" />
                    </div>

                </div>


            </div>


            <div className="job-category-list-style py-28 bg-slate-400">

                <JobCategoryList jobData={jobData}></JobCategoryList>

            </div>

            <div className="Featured-Jobs text-white py-14">
                <div className="featured-heading-text text-center">
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl'>Featured Jobs</h2>
                    <p className='py-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="featherData-style grid md:grid-cols-2 justify-center  gap-5 px-10 pt-10 ">
                    {
                        datas?.map(data => <SingleFeatherData
                            key={data.id}
                            data={data}
                        ></SingleFeatherData>)
                    }
                </div>

                <button onClick={showMoreFun} className='bg-red-500 mx-auto w-28 block mt-10'>show more</button>





            </div>


        </div>
    );
};

export default Home;