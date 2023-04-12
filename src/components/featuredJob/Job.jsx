import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import {useNavigate} from 'react-router-dom'

const Job = ({jobInfos}) => {
    const navigate = useNavigate()

    const handleBtnDetail =(id)=>{
        console.log(id);
        navigate("/details", {state: {id: id}})
    }
    
    return (
        <div className="col-5">
            <div className="card p-5 bg-light">
                <img className="w-25" src={jobInfos.img_logo} alt="" />
                <h3 className="mt-4">{jobInfos.title}</h3>
                <p>{jobInfos.author}</p>
                <div>
                    <button className="btn btn-outline-info">
                        {jobInfos.job_type}
                    </button>
                    <button className="btn btn-outline-info ms-3">
                        {jobInfos.duty_time}
                    </button>
                </div>
                <div className="d-flex gap-4">
                    <div className="d-flex">
                        <MapPinIcon className="hero-icons-size"></MapPinIcon>
                        <p className="mt-3">{jobInfos.location.state}</p>
                    </div>
                    <div className="d-flex">
                        <CurrencyDollarIcon className="hero-icons-size"></CurrencyDollarIcon>
                        <p className="mt-3">Salary: {jobInfos.salary}</p>
                    </div>
                </div>
                <button 
                onClick={()=>handleBtnDetail(jobInfos.id)}
                className="btn btn-primary"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Job;