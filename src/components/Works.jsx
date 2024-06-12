import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { chain, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link, isNew }) => {
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
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer"
            >
              <img
                src={chain}
                alt="chain"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary" style={{ fontSize: '14px' }}>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
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
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          maiores laboriosam dolorem omnis blanditiis, nisi recusandae ratione
          officiis totam molestiae amet possimus harum in exercitationem id commodi,
          provident vitae vel! Culpa exercitationem, earum recusandae officiis
          pernatur labore quasi facilis odit, odio accusantium sint atque.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              isNew={showMore && index >= 3} // Only new projects have animation
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-secondary py-3 px-8 text-white rounded-full hover:bg-secondary-dark transition duration-300"
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
