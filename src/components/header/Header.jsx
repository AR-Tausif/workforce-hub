import React from 'react';

import "./header.css"

const Header = () => {
    return (
        <section className="container">
            <div className="row align-items-center py-5">
            <div className="col-6">
                <h2 className="header-heading-tag">One Step <br /> Closer To Your <br /> <span>Dream Job</span></h2>
                <p className="header-paragraph">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn btn-default-hub">Get Started</button>
            </div>
            <div className="col-6">
                <img id="header-image" src="https://i.ibb.co/xHrX3BR/P3-OLGJ1-copy-1.png" alt="" />
            </div>
            </div>
        </section>
    );
};

export default Header;