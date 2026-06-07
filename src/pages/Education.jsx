import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Education() {
    return (
        <div className="container-fluid mt-5">
            <SEO 
                title="Education | MCA Graduate & Full Stack Developer | Hasen Ali"
                description="Academic background and technical education of Hasen Ali, including MCA and software development skills."
                url="https://hasenali-dev.netlify.app/education"
            />
            <section id="education">
                <div className="container">

                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <button className="rounded bg-dark text-white px-3 py-2 mb-2">
                            <h2>EDUCATION & CERTIFICATIONS</h2>
                        </button>
                    </div>

                    <div className="row">

                        {/* Academic Profile */}
                        <div className="col-md-6">
                            <h3 className="text-center text-primary p-2">Academic Profile</h3>
                            <hr
                                className="mt-2 mb-4 border-3"
                                style={{
                                    width: "280px",
                                    height: "10px",
                                    borderTop: "10px solid rgb(241, 9, 191)",
                                    margin: "auto",
                                }}
                            />

                            <div className="timeline">

                                {/* MCA */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Master of Computer Applications (MCA)</h4>
                                        <h6 className="p-2">Jain University, Bangalore (2022 – 2024)</h6>
                                        <strong>Key Focus Areas:</strong>
                                        <ul>
                                            <li>Advanced computer science concepts and application development</li>
                                            <li>Web development using modern front-end and back-end technologies</li>
                                            <li>Software engineering principles and system design</li>
                                            <li>Project-based learning and real-world problem solving</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* BCA */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Bachelor of Computer Applications (BCA)</h4>
                                        <h6 className="p-2">V.B.S. Purvanchal University, Jaunpur (2009 – 2012)</h6>
                                        <strong>Key Focus Areas:</strong>
                                        <ul>
                                            <li>Fundamentals of computer science and programming</li>
                                            <li>Introduction to web technologies and application development</li>
                                            <li>Database concepts and software development lifecycle basics</li>
                                            <li>Logical thinking and problem-solving through programming</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 12th */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Higher Secondary (12th Standard)</h4>
                                        <h6 className="p-2">National Institute of Open Schooling (2009)</h6>
                                        <strong>Subjects & Skills:</strong>
                                        <ul>
                                            <li>Arts with a focus on analytical and communication skills</li>
                                            <li>Introduction to computer science fundamentals</li>
                                            <li>Development of independent learning and self-discipline</li>
                                            <li>Strong foundation for higher education and technical studies</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 10th */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Secondary (10th Standard)</h4>
                                        <h6 className="p-2">W.B.S.E. Lahuchar High School (2001)</h6>
                                        <strong>Subjects & Skills:</strong>
                                        <ul>
                                            <li>Science fundamentals and basic scientific reasoning</li>
                                            <li>Mathematics and problem-solving skills</li>
                                            <li>Logical thinking and analytical ability development</li>
                                            <li>Strong academic foundation for future technical studies</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Professional Certifications */}
                        <div className="col-md-6">
                            <h3 className="text-center text-success p-2">Professional Certifications</h3>
                            <hr
                                className="mt-2 mb-4 border-3"
                                style={{
                                    width: "280px",
                                    height: "10px",
                                    borderTop: "10px solid rgb(241, 9, 191)",
                                    margin: "auto",
                                }}
                            />

                            <div className="timeline">

                                {/* Creative Thinking */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>Creative Thinking: Techniques and Tools for Success</h4>
                                        <h6 className="p-2">
                                            Imperial College London · Coursera
                                            <span className="text-muted"> (2025 — In Progress)</span>
                                        </h6>
                                        <strong>Key Competencies Developed:</strong>
                                        <ul>
                                            <li>Applied structured creativity tools including brainstorming, SCAMPER, and morphological analysis</li>
                                            <li>Used creative problem-solving frameworks such as TRIZ and contradiction matrices</li>
                                            <li>Developed fluency in individual and group-based ideation techniques across diverse scenarios</li>
                                            <li>Strengthened analytical, communication, and decision-making skills for innovative thinking</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* HTML/CSS/JS Specialization */}
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <FaCheckCircle className="text-success fs-4" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>HTML, CSS, and JavaScript for Web Developers Specialization</h4>
                                        <p className="text-muted">Front-End Web Development Specialization</p>
                                        <h6 className="p-2">
                                            Johns Hopkins University · Coursera
                                            <span className="text-muted"> (2025 — In Progress)</span>
                                        </h6>
                                        <strong>Core Skills & Applied Learning:</strong>
                                        <ul>
                                            <li>Designed and built responsive, mobile-first websites using HTML5, CSS3, and Bootstrap</li>
                                            <li>Developed dynamic and interactive web applications with JavaScript, Ajax, and JSON</li>
                                            <li>Applied event-driven programming and object-oriented concepts in front-end development</li>
                                            <li>Implemented accessible, cross-browser user interfaces following WCAG standards</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
