/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { client, urlFor } from "../sanityClient";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date || "No date"}
    iconStyle={{ background: experience.iconBg || "#333" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon ? (
          <img
            src={experience.icon}
            alt={experience.company_name || "company-logo"}
            className="w-[60px] h-[60px] object-contain"
          />
        ) : (
          <span className="text-white text-sm">No Logo</span>
        )}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title || "Untitled Role"}
      </h3>
      <p
        className="text-secondary font-semibold"
        style={{ margin: 0, fontSize: "16px" }}
      >
        {experience.company_name || "Unknown Company"}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {(experience.points || []).map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const query = '*[_type == "experience"] | order(_createdAt desc)';
        const data = await client.fetch(query);

        // Map images safely
        const mappedData = data.map((exp) => ({
          ...exp,
          icon: exp.icon ? urlFor(exp.icon).width(100).url() : null,
        }));

        setExperiences(mappedData);
      } catch (error) {
        console.error("Failed to fetch experiences from Sanity:", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard
                key={experience._id || index}
                experience={experience}
              />
            ))
          ) : (
            <p className="text-white text-center">No experiences found.</p>
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
