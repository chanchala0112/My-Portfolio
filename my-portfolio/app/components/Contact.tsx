import React from "react";

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities.
                </p>
                <div className="contact-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Full Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows={6} required></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
