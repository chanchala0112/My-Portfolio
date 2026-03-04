import React from "react";

const services = [
    {
        title: "Web Development",
        description: "Building modern, responsive, and high-performance web applications using React and Next.js.",
        icon: "🌐"
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning user interfaces with a focus on user experience.",
        icon: "🎨"
    },
    {
        title: "API Development",
        description: "Designing and implementing robust backend systems and RESTful APIs.",
        icon: "⚙️"
    }
];

export default function ServicesPage() {
    return (
        <section className="services-section">
            <div className="section-container">
                <h2 className="section-title">My Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
