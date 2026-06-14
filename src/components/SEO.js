import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Hasen Ali | Full Stack Developer (React | Angular | MERN | MEAN)",
  description =
    "Full Stack Developer specializing in React, Angular, JavaScript, TypeScript, Node.js, MongoDB, MERN Stack, MEAN Stack, UI Development, and Responsive Web Applications.",
  image = "https://hasenali-dev.netlify.app/images/metaimg.png",
  url,
}) {
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://hasenali-dev.netlify.app/";

  const finalUrl = url || currentUrl;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content="Hasen Ali, Full Stack Developer, React Developer, Angular Developer, Front End Developer, JavaScript Developer, TypeScript Developer, Node.js Developer, MongoDB Developer, MERN Stack Developer, MEAN Stack Developer, UI Developer, Web Developer" />
      <meta name="author" content="Hasen Ali" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#121212" />
      <link rel="canonical" href={finalUrl} />

      <meta name="application-name" content="Hasen Ali Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Hasen Ali Portfolio" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content="Hasen Ali Portfolio" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:creator" content="@Ali786Hasen" />
      <meta name="twitter:site" content="@Ali786Hasen" />

      {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",

              "name": "Hasen Ali",
              "jobTitle": "Full Stack Developer",

              "url": finalUrl,
              "image": image,

              "description": description,

              "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },

            "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer"
          },

          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Jain University"
          },

          "knowsAbout": [
            "React",
            "Angular",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "MERN Stack",
            "MEAN Stack",
            "Responsive Web Design",
            "REST APIs"
          ],

          "sameAs": [
            "https://github.com/CodeWithHasen",
            "https://www.linkedin.com/in/hasen-ali-5a672991/",
            "https://www.youtube.com/@CodeWithHasen",
            "https://x.com/Ali786Hasen",
            "https://www.instagram.com/ali786.hasen/"
          ]
        },

        {
          "@context": "https://schema.org",
          "@type": "WebSite",

          "name": "Hasen Ali Portfolio",
          "url": "https://hasenali-dev.netlify.app/",

          "author": {
            "@type": "Person",
            "name": "Hasen Ali"
          }
        }
      ])}
      </script>
    </Helmet>
  );
}