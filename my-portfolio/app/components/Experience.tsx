import React from "react";

const experiences = [
    {
        company: "Freelance",
        role: "Full Stack Developer",
        period: "2023 - Present",
        description: "Building custom web applications for various clients using modern technologies like React, Next.js, and Node.js.",
    },
    {
        company: "Tech Solutions",
        role: "Junior Web Developer",
        period: "2022 - 2023",
        description: "Assisted in developing and maintaining client websites. Focused on frontend improvements and responsive design.",
    },
    {
        company: "University Project",
        role: "Backend Lead",
        period: "2021 - 2022",
        description: "Led the backend development for a university management system using PHP and MySQL.",
    },
];

export default function Experience() {
    return (
        <section className="experience-section">
            <div className="section-container">
                <h2 className="section-title">My Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <span className="experience-date">{exp.period}</span>
                            <h3 className="experience-role">{exp.role}</h3>
                            <h4 className="experience-company">{exp.company}</h4>
                            <p className="experience-desc">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
