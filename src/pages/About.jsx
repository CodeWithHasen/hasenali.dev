import React from "react";
import SEO from "../components/SEO";

import aboutme from "../assets/images/aboutme.jpg";

import reactLogo from "../assets/images/1react.png";
import angularLogo from "../assets/images/2angular.png";
import vueLogo from "../assets/images/3vue.png";
import pythonLogo from "../assets/images/4python.png";
import nodeLogo from "../assets/images/5node.png";
import jsLogo from "../assets/images/6javascript.png";
import htmlLogo from "../assets/images/7html.png";
import expressLogo from "../assets/images/8express.png";
import githubLogo from "../assets/images/9github.png";
import cssLogo from "../assets/images/10css.png";
import javaLogo from "../assets/images/11java.png";
import mongoLogo from "../assets/images/12mongodb.png";
import nextLogo from "../assets/images/13next.png";
import typescript from "../assets/images/14typescript.png";
import bootstrapLogo from "../assets/images/15bootstrap.png";
import sassLogo from "../assets/images/16sass.png";
import tailwindLogo from "../assets/images/17tailwind.png";
import jQueryLogo from "../assets/images/18jQuery.png";

const images = [
    reactLogo, angularLogo, vueLogo, pythonLogo, nodeLogo, jsLogo,
    htmlLogo, expressLogo, githubLogo, cssLogo, javaLogo, mongoLogo,
    nextLogo, typescript, bootstrapLogo, sassLogo, tailwindLogo, jQueryLogo 
];

export default function About() {
    return (
        <div className="container-fluid mt-4 mx-4"> 
            <SEO 
                title="About Hasen Ali | Full Stack Developer Journey"  
                description="Learn about Hasen Ali, a Full Stack Developer skilled in MERN and MEAN stack development with real project experience."
                url="https://hasenali-dev.netlify.app/about"
            />
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-4 px-lg-4 px-2"> 
                    <div className="text-start">
                        <button className="rounded bg-dark text-white px-4 mt-4 py-2">
                            <h4>ABOUT ME</h4>
                        </button>
                    </div>
                    <div>
                        <h1 className="mt-2">Hello! My name is Hasen Ali</h1>
                        <p style={{ textAlign: "justify" }}>
                        I am a Full Stack Web Developer, specializing in MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks. I focus on developing scalable, high-performance web applications with seamless front-end and back-end integration. My expertise extends to structured development practices and software architecture, ensuring efficient, maintainable, and robust solutions.<br/>
                        Passionate about software development, I constantly explore new technologies and enhance my expertise. With a strong technical foundation and hands-on experience, I continuously expand my skill set through dedicated learning and real-world projects. I thrive on solving complex problems, optimizing performance, and adapting to new challenges.<br/>Beyond coding, I enjoy unwinding with a good book, playing a game of chess, and exploring new ideas. As a dedicated and driven professional, I am eager to make meaningful contributions to the IT industry and grow as a developer.</p>
                        <div>
                            <p className="fw-bold">Some of the Stacks I know:</p>
                        <div className="d-flex flex-wrap gap-4">
                            {images.slice(0, 9).map((src, index) => (
                            <img key={index} src={src} alt={`Stack ${index}`} className="rounded-circle" width="40" height="40" />
                            ))}
                        </div>
                        <hr />
                        <div className="d-flex flex-wrap gap-3">
                            {images.slice(9).map((src, index) => (
                            <img key={index + 9} src={src} alt={`Stack ${index + 7}`} className="rounded-circle" width="40" height="40" />
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center about-image"> 
                    <img src={aboutme} alt="aboutme" className="img-fluid about-photo" />
                </div>
            </div>        
        </div>
    );
}
