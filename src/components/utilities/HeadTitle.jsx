import React from 'react';

const HeadTitle = ({title, paragraph}) => {
    return (
        <div className="text-center mt-5">
            <h2 className="display-5 fw-bold">{title}</h2>
            <p className="text-secondary fs-6 mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default HeadTitle;