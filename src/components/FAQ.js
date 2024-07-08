import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [open, setOpen] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        question: ''
    });

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Clear the form
        setForm({ name: '', email: '', question: '' });
    };

    return (
        <div className="faq-container">
            <main className="faq-main">
                <h1>FAQ</h1>
                <div className="faq-item" onClick={() => toggle(0)}>
                    <h2>Do you ship internationally? <span className="faq-icon">{open === 0 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span></h2>
                    {open === 0 && <p>Yes, we ship worldwide.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(1)}>
                    <h2>Do you accept returns? <span className="faq-icon">{open === 1 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span></h2>
                    {open === 1 && <p>Yes, returns are accepted within 30 days.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(2)}>
                    <h2>How do I place a custom order? <span className="faq-icon">{open === 2 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span></h2>
                    {open === 2 && <p>Contact us with your requirements.</p>}
                </div>
                <div className="faq-item" onClick={() => toggle(3)}>
                    <h2>How can I track my order? <span className="faq-icon">{open === 3 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span></h2>
                    {open === 3 && <p>You will receive a tracking link via email.</p>}
                </div>
                <div className="feedback-form">
                    <h2>Have more questions? Ask us!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="question">Question(s):</label>
                            <textarea
                                id="question"
                                name="question"
                                value={form.question}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default FAQ;