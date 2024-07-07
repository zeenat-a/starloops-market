import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <img src="/home.jpg" alt="Star Loops Market" />
            <div className="hero-text">
                <h1>Star Loops Market</h1>
                <button>Shop All</button>
            </div>
        </section>
    );
}

export default Hero;