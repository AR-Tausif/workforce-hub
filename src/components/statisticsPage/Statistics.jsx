import React from 'react';
import AnotherNavbar from '../utilities/AnotherNavbar'
import PieChartAss from '../../sceens/PieChartAss';
import Footer from '../footer/Footer'

const Statistics = () => {
    return (
        <>
        <AnotherNavbar title="Assignment Marks"></AnotherNavbar>
        <div className="d-flex flex-column align-items-center">
            <PieChartAss></PieChartAss>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Statistics;