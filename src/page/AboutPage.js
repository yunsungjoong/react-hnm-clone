
import React from 'react';
import { useNavigate } from 'react-router';

const AboutPage = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>About Page!</h1>
            <button onClick={goToHomepage}>Go to HomePage</button>
        </div>
    );
};

export default AboutPage;