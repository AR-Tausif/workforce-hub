import React from 'react';
import LinkFooter from './LinkFooter';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container p-5 mt-5">
            <div className="row p-4 justify-content-between">
                <div className="col-3">
                    <div className="flex flex-column text-white">
                        <img className="w-75 mb-3" src="https://i.ibb.co/4VvTh80/workforce-hub-logo.webp" />
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src="https://i.ibb.co/fvwvdKT/Group-9969.png" alt="" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                        <LinkFooter></LinkFooter>
                        </div>
                        <div className="col">
                        <LinkFooter></LinkFooter>
                        </div>
                        <div className="col">
                        <LinkFooter></LinkFooter>
                        </div>
                        <div className="col">
                        <LinkFooter></LinkFooter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;