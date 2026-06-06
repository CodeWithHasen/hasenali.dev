import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import photoportfolio from "../assets/images/photoportfolio.png";

export default function Home() {
    return (
        <div className="container-fluid">
            <SEO 
                title="Hasen Ali | Full-Stack Developer (React | Angular | MERN | MEAN)"
                description="Full Stack Developer specializing in React, Angular, Node.js, MongoDB, and modern UI development."
                url="https://hasenali-dev.netlify.app/"
            />
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center min-vh-100">
                    <div className="text-start">
                        <h1 className="ms-4 mt-4 mb-0">Welcome to my</h1>
                        
                        <hr className="border-0 mx-auto ms-4" style={{ width: "45%", height: "20px", backgroundColor: "rgb(241, 9, 191)" }} />

                        <h2 className="ms-4 mb-2">Portfolio!</h2>
                        <p className="ps-4" style={{ textAlign: "justify"}}>
                            I am a Full Stack Web Developer specializing in MERN and MEAN stack development, with expertise in both front-end and back-end technologies. My skill set includes scalable application architecture, structured development practices, and responsive UI development. Passionate about technology and continuous learning, I build modern web applications through real-world project-based development and problem-solving.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center gap-4 mt-4 my-4">
                        <Link to="/contact" className="btn btn-primary px-4 py-2">
                            <strong>Hire Me</strong>
                        </Link>

                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle px-4 py-2" data-bs-toggle="dropdown">
                            <strong>My Resume</strong>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item text-success" href="https://drive.google.com/file/d/1Pd6RrtSBZ92Lu5QQw8W-RbGEcKKgqzzS/view" target="_blank" rel="noopener noreferrer">
                                <strong>View Resume</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="d-flex align-items-center mt-4 gap-4 social-icons">
                        <h3 className="me-2">Connect with me:</h3>
                        <a href="https://github.com/CodeWithHasen" target="_blank" className="text-white">
                            <span className="bi bi-github fs-2"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/hasen-ali-5a672991/" target="_blank" className="text-white">
                            <span className="bi bi-linkedin fs-2"></span>
                        </a>
                        <a href="https://www.youtube.com/@CodeWithHasen" target="_blank" className="text-white">
                            <span className="bi bi-youtube fs-2"></span>
                        </a>
                        <a href="https://x.com/Ali786Hasen" target="_blank" className="text-white">
                            <span className="bi bi-twitter fs-2"></span>
                        </a>
                        <a href="https://www.instagram.com/ali786.hasen/" target="_blank" className="text-white">
                            <span className="bi bi-instagram fs-2"></span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-5 position-relative home-image-section">
                    <div className="background-shape"></div>
                    <img src={photoportfolio} alt="photoportfolio" className="rounded-circle original-size"/>
                </div>
            </div>
        </div>
    );
}
