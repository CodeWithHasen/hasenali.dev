import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import SEO from "../components/SEO";

const practiceProjects = [
    
    {
        title: "Bright Future Public School",
        image: require("../assets/images/bfps-home.png"),
        description: "Developed a fully responsive school website using HTML5, CSS3, Bootstrap 5, JavaScript and jQuery. Implemented admission enquiry form validation and dynamic UI interactions. Created SEO-friendly pages including Home, About, Faculty, Courses, Gallery, Events and Contact. Integrated Google Maps, social media links and custom 404 error handling.",
        link: "https://bright-future-public-school.netlify.app/",
    },
    {
        title: "AmazinCart: An Amazon-Like Shopping Experience",
        image: require("../assets/images/AmazonClone.png"),
        description: "A front-end Amazon-inspired e-commerce website using HTML and CSS for UI recreation and layout of the Amazon homepage, including features like product listings, search bar functionality, and responsive design. This project demonstrates my proficiency in front-end development and attention to detail in creating a visually appealing and user-friendly web application.",
        link: "https://amazonclone-hasen.netlify.app/",
    },
    {
        title: "Traffic Control: A Smart Signal Simulation",
        image: require("../assets/images/TrafficLight.png"),
        description: "A traffic light system simulation using JavaScript, HTML, and CSS. Three lights—red, yellow, and green—are activated one by one in a 3-second cycle. After red, the yellow light turns on, followed by green. When one light is active, the other two remain off, simulating a realistic traffic light sequence.",
        link: "https://trafficlightwithtimer.netlify.app/",
    },
    { 
        title: "Hasen IT Technologies – Empowering Your Future in Tech",
        image: require("../assets/images/hasenittechnologies.png"),
        description: "Hasen IT Technologies is a premier training institute dedicated to equipping learners with cutting-edge skills in web development, programming, and software technologies.",
        link: "https://hasenitechnologies.netlify.app/"
    },
    { 
        title: "Instant & Accurate Currency Converter",
        image: require("../assets/images/currencyconverter.png"),
        description: "Easily convert currencies with real-time exchange rates. Our currency converter provides precise and up-to-date rates, ensuring seamless financial transactions for travel, business, and investments.",
        link: "https://currencyrateconverter.netlify.app/"
    },
    {
        title: "Ultimate RPS Challenge: Test Your Luck & Strategy",
        image: require("../assets/images/rockpaperscissors.png"),
        description: "A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. It captures user choices via event listeners and generates random computer choices with Math.random(). Conditional logic determines the winner or a draw, updates scores, and displays messages, making the game interactive and engaging.",
        link: "https://gamers-play-rockpaperscissors.netlify.app/",
    },
    {
        title: "Tic-Tac-Toe Master: Play with AI & Friends",
        image: require("../assets/images/tictactoe.png"),
        description: "A simple Tic Tac Toe game built using JavaScript, HTML, and CSS. It features simple logic, uses arrays, booleans, DOM manipulation, and event listeners. The game includes enable/disable functionality and logic to determine a winner or a draw, displaying appropriate messages for each outcome.",
        link: "https://gamers-play-tic-tac-toe.netlify.app/",
    },
    { 
        title: "Online Job Application Form",
        image: require("../assets/images/jobapplicationform.png"),
        description: "This is a simple Online Job Application Form designed using HTML and CSS for UI design and practice purposes. The form includes sections for Personal Information, Education Details, Work Experience, and Other Job Preferences, providing a structured layout for users to input their details.",
        link: "https://onlinejobapplications.netlify.app/"
    },
    { 
        title: "The Great India - A Tribute to India's Legacy",
        image: require("../assets/images/thegreatIndia.png"),
        description: "The Great India is a tribute to India's rich history, culture, and progress through images, videos, and inspiring stories.",
        link: "https://indiathegreat.netlify.app/"
    },
];

export default function PracticeProjects() 
{
    return (
        <div className="container">
            <h2 className="text-center mt-4">Practice Projects</h2>
            
            <hr className="mt-2 mb-4 border-3" style={{ width: "200px", borderTop: "5px solid #f109bf", margin: "auto" }} />
            
            <div className="row">
                {practiceProjects.map((project, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card project-card h-100">
                            <img src={project.image} alt={project.title} className="card-img-top rounded" style={{ height: "200px", objectFit: "cover" }} />
                            
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "red" }}>
                                    {project.title}
                                </h5>
                                <p className="p-2 text-white" style={{ textAlign: "justify" }}>
                                    {project.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center align-items-center">
                            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-outline-success btn-lg">
                View Main Projects
            </Link>
            </div>
        </div>
    );
}
