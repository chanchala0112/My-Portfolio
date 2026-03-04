import React from "react";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "CEO at TechFlow",
        text: "Working with Chanchala was a game-changer for our project. His attention to detail and ability to translate complex requirements into elegant code is unmatched.",
        avatar: "AJ"
    },
    {
        name: "Sarah Williams",
        role: "Marketing Director",
        text: "The web application Chanchala built is not only stunning but also incredibly fast. Our conversion rates have improved significantly since the launch.",
        avatar: "SW"
    },
    {
        name: "David Chen",
        role: "Startup Founder",
        text: "Professional, efficient, and highly skilled. Chanchala delivered beyond our expectations and was a pleasure to work with.",
        avatar: "DC"
    }
];

export default function TestimonialsPage() {
    return (
        <section className="testimonials-section">
            <div className="section-container">
                <h2 className="section-title">Client Testimonials</h2>
                <div className="services-grid"> {/* Reusing services grid for consistency */}
                    {testimonials.map((t, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon" style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                                {t.avatar}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>&quot;{t.text}&quot;</p>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{t.name}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
