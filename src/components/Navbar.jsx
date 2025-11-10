import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.2 },
  },
};

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div className="logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        Portfolio
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {["home", "projects", "skills", "contact"].map((section) => (
          <motion.li
            key={section}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
