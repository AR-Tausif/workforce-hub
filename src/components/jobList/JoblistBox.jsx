import React from 'react';

const JoblistBox = ({list}) => {
    return (
        <div className="job-el-box-bg rounded">
            <img className="job-el-img-bg p-2 rounded" src={list.img} alt="" />
            <h4 className="mt-4">{list.title}</h4>
            <p>{list.job} Jobs Available</p>
        </div>
    );
};

export default JoblistBox;