


import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-batch"
          
          >
            <span className="hello"
             variants={staggerContainer}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            >👋 Hello I'm</span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
          >
            Dhivin Varshan K
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            A Passionate Java Full Stack Developer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            Welcome to my portfolio! I'm Dhivin Varshan K, a dedicated Java Full
            Stack Developer with a passion for crafting efficient and scalable
            web applications. Explore my projects and skills below!
          </motion.p>

          <motion.div className="ctabutton" variants={staggerContainer}>
            <motion.a
              href="#project"
              className="cta-primary"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* ===== SOCIAL LINKS ===== */}
          <motion.div
            className="social-links"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a href="https://github.com/dhivinvarshan-it">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/dhivin-dk-175499368/">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://x.com/i/flow/login?lang=en">
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a href="https://www.instagram.com/accounts/login/?hl=en">
              <i className="fab fa-instagram"></i>
            </motion.a>
          </motion.div>
        </motion.div>

       
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <img
            src="/image/profile.jpg"
            alt="Dhivin Varshan K"
            className="hero-image"
          />
          <motion.a
            href="https://drive.google.com/file/d/19YVC7_CFkTVemCCSGG0D60paiqLYWPty/view?usp=drivesdk"
            download
            className="download-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i> Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
