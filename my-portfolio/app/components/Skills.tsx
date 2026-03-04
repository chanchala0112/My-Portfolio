import React from "react";

const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "MySQL / MongoDB", level: 75 },
    { name: "PHP", level: 70 },
    { name: "Git / GitHub", level: 85 },
    { name: "UI/UX Design", level: 75 },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
