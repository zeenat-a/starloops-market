import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <img src="/crochet.jpg" alt="About Us" />
            </div>
            <footer>
                <p>SHOP SMALL, SHOP SUSTAINABLE</p>
            </footer>
        </section>
    );
}

export default About;