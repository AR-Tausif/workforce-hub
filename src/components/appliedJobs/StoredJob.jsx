import React from 'react';

const StoredJob = ({job}) => {

    return (
        <div className="col p-3 border rounded mt-5">
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="bg-light ps-5 py-5">
                    <img className="w-75 py-5 rounded d-flex align-items-center justify-content-center" src={job.img_logo} alt="" />  
                </div>
                <div className="w-50 mt-3">
                    <h3>{job.title}</h3>
                    <p>{job.author}</p>
                    <button className="btn btn-outline-primary">
                        {
                            job.job_type
                        }
                        </button>
                        <button className="btn btn-outline-primary ms-2">
                            {
                                job.duty_time                            }
                        </button>
                        <p className="mt-2">
                            <span>
                                {
                                    job.location.state
                                }
                            </span>
                            <span className="ms-5">
                                {
                                    job.salary
                                }
                            </span>
                        </p>
                    </div>
                    <div className="">
                    <button 
                    onClick={()=>handleViewDetails()}
                    className="btn btn-primary p-2">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default StoredJob;