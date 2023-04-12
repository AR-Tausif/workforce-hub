import React, { useEffect, useState } from 'react';
import AnotherNavbar from '../utilities/AnotherNavbar';
import { useNavigate } from 'react-router-dom';
import StoredJob from './StoredJob';

const AppliedJob = () => {
    const navigate = useNavigate()
    const storedData = JSON.parse(localStorage.getItem("items"));
 

const handleViewDetails = id =>{
    navigate("/details", {state: {viewID: id}})
}


    return (
        <div>
            <AnotherNavbar title="Applied Jobs" />
            <div className="container" >
                <div className="row-1">
                        {
                            storedData && storedData.map(jobEl => <StoredJob key={jobEl.id} job={jobEl} />)
                        }
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;