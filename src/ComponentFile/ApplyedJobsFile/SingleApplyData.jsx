import React from 'react';
import "./ApplyedJobs.css";
import { useNavigate } from 'react-router-dom';

const SingleApplyData = ({ data }) => {
    const { id, img, title, jobName, jobCategory, otherCategory, location, salary, } = data

    const navigate = useNavigate();
    const showMoreFun = (id) => {
        console.log(id)
        navigate(`showDitles/${id}`)
    }

    return (
        <div>

            <div className="applay-show-div flex justify-between my-8  px-4 py-5">

                <div className="content flex w-6/12">
                    <img className=' w-28 ' src={img} alt="" />
                    <div className="text w-6/12 ms-4">
                        <h3>{title}</h3>
                        <h4>{jobName}</h4>
                        <button>{jobCategory}</button>
                        <button>{otherCategory}</button>

                    </div>
                </div>

                <button onClick={() => showMoreFun(id)} className='bg-green-400'>Showmore</button>
            </div>


        </div>
    );
};

export default SingleApplyData;