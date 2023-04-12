import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = ({job}) => {
    const [store, setStore] = useState([])
    const navigate = useNavigate()
    const getItemLocal = localStorage.getItem("items")
    const setStorageLocal =(data)=>{
        // setStore([data, ...store])
        if(!getItemLocal){
            localStorage.setItem("items", JSON.stringify([data]))
            
        }else{
            const getData = JSON.parse(localStorage.getItem("items"))
            localStorage.setItem("items", JSON.stringify([...getData, data]))
        }
        // console.log(store);
        // navigate("/appliedJobs")
    }
    return (
    <div className="d-flex align-items-center justify-content-center gap-4">
        <div className="border rounded p-5">
            <h1>{job.id}</h1>
            <p> <span className="fw-bold">Job Description:</span> {job.description}</p>
            <p> <span className="fw-bold">Job Responsibility:</span>{job.responsibility}</p>
            <p className="fw-bold">Educational Requirements: </p>
            <p>{job.educational_requirements.degree}</p>
            <p className="fw-bold">Experiences: </p>
            <p>{job.experiences.duration} Years in this field</p>
        </div>
        <div className="w-100">
            <div className="bg-info rounded p-5">
                <h4>Job Details:</h4>
                <hr />
                <div>
                    <p>Salary: {job.salary}</p>
                    <p>Job Title: {job.title}</p>
                    <hr />
                </div>
                <h2>Contact Information: </h2>
                <div>
                    <p>Phone: {job.contact_information.phone}</p>
                    <p>Email: {job.contact_information.email}</p>
                    <p>Location: {job.location.city}, {job.location.state} {job.location.country}</p>
                </div>
            </div>
            <button onClick={()=>setStorageLocal(job)}
             className='btn btn-primary p-2 px-4 mt-3 float-left'>Apply Now</button>
        </div>
    </div>
    );
};

export default Detail;