import "./projects.css"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si"
import { FiFramer } from "react-icons/fi"
import { motion } from "framer-motion"

function Projects() {
  //Variants
  const containerVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 1,
      },
      exit: {
        x: "100vw",
      },
    },
  }
  const childVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        stiffness: 100,
      },
    },
  }
  return (
    <motion.div
      className="projects"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Projects</h1>
      <div className="project-card-container">
        <motion.div className="project-card-image-one" variants={childVariant}>
          <div className="text">
            <h3>Payroll accountant</h3>
            <div className="techno">
              <span>
                NodeJS <FaNodeJs className="icon" />
              </span>
              <span>
                ReactJS <FaReact className="icon" />
              </span>
              <span>
                ReduxToolkit <SiRedux className="icon" />
              </span>
              <span>
                MongoDB <SiMongodb className="icon" />
              </span>
              <span>
                ExpressJS <SiExpress className="icon" />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div className="project-card-image-two" variants={childVariant}>
          <div className="text">
            <h3>Portfolio</h3>
            <div className="techno">
              <span>
                ReactJS <FaReact className="icon" />
              </span>
              <span>
                Framer-motion <FiFramer className="icon" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
