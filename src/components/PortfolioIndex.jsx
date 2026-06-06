import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImae from "../assets/images/profile.png";
import titlehasen from "../assets/images/titlehasen.png";
import "../assets/styles/style.css";

import ScrollToTop from "./ScrollToTop";

export default function PortfolioIndex({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if(dropdownRef.current && ! dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
                setProfileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[]);

    const handleClick = () => {
        alert("🚀 New version of portfolio UI is under development. Stay tuned for updates!");
        navigate("/");
    };

    return (
        <div className="portfolio-app">
            <ScrollToTop />

            {/* HEADER */}
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid portfolio-wrapper">

                    <Link className="navbar-brand" to="/">
                        <img src={titlehasen} alt="title" width="175" height="50" />
                    </Link>

                    <button className="navbar-toggler me-3" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/experience">Experience</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>

                        <div className="d-flex align-items-center gap-2 navbar-right-section">

                        <form className="navbar-search-form">
                            <input type="text" className="form-control navbar-ui-box"
                                placeholder="✨ New UI Coming Soon"
                                onClick={handleClick} readOnly style={{ cursor: "pointer" }} />
                        </form>

                        <div ref={dropdownRef} className="dropdown me-4 position-relative">
                            <img src={profileImae} alt="Profile" className="rounded-circle"
                            width="50" height="50" style={{ cursor: "pointer" }} onClick={() => setProfileOpen(!profileOpen)}/>

                        <div className="blinking-light position-absolute"></div>
                            {profileOpen && (
                                <div className="profile-dropdown p-3 shadow">
                                <div className="d-flex justify-content-center align-items-center mb-2">
                                    <img src={profileImae} alt="Profile" className="rounded-circle" width="80" height="80" />
                                </div>
                            
                                <div className="text-center">
                                    <h6 className="text-light fw-bold mb-1">Hasen Ali</h6>
                                    <p className="text-success mb-1">Full Stack Developer</p>
                                    <div className="d-flex justify-content-center gap-2 flex-wrap small">
                                        <span> <FaReact className="me-1" /> React </span>
                                        <span> <FaAngular className="me-1" /> Angular </span>
                                        <span> <FaNodeJs className="me-1" /> Node.js</span>
                                        <span> <SiMongodb className="me-1" /> MongoDB</span>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
            </header>

            {/* MAIN */}
            <main className="mt-2 content-area">
                {children}
            </main>

            {/* FOOTER */}
            <footer className="footer py-3">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <span className="footer-brand">Hasen Ali | Full Stack Developer</span>
                        
                        <span className="footer-copy">&copy; 2025 - {new Date().getFullYear()} All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}