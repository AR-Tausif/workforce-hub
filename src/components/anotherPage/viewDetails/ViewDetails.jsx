import React, { useEffect,useState } from 'react';

import "./viewDetais.css"
import Detail from '../Detail';
import Footer from '../../footer/Footer';
import {useLoaderData, useLocation} from 'react-router-dom'
import AnotherNavbar from '../../utilities/AnotherNavbar';



const ViewDetails = () => {
    const [job, setJob] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const location = useLocation()
    const data = useLoaderData()

    useEffect(() => {
        const findData = data.find(prod => prod.id === location.state.id)
        setJob(findData)
        setLoading(false)
    }, [data, location.state.id])
        const detailsEl = ()=> <Detail job={job}></Detail>;
        const Massege = <h1> Data loading....</h1>

    return (
        <div>
           <AnotherNavbar />
           <div className="container p-5">
            {
                isLoading? <h1>Loding...</h1> : <Detail job={job}></Detail>
            }
           </div>
           <div className="bg-dark">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default ViewDetails;