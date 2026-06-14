import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import SEO from "../components/SEO";

export default function NotFound() {
    return(
        <>
            <SEO
                title="404 | Page Not Found"
                description="The page you are looking for could not be found."
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
            <div className="container-fluid d-flex align-items-center justify-content-center"
            style={{ minHeight: "80vh" }}>
                <div className="text-center">
                    <FaExclamationTriangle className="text-warning mb-4" size={80} />

                    <h1 className="fw-bold text-danger" style={{ fontSize: "7rem", lineHeight: "1" }}>404</h1>
                    <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>
                    <p className="text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                        The page you are looking for might have been removed,
                        renamed, or is temporarily unavailable.
                    </p>

                    <div className="mt-4">
                        <Link to="/" className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center gap-2">
                            <FaHome />
                            <span>Back to Home</span>
                        </Link>
                    </div>

                    <div className="mt-5">
                        <small className="text-white-50">
                            Hasen Ali Portfolio • Full Stack Developer
                        </small>
                    </div>

                </div>
            </div>
            </motion.div>
        </>
    );
}