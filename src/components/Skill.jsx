import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiC } from "react-icons/si";

const skills = [
  { icon: <FaJava color="#E76F00" />, name: "Java", level: 90 },
  { icon: <FaJs color="#F7DF1E" />, name: "JavaScript", level: 85 },
  { icon: <FaReact color="#61DAFB" />, name: "React", level: 80 },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot", level: 75 },
  { icon: <SiHibernate color="#59666C" />, name: "Hibernate", level: 70 },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL", level: 85 },
  { icon: <SiC color="#00599C" />, name: "C Language", level: 80 },
  { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap", level: 75 },
  { icon: <FaGithub color="#FFFFFF" />, name: "GitHub", level: 90 },
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML", level: 95 },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS", level: 90 },
];

const Skill = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">What I Do</h2>
      <p className="skills-subtitle">
        Here are some of the technologies and tools I work with:
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card fade-up"
            style={{ animationDelay: `${index * 0.18}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill animate-progress"
                style={{ "--finalWidth": `${skill.level}%` }}
              ></div>
            </div>

            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
