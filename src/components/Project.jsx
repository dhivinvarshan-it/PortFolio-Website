

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mb-10"
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* ========== Project 1 ========== */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-img"
            style={{
              backgroundImage: "url('src/image/vehicle rental.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <div className="project-content">
            <h3>Vehicle Rental System</h3>
            <p>
              A full-stack application that allows users to rent vehicles online
              with features like booking management, authentication, and payment
              integration.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </motion.div>

        {/* ========== Project 2 ========== */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-img"
            style={{
              backgroundImage: "url('src/image/Screenshot 2025-10-07 201619.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <div className="project-content">
            <h3>Service Booking System</h3>
            <p>
              A modern SaaS platform with OpenAI API integration that generates
              AI-powered content in real-time and provides analytics insights.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>OpenAI</span>
              <span>TailwindCSS</span>
            </div>
          </div>
        </motion.div>

        {/* ========== Project 3 ========== */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-img"
            style={{
              backgroundImage: "url('src/image/indian.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <div className="project-content">
            <h3>Clone Indian Team Website</h3>
            <p>
              I have Done the Indian Cricket Team Website to study about HTML and Css ,Styling objects and learned to make the professional website of the ICT
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Project;
