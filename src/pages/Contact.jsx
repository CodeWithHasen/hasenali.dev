import React from "react";
import SEO from "../components/SEO";

export default function Contact() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <SEO 
                title="Contact Hasen Ali | Full Stack Developer"  
                description="Get in touch with Hasen Ali for web development opportunities and collaborations."
                url="https://hasenali-dev.netlify.app/contact"
            />
            <div className="p-4 bg-dark text-white text-center rounded shadow-lg contact-wrapper">
                <h2 className="mb-3">Let's Connect</h2>
                <p className="text-light mb-4">Feel free to reach out for collaborations or any queries.</p>
                
                <div className="d-flex justify-content-center">
                    <form className="p-4 rounded shadow contact-form">
                        <div className="mb-3">
                            <input type="text" className="form-control bg-dark text-white border-0" 
                                placeholder="Your Name" required tabIndex="1"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-dark text-white border-0" 
                                placeholder="Your Mobile Number" required tabIndex="2"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control bg-dark text-white border-0" 
                                placeholder="Your Email" required tabIndex="3"/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control bg-dark text-white border-0"
                            rows="4" placeholder="Your Message" required tabIndex="4"/>
                        </div>
                        <button className="btn btn-primary w-100 fw-bold">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
