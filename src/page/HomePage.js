import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/about" >Go To About Page</Link>
        </div>
    );
};

export default HomePage;