import React from "react";
import { Link } from "react-router-dom";
import PracticeProjects from "./PracticeProjects";
import SEO from "../components/SEO";

export default function Projects() {

    const handleVisit = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="container-fluid mt-4">
            <SEO 
                title="Projects | React & Angular Web Applications | Hasen Ali"
                description="Explore my real-world projects built using React, Angular, Node.js, MongoDB, and modern UI/UX design."
                url="https://hasenali-dev.netlify.app/projects"
            />
            <div className="text-center">
                <button className="rounded bg-dark text-white px-4 py-2 mb-2">
                <h2>MAIN PROJECTS</h2>
                </button>
            </div>
            <h3 className="text-center">Here are some of My Projects</h3>
            <hr className="mt-2 mb-4 border-3" style={{ width: "200px", height: "10px", borderTop: "10px solid rgb(241, 9, 191)", margin: "auto" }} />
            <div className="row">
                {[   
                    {
                        title: "EduCore ERP — School Management System",
                        image: require("../assets/images/EduCore.png"),
                        description: "<b>Currently In Development... </b> Full Stack Enterprise School ERP System built using Angular 19 Standalone Architecture, Angular Material, NgRx State Management, Node.js, Express.js, MongoDB, JWT Authentication, REST APIs, Role-Based Access Control, Lazy Loaded Modules, and Responsive Dashboard UI.",
                        visitLink: "#",
                        githubLink: "#"
                    },

                    {
                        title: "NeoBank Pro — Angular Banking Application",
                        image: require("../assets/images/NeoBank.png"),
                        description: "<b>Currently In Development... </b> Enterprise Banking Application built with Angular 19 Standalone Architecture, NgRx State Management, Angular Material, RxJS, Signals, REST APIs, JWT Authentication, Responsive Dashboard UI, and scalable financial application architecture.",
                        visitLink: "#",
                        githubLink: "#"
                    },
                    {
                        title: "Zomato Clone – Angular Food Delivery Web Application", 
                        image: require("../assets/images/home-ZomatoClone.png"),
                        description: "Zomato Clone is a responsive food delivery web application inspired by Zomato, developed using Angular 19, Angular Material, Bootstrap, SCSS, Firebase Hosting, JSON Server, and REST API integration. It includes restaurant listings, cart management, authentication pages, routing, lazy loading, and reusable Angular components.", 
                        visitLink: "https://zomato-clone-angular-76a35.web.app/",
                        githubLink: "https://github.com/CodeWithHasen/zomato-clone-angular"
                    },
                    {
                        title: "LinkedIn Clone – Professional Social Networking Web Application",
                        image: require("../assets/images/home-LinkedInClone.png"),
                        description: "LinkedIn Clone is a responsive professional networking web app inspired by LinkedIn, built using React.js, Redux Toolkit, React Router, Bootstrap, SCSS, and Firebase Hosting. It features authentication pages, responsive feeds, profile dropdowns, like/dislike functionality, and reusable React components.",
                        visitLink: "https://linkedin-clone-hasen.web.app/",
                        githubLink: "https://github.com/CodeWithHasen/linkedin-clone"
                    },
                    {
                        title: "Smart Shopping – A Modern E-Commerce Web App", 
                        image: require("../assets/images/shopper.png"),
                        description: "Smart Shopping is a responsive e-commerce web app inspired by Shopper.com, built using Angular, TypeScript, Bootstrap, jQuery, CSS3, and HTML5. It features data binding, structural directives, reusable components, and REST API integration for real-time product data, delivering a modern shopping experience across desktop and mobile devices.", 
                        visitLink: "https://shopper-angular-template.web.app/",
                        githubLink: "https://github.com/CodeWithHasen/angular-shopper-template"
                    },
                    {
                        title: "Netflix UI Clone Built with Angular", 
                        image: require("../assets/images/netflix_angular.png"),
                        description: "Netflix Clone is a responsive front-end web application inspired by Netflix, built using Angular, TypeScript, Bootstrap, CSS3, and HTML5. It features a modern UI layout, responsive design, reusable components, and structured Angular architecture for creating a real-world streaming platform interface.", 
                        visitLink: "https://ngflix2025.netlify.app/",
                        githubLink: "https://github.com/CodeWithHasen/netflix-clone-angular"
                    },
                    {
                        title: "Creative Developer Portfolio", 
                        image: require("../assets/images/MyPortfolio.png"),
                        description: "A responsive portfolio built with React, JavaScript, Bootstrap, showcasing projects, skills, experience, and contact details with smooth navigation.", 
                        visitLink: "https://hasenali-dev.netlify.app/",
                        githubLink: "https://github.com/CodeWithHasen/hasenali.dev"
                    },
                    {
                        title: "I-Shop: A Modern E-commerce Platform",
                        image: require("../assets/images/IShop.png"),
                        description: "A comprehensive MERN Stack single-page web application for seamless shopping experience. The application integrates a React frontend with a Node.js and Express backend, and utilizes MongoDB for data management.",
                        visitLink: "https://i-smartshop.web.app/",
                        githubLink: "https://github.com/CodeWithHasen/i-smartshop"
                    },
                    {
                        title: "StreamFlix: A Netflix-Inspired Streaming UI",
                        image: require("../assets/images/Netflix.png"),
                        description: "A modern, Netflix-style UI e-commerce frontend using React.js, Bootstrap, and jQuery, and Formik, it offers smooth navigation, responsive design, dynamic UI elements, and validated forms for a seamless user experience.",
                        visitLink: "https://netflixreactdemo.web.app/",
                        githubLink: "https://github.com/CodeWithHasen/netflixreactdemo"
                    },
                    {
                        title: "ShopSphere: Your Ultimate Online Store",
                        image: require("../assets/images/shoppingonline.png"),
                        description: "An interactive e-commerce store fetching product data dynamically using Fake Store API and provides users with a seamless shopping experience. Built using HTML, Bootstrap, and JavaScript, this project showcases essential features of an online store.",
                        visitLink: "https://shoppingonlinestore.netlify.app/",
                        githubLink: "https://github.com/CodeWithHasen/Shopping-Online"
                    },
                    
                ].map((project, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card project-card h-100">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title"  style={{ color: "red" }}>
                                    {project.title}
                                </h5>
                                <p className="card-text text-white" style={{ textAlign: "justify" }}>
                                    {project.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center align-items-center gap-3">
                            <button className="btn btn-primary w-50 py-2 px-4 btn-lg" onClick={() => handleVisit(project.visitLink)}>
                                Visit
                            </button>
                            <button className="btn btn-dark w-50 py-2 px-4 btn-lg" onClick={() => handleVisit(project.githubLink)}>
                                <span className="bi bi-github"></span>
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
            <Link to="/practice-projects" className="btn btn-outline-primary btn-lg">
                View Practice Projects
            </Link>
            </div>
        </div>
    );
}
