import React from 'react';
import AnotherNavbar from '../utilities/AnotherNavbar'
import PieChartAss from '../../sceens/PieChartAss';

const Statistics = () => {
    return (
        <>
        <AnotherNavbar title="Assignment Marks"></AnotherNavbar>
        <div className="d-flex flex-column align-items-center">
            <PieChartAss></PieChartAss>
        </div>
        </>
    );
};

export default Statistics;