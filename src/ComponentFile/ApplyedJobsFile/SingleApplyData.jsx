import React from 'react';
import "./ApplyedJobs.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const SingleApplyData = ({ data }) => {
    const { id, img, title, jobName, jobCategory, otherCategory, location, salary, } = data

    const navigate = useNavigate();
    const showMoreFun = (id) => {
        console.log(id)
        navigate(`showDitles/${id}`)
    }

    return (
        <div>

            <div className="applay-show-div flex flex-col md:flex-row justify-center  md:justify-between my-8  px-4 py-5">

                <div className="content w-full md:w-8/12 flex flex-col md:flex-row ">
                    <img className=' w-28 ' src={img} alt="" />
                    <div className="text w-full ms-4">
                        <h3>{title}</h3>
                        <h4>{jobName}</h4>
                        <button>{jobCategory}</button>
                        <button className='ms-2'>{otherCategory}</button>
                        <div>
                            <small> <FontAwesomeIcon className='me-1' icon={faLocationDot} />  Location : {location}</small>
                            <small className='ms-3'> <FontAwesomeIcon className='me-1' icon={faSackDollar} /> salary : {salary}</small>
                        </div>

                    </div>
                </div>

                <div className="button-div flex items-center  ">
                    <button className='w-full' onClick={() => showMoreFun(id)}>ShowMore</button>
                </div>
            </div>


        </div>
    );
};

export default SingleApplyData;