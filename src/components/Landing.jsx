import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constents";
import { fadeIn, textVariant } from "../utils/motion";

import { experiences } from "../constents";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#fff", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #000" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-[24px] font-semibold">
        {experience.title}
      </h3>
      <p className="text-black text-[16px] font-light" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-slate-800 text-[14px] pl-1 tracking-wider "
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] py-5 px-8 min-h[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-black text-[20px] font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Landing = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="flex justify-center items-center font-semibold text-3xl">
          Why choose Us?
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <h2 className="flex justify-center items-center font-semibold text-3xl mt-20">
          What After Contacting Us?
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col bg-violet-400">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Landing;
