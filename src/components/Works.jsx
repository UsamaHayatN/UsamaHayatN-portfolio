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
import { client, urlFor } from "../sanityClient"; // Make sure sanityClient.js exists

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  isNew,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={isNew ? "hidden" : false}
      animate={isNew ? "show" : false}
      exit="hidden"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
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

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary" style={{ fontSize: "14px" }}>
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = '*[_type == "project"] | order(_createdAt desc)';
        const data = await client.fetch(query);

        // Map images to URL
        const mappedData = data.map((p) => ({
          ...p,
          image: urlFor(p.image).width(600).url(),
        }));

        setProjects(mappedData);
      } catch (error) {
        console.error("Failed to fetch projects from Sanity:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleToggle = () => setShowMore(!showMore);
  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Showcasing a variety of projects developed using modern technologies
          like MERN stack, React.js, Angular, Next.js, and TypeScript. These
          include task management systems, POS software, dynamic websites, and
          admin panels, tailored to solve real-world problems and enhance user
          experiences.
        </motion.p>
      </div>

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
