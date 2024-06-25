import React, { useState } from 'react';
import TemplatePage from './TemplatePage.js';
import '../../styles/contactpage.css';
import bg from '../../Assets/bg/renamed-contact.jpg'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to backend or API)
        alert('Message sent!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    return (
        <TemplatePage src={bg} type='image'>
            <div className="contact-page">
                <div className="contact-container">
                    <h1>CONTACT US</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">What can we help you with?</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="faq-container">
                    <h1>Frequently Asked Questions</h1>
                    <div className="faq">
                        <h3>What is Telugu Medium?</h3>
                        <p>Telugu Medium is a fashion brand dedicated to representing true Bhāratiyan culture and style.</p>
                    </div>
                    <div className="faq">
                        <h3>How can I place an order?</h3>
                        <p>You can place an order directly through our website by browsing our collections and adding items to your cart.</p>
                    </div>
                    <div className="faq">
                        <h3>What are the payment options available?</h3>
                        <p>We accept various payment methods including credit/debit cards, UPI, and net banking.</p>
                    </div>
                    <div className="faq">
                        <h3>Can I return or exchange an item?</h3>
                        <p>Yes, we have a return and exchange policy. Please refer to our policy page for more details.</p>
                    </div>
                    <div className="faq">
                        <h3>How can I contact customer support?</h3>
                        <p>You can contact our customer support team through the contact form above or by emailing us at support@telugumedium.com.</p>
                    </div>
                </div>
            </div>
        </TemplatePage>
    );
}

export default ContactPage;
