import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PortfolioIndex from "../components/PortfolioIndex";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Education = lazy(() => import("../pages/Education"));
const Experience = lazy(() => import("../pages/Experience"));
const Projects = lazy(() => import("../pages/Projects"));
const PracticeProjects = lazy(() => import("../pages/PracticeProjects"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <PortfolioIndex>
      <Suspense
        fallback={
          <div className="text-center py-5">
            <div className="spinner-border text-light"></div>
            <p className="mt-3">Loading...</p>
          </div>
        }
      >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/practice-projects" element={<PracticeProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </PortfolioIndex>
  );
}