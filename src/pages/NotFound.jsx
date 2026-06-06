import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
    return(
        <div className="container text-center py-5">
            <SEO
                title="Page Not Found | Hasen Ali Portfolio"
                description="This page does not exist. Return to portfolio homepage."
            />
            <h1 className="display-1 text-danger">404</h1>
            <h3>Page Not Found</h3>
            <p className="text-secondary">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary mt-3">
            Go Back Home</Link>
        </div>
    );
}