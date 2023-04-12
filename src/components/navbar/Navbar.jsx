import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container pt-2">
                <a className="navbar-brand" href="/">
                    <img className="w-50" src="https://i.ibb.co/4VvTh80/workforce-hub-logo.webp" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/statistics">Statistics</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/appliedJobs">Applied jobs</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-default-hub" type="submit">Start Applying</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;