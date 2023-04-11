import React, { useEffect, useState } from 'react';
import SingleApplyData from './SingleApplyData';
import { Dropdown } from 'flowbite-react';

const ApplayJobPage = () => {
    const getData = localStorage.getItem("dataId");
    const [dropdownValue, setWropdownValue] = useState("")

    const data = JSON.parse(getData)
    let getDatas = [];
    for (const id in data) {
        getDatas.push(data[id])

    }
    console.log(getDatas)
    if (dropdownValue === "outside") {

        getDatas = getDatas.filter((a) => a.jobCategory.includes("outside"));
        // getDatas = getDatas.sort((a, b) => a.jobCategory.localeCompare(b.jobCategory));

    }
    else if (dropdownValue === "remote") {
        getDatas = getDatas.filter((a) => a.jobCategory.includes("remote"));
        // getDatas = getDatas.sort((a, b) => a.otherCategory.localeCompare(b.otherCategory));

    }
    else{
        getDatas = getDatas
    }
    console.log(getDatas)




    return (
        <div>
            <h2 className='text-center text-4xl mt-6'>applayed Job</h2>

            <div className="dropDown flex justify-end me-5 md:me-16 lg:me-56 mt-5">
                <Dropdown
                    label="Filter By"
                    dismissOnClick={false}
                // onClick={(event) => filteValue(event.target.textContent)}
                >
                    <Dropdown.Item onClick={() => setWropdownValue("all")}>
                        See All
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setWropdownValue("outside")}>
                        Outside
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setWropdownValue("remote")}>
                        Fulltime
                    </Dropdown.Item>

                </Dropdown>
            </div>

            <div className="pt-0 pb-10 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
                {
                    getDatas.map(data => <SingleApplyData key={data.id} data={data} ></SingleApplyData>)
                }
            </div>
        </div>
    );
};

export default ApplayJobPage;
