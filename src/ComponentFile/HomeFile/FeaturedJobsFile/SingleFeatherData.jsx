import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import "./SingleFeather.css";

const SingleFeatherData = ({ data }) => {
    // console.log(data)
    const { id, img, title, jobCategory, otherCategory, location, salary } = data;

    const navigate = useNavigate();

    const sendDataFun = (id) => {
        navigate(`/showDitles/${id}`)
    }


    return (
        <div className='p-6 single-datas-style duration-700'>
            <img className=' w-6/12 md:w-28 mx-auto md:m-0 ' src={img} alt="" />
            <h4 className='mt-2'>{title}</h4>
            <div className="button-div">
                <button className='bg-red-500'>{jobCategory}</button>
                <button className='bg-green-500 ms-2'>{otherCategory}</button>
            </div>
            <span className='block my-2'>
                <small> <FontAwesomeIcon className='me-1' icon={faLocationDot} />  Location : {location}</small>
                <small className='ms-3'> <FontAwesomeIcon className='me-1' icon={faSackDollar} /> salary : {salary}</small>
            </span>

            <button className='bg-green-500' onClick={() => sendDataFun(id)}>View Ditles</button>

        </div>
    );
};

export default SingleFeatherData;