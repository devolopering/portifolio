"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "The website features a portfolio showcasing various design and development projects.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devolopering/portifolio.git",
    previewUrl: "https://portifolio-taupe-five-81.vercel.app/",
  },

  {
    id: 2,
    title: "E-commerce Application",
    description: "The website is an online platform specifically designed for purchasing headphones.",
    image: "/images/projects/products.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devolopering/exam-7-oy.git",
    previewUrl: "https://exam-7-oy-iuk6.vercel.app/",
  },

  {
    id: 3,
    title: "Js Admin panel",
    description: "Product management platform",
    image: "/images/projects/admin-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devolopering/exam_06.git",
    previewUrl: "https://exam-06.vercel.app/",
  },
  {
    id: 4,
    title: "React Crypto Currency Exchange",
    description: "Crypto Currency Exchange platform",
    image: "/images/projects/crypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devolopering/exam--8-oy.git",
    previewUrl: "https://exam-8-oy.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
             <ProjectTag
          onClick={handleTagChange}
          name="Mobil"
          isSelected={tag === "Mobil"}
        />
  
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;