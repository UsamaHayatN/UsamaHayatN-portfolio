/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { chain, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { client, urlFor } from "../sanityClient"; // ✅ make sure sanityClient.js is correct

// ==========================
// Project Card Component
// ==========================
const ProjectCard = ({
  index,
  name,
  description,
  tags = [],
  image,
  source_code_link,
  live_link,
  isNew,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={isNew ? "hidden" : "show"}
      animate="show"
      exit="hidden"
      className="flex-1"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}

          {/* Buttons */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={chain}
                  alt="chain"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px] flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag, i) => (
              <p key={i} className={`text-[14px] ${tag.color || "text-white"}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// ==========================
// Works Section
// ==========================
const Works = () => {
  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt desc)`;
        const data = await client.fetch(query);

        // ✅ Map image safely
        const mappedData = data.map((p) => ({
          ...p,
          image: p.image ? urlFor(p.image).width(600).url() : null,
        }));

        setProjects(mappedData);
      } catch (error) {
        console.error("Failed to fetch projects from Sanity:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleToggle = () => setShowMore((prev) => !prev);
  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Intro Paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Showcasing a variety of projects developed using modern technologies
          like MERN stack, React.js, Angular, Next.js, and TypeScript. These
          include task management systems, POS software, dynamic websites, and
          admin panels, tailored to solve real-world problems and enhance user
          experiences.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project._id || index}
              index={index}
              {...project}
              isNew={showMore && index >= 3}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      {projects.length > 3 && (
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="bg-secondary py-3 px-8 text-white rounded-full hover:bg-secondary-dark transition duration-300"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
