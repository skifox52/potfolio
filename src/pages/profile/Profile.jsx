import "./profile.css"
import { AiFillHtml5 } from "react-icons/ai"
import { TiCss3 } from "react-icons/ti"
import { SiJavascript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiMicrosoftsqlserver } from "react-icons/si"
import { motion } from "framer-motion"

function Profile() {
  const containerVariant = {
    hidden: {
      x: "-100vh",
    },
    visible: {
      x: 0,
      transition: {
        transition: 1.5,
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
      exit: {
        x: "100vh",
      },
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
  return (
    <motion.div
      className="profile-container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="education" variants={childVariant}>
        <h1>Education</h1>
        <ul>
          <li>
            Scientific Baccalaureate <p>2014</p>
          </li>
          <li>
            Third-year college student at Alger3, option: economics and business
            management <p>2018</p>
          </li>
          <li>
            FreeCodeCamp Certificate: Responsive Web Design <p>2021</p>
          </li>
          <li>
            FreeCodeCamp Certificate: JavaScript Algorithms and Data Structures
            <p>2021</p>
          </li>
          <li>
            Professional Master in Computer Science at IFG Sonatrach <p>2022</p>
          </li>
          <li>
            IBM Certificate: Developing Cloud Apps with Node.js and React{" "}
            <p>2022</p>
          </li>
          <li>
            HONG KONG university of science and technology Certificate:
            Serveur-side Development with NodeJS, Express and MongoDB{" "}
            <p>2022</p>
          </li>
        </ul>
      </motion.div>
      <motion.div className="skills" variants={childVariant}>
        <h1>Skills</h1>
        <ul>
          <li>
            <AiFillHtml5 /> <span>HTML5</span>
          </li>
          <li>
            <TiCss3 /> <span>CSS3</span>
          </li>
          <li>
            <SiJavascript /> <span>JavaScript</span>
          </li>
          <li>
            <FaNodeJs /> <span>NodeJS</span>
          </li>
          <li>
            <FaReact /> <span>React</span>
          </li>
          <li>
            <SiRedux /> <span>Redeux Toolkit</span>
          </li>
          <li>
            <SiExpress /> <span>ExpressJS</span>
          </li>
          <li>
            <SiMongodb /> <span>MongoDB</span>
          </li>
          <li>
            <GrMysql /> <span>MySql</span>
          </li>
          <li>
            <SiMicrosoftsqlserver /> <span>Microsoft SQL Server</span>
          </li>
          <li>
            <FaDatabase /> <span>Oracle PL/SQL</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Profile
