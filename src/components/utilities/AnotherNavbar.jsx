import React from 'react';
import Navbar from './Navbar';

import "./another_navbar.css"

const AnotherNavbar = ({title}) => {
    return (
        <div className="detailViewEl">
            <div>
           <Navbar></Navbar>
            </div>
            <h2 className="text-center fs-1 margin__long__distance purple__deep">
                {title}
            </h2>
        </div>
    );
};

export default AnotherNavbar;