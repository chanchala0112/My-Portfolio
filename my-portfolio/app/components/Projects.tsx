import React from "react";
import Link from "next/link";

const projects = [
    {
        title: "AI Image Generator",
        description: "A cutting-edge platform for generating high-quality images using OpenAI's DALL-E 3 API.",
        link: "#",
        tags: ["React", "Next.js", "OpenAI"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        title: "EcoConnect Dashboard",
        description: "A real-time environmental monitoring dashboard with interactive data visualizations.",
        link: "#",
        tags: ["TypeScript", "D3.js", "Node.js"],
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        title: "Zenith E-Commerce",
        description: "A premium shopping experience with smooth transitions and a secure payment gateway.",
        link: "#",
        tags: ["Next.js", "Stripe", "Clerk"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

interface ProjectsProps {
    title?: string;
    showFullHeader?: boolean;
}

export default function Projects({ title = "My Projects", showFullHeader = true }: ProjectsProps) {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                {showFullHeader && (
                    <>
                        <h2 className="section-title">{title}</h2>
                        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
                            A showcase of my recent work, featuring demos and technical breakdowns.
                        </p>
                    </>
                )}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {project.videoUrl && (
                                <div className="project-video-container">
                                    <video
                                        className="project-video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={project.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <Link href={project.link} className="project-link">
                                    View Project Case Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
