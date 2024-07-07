import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>STAR LOOPS MARKET</p>
                <nav>
                    <ul>
                        <li>Topic</li>
                        <li>Topic</li>
                        <li>Topic</li>
                    </ul>
                    <ul>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                    </ul>
                    <ul>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;