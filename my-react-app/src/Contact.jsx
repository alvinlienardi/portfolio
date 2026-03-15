import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: ''});
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('Failed to send message. Please try again.');
        }
    }

    return (
        <div className="contact">
            <div className="contact-title">
                <h2>Contact Me</h2>
                {status && <p>{status}</p>}
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="floating-label-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="floating-label-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="floating-label-group">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        rows="4"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;