import React from 'react';
import "./Home.css";
import JobCategoryList from './JobCategoryListFile/JobCategoryList';

const Home = () => {
    return (
        <div className="main-div">
            <div className='w-full home-main-div px-10 md:p-0 lg:p-10 '>
                <div className="w-full grid md:grid-cols-2 justify-between  ">
                    <div className="text-div text-white p-0 md:pt-20 md:ps-20">
                        <div className="heading-text">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl   font-bold tracking-tight">
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



            <div className="job-category-list-style py-28 bg-slate-100">

                <JobCategoryList></JobCategoryList>

            </div>

            
        </div>
    );
};

export default Home;