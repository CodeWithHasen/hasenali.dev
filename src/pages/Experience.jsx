import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Experience() {
    return (
        <div className="container mt-5">
            <SEO
                title="Experience | Full Stack Developer Skills & Projects | Hasen Ali"
                description="Professional experience in React, Angular, and full stack web development projects."
                url="https://hasenali-dev.netlify.app/experience"
            />
            <div className="text-center mb-5">
                <button className="rounded bg-dark text-white px-4 py-2 mb-2">
                    <h2>MY EXPERIENCE</h2>
                </button>
            </div>

            <div className="timeline mt-4">

          
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCheckCircle className="text-success fs-4" />
                    </div>
                    <div className="timeline-content">
                        <h4>Team Leader</h4>
                        <p><strong>Helloverify India Pvt Ltd | Noida | Sep 2025 – Apr 2026</strong></p>
                        <ul>
                            <li>Managing team operations, workflow coordination, and daily reporting.</li>
                            <li>Leading team members in project execution and task delivery.</li>
                            <li>Transitioning into full-time software development responsibilities.</li>
                            <li>Collaborating with cross-functional teams to streamline processes.</li><br/>
                            <li><strong>Transferable Skills</strong> : Team Collaboration | Documentation | Client Communication | Deadline Management</li>
                        </ul>
                    </div>
                </div>

                
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCheckCircle className="text-success fs-4" />
                    </div>
                    <div className="timeline-content">
                        <h4>Professional Training & Full-Stack Projects</h4>
                        <p><strong>Self-Learning | Gurugram | Dec 2024 – Aug 2025</strong></p>
                        <ul>
                            <li>Practiced full-stack development using React, Angular, Node.js, Express, and MongoDB.</li>
                            <li>Built multiple projects including SPAs, dashboards, UI clones, and e-commerce modules.</li>
                            <li>Deployed applications using Netlify, Firebase, and GitHub Pages.</li>
                            <li>Enhanced problem-solving, debugging, and version control skills with GitHub collaboration.</li>
                        </ul>
                    </div>
                </div>

            
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCheckCircle className="text-success fs-4" />
                    </div>
                    <div className="timeline-content">
                        <h4>Software Developer (MCA Final Semester Project)</h4>
                        <p><strong>Railworld India Pvt Ltd | Gurugram | Jun 2024 – Nov 2024</strong></p>
                        <ul>
                            <li>Developed responsive UI using HTML, CSS, ES6+, and Bootstrap.</li>
                            <li>Trained in modern front-end frameworks: React and Angular.</li>
                            <li>Implemented reusable components and clean coding practices.</li>
                            <li>Gained hands-on experience with real-world front-end project architecture.</li>
                        </ul>
                    </div>
                </div>

              
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaCheckCircle className="text-success fs-4" />
                    </div>
                    <div className="timeline-content">
                        <h4>React & Angular Projects (In Progress)</h4>
                        <p><strong>2024 – Present</strong></p>
                        <ul>
                            <li>Developing dynamic web applications using React, Angular, JavaScript and TypeScript.</li>
                            <li>Implementing reusable components, state management, and API integration.</li>
                            <li>Optimizing UI/UX for performance, responsiveness, and cross-browser compatibility.</li>
                            <li><strong>Key Projects</strong> :
                                <ul>
                                    <li><strong>Zomato Clone - Angular Food Delivery Web App</strong> : Zomato Clone is a responsive food delivery web application inspired by Zomato, developed using Angular 19, Angular Material, Bootstrap, SCSS, Firebase Hosting, JSON Server, and REST API integration. It includes restaurant listings, cart management, authentication pages, routing, lazy loading, and reusable Angular components.</li><br/>
                                    <li><strong>LinkedIn Clone - Professional Social Networking Web App</strong> : LinkedIn Clone is a responsive professional networking web app inspired by LinkedIn, built using React.js, Redux Toolkit, React Router, Bootstrap, SCSS, and Firebase Hosting. It features authentication pages, responsive feeds, profile dropdowns, like/dislike functionality, and reusable React components.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    );
}
