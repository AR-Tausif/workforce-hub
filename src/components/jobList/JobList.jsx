import React from 'react';
import HeadTitle from '../utilities/HeadTitle';

import "./joblist.css"
import JoblistBox from './JoblistBox';

const JobList = () => {
    return (
        <div className="container py-4">
            <HeadTitle title="Job Category List"></HeadTitle>
            <div className="d-flex justify-content-center align-items-center gap-4 mt-5">
                {
                    jobList.map((list, index) => <JoblistBox key={index} list={list} />)
                }
            </div>
        </div>
    );
};

const jobList = [
    {img:"https://tinyurl.com/3u2nn6b7",title: "Account & Finance", job: "300"},
    {img:"https://tinyurl.com/ykhurjfb", title: "Creative Design", job: "100+"},
    {img: "https://tinyurl.com/mvz72xuh",title: "Marketing & Sales", job: "150"},
    {img: "https://tinyurl.com/mz8wks2b",title: "Engineering Job", job: "224"},
]

export default JobList;