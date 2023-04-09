import React from 'react';

const SingleFeatherData = ({ data }) => {
    // console.log(data)

    return (
        <div className='bg-slate-400 p-5'>
            <img className=' w-6/12 md:w-28 mx-auto md:m-0 ' src={data.img} alt="" />
            <h4>{data.title }</h4>

        </div>
    );
};

export default SingleFeatherData;