import "./home.css"
import { motion } from "framer-motion"
import Social from "../../components/social/Social"
import { BsCodeSlash } from "react-icons/bs"

function Home() {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChidren: 0.3,
        staggerChildren: 1,
      },
    },
    exit: {
      x: "100vw",
    },
  }
  const childVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 10,
      },
    },
  }
  const bscodeVariant = {
    hidden: {
      color: "#f0f0f0",
      rotateZ: "-20deg",
    },
    visible: {
      scale: 1.5,
      color: "#66fcf1",
      rotateZ: "20deg",
      transition: {
        delay: 3.5,
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  }
  return (
    <motion.div
      className="home-container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Social />
      <div className="welcome">
        <motion.h1 variants={childVariant}>Hi, my name is</motion.h1>
        <motion.h1 variants={childVariant}>SAYHI Abdelfattah</motion.h1>
        <motion.h3 variants={childVariant}>
          I'm a web developper, checkout my portfolio!
        </motion.h3>
      </div>
      <motion.div className="bsContainer" variants={childVariant}>
        <motion.div variants={bscodeVariant}>
          <BsCodeSlash className="bscodeslash" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home
