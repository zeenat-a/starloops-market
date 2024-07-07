import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    return (
        <div className="faq-container">
            <main className="faq-main">
                <h1>FAQ</h1>
                <div className="faq-item" onClick={() => toggle(0)}>
                    <h2>Do you ship internationally?</h2>
                    {open === 0 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(1)}>
                    <h2>Do you accept returns?</h2>
                    {open === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(2)}>
                    <h2>How do I place a custom order?</h2>
                    {open === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(3)}>
                    <h2>How can I track my order?</h2>
                    {open === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
            </main>
        </div>
    );
};

export default FAQ;