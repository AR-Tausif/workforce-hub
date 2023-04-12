import React, { useEffect, useState } from 'react';
import AnotherNavbar from '../utilities/AnotherNavbar';
import { useNavigate } from 'react-router-dom';
import StoredJob from './StoredJob';

const AppliedJob = () => {
    const [jobData, setJobData] = useState([])
    const navigate = useNavigate()
    const storedData = JSON.parse(localStorage.getItem("items"));
    useEffect(()=> setJobData(storedData), [])
    

const handleViewDetails = id =>{
    navigate("/details", {state: {viewID: id}})
}

const handleFilter = (e)=>{
  console.log(e.target);
  let value = e.target.value
  if(value=="Remote"){
    const filter = jobData.filter(d=>d.job_type=="Remote")
    console.log(filter);
    setJobData(filter)

  } else if(value=="Onsit"){
    const filter = jobData.filter(d=>d.job_type=="Onsit")
    console.log(filter);
    setJobData(filter)
  }
}
    // const handleRemote =()=>{
        
    // }
    // const handleFullTime = ()=>{
    //     console.log("Full")
    // }

    console.log(jobData)

    return (
        <div>
            <AnotherNavbar title="Applied Jobs" />
            <div className="container" >
                <select  onChange={handleFilter} className="select w-25 max-w-xs bg-slate-100">
    <option disabled selected>Filter By</option>
    <option value="Remote">Show Remote Job</option>
    <option value="Onsit">Show ONsit Job</option>
  </select>

                <div className="row-1">
                        {
                            jobData && jobData.map(jobEl => <StoredJob key={jobEl.id} job={jobEl} />)
                        }
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;