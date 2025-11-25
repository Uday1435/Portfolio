import React from 'react'


import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Watershed Management Research",
    description: "GIS-based analysis for Mausam River Basin, including LULC and remote sensing using QGIS.",
    tags: ["Civil Engineering", "QGIS", "Remote Sensing"],
    link: "/Project Report.pdf",
    linkText: "Project Report",
  },
  {
    title: "React Portfolio Website",
    description: "Personal portfolio for showcasing projects and resume built in ReactJS and Vite.",
    tags: ["ReactJS", "Vite"],
    link: "https://github.com/portfolio-repo",
    linkText: "GitHub Repo",
  },
  {
    title: "Army Public School, Kanpur Website",
    description: "Created a responsive website for Army Public School, Kanpur using technologies like ASP.Net, C#, SQL Server, CSS, jQuery and JavaScript, during internship period.",
    tags: ["ASP.Net", "C#", "SQL Server", "CSS", "jQuery", "JavaScript"],
  },
  {
    title: "Army Public School, Pune Website",
    description: "Created a responsive website for Army Public School, Pune using technologies like ReactJS, NodeJS, Mysql, CSS, and Javascript, during internship period",
    tags: ["ReactJS", "NodeJS", "Mysql", "CSS", "JavaScript"],
    
  },
  // Add your 2 other CS projects similarly!
];

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-green-100 text-center">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projectsData.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;