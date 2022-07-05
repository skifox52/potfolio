import "./social.css"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { AiFillGithub } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io"
import { motion } from "framer-motion"

function Social() {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.8,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  }

  const linkVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 10,
      },
    },
  }
  return (
    <div className="social-container">
      <motion.ul variants={containerVariant} initial="hidden" animate="visible">
        <motion.li variants={linkVariant}>
          <a
            href="https://www.facebook.com/Skifox.say/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </motion.li>
        <motion.li variants={linkVariant}>
          <a
            href="https://www.instagram.com/skifg/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill />
          </a>
        </motion.li>
        <motion.li variants={linkVariant}>
          <a
            href="https://github.com/skifox52"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </motion.li>
        <motion.li variants={linkVariant}>
          <a href="/#">
            <IoLogoLinkedin />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default Social
