import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, experiences, testimonials } from "../constents";
import { fadeIn, textVariant } from "../utils/motion";

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

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-green-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-black font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
          <p className="mt-1 text-teal-950 text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Landing = () => {
  return (
    <>
      <div className="mt-10 flex flex-col bg-violet-400 rounded-[20px]">
        <div className={`${styles.padding}`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Lorem Ipsum</p>
            <p className={styles.sectionHeadText}>Why Choose Us.</p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <div className="m-10 flex flex-col bg-violet-400 rounded-[20px]">
        <div className={`${styles.padding}`}>
          <motion.div variants={textVariant()}>
            {/* <h2 className="flex justify-center items-center font-semibold text-3xl mt-20"> */}
            <p className={styles.sectionSubText}>Lets see what to write here</p>
            <p className={styles.sectionHeadText}>Steps.</p>
            {/* </h2> */}
          </motion.div>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <p className={styles.sectionSubText}>What others say</p>
            <p className={styles.sectionHeadText}>Testimonials.</p>
          </motion.div>
        </div>
        <div
          className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 items-center justify-center`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
