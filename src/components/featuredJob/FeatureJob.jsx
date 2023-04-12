import React, { useEffect, useState } from 'react';
import HeadTitle from '../utilities/HeadTitle';
import Job from './Job';


const FeatureJob = ({jobs}) => {
    const [jobInfo, setJobInfo] = useState('');
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/AR-Tausif/needed-images/main/data.json")
        .then(res => res.json())
        .then(data=> {
            // console.log(data);
            return setJobInfo(data)
        })
    }, []);

    // console.log(jobInfo);

    return (
        <div className="container">
            <HeadTitle title="Featured Jobs"></HeadTitle>
            <div className="row gap-3 justify-content-center mt-5">
                {
                    jobInfo &&
                  jobInfo.map(info => <Job key={info.id} jobInfos={info} />)  
                }
                
            </div>
            <div className="m-auto text-center">
            <button className="btn btn-primary p-2 mt-3">
                More Job
            </button>
            </div>
        </div>
    );
};

export default FeatureJob;