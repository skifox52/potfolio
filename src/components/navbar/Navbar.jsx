import "./navbar.css"
import { useState } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { MdDeveloperMode, MdPermContactCalendar } from "react-icons/md"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <div className="navbar">
      <div
        className={active ? "hamburger active" : "hamburger"}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={active ? "navbar-container active" : "navbar-container"}>
        <ul>
          <motion.li
            whileHover={{ scale: 1.2, originZ: 0, rotateZ: 8 }}
            transition={{
              type: "spring",
              stiffness: 500,
              duration: 1.5,
            }}
          >
            <Link to="/" title="Home page">
              <AiOutlineHome />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, originZ: 0, rotateZ: 8 }}
            transition={{
              type: "spring",
              stiffness: 500,
              duration: 1.5,
            }}
          >
            <Link to="/profile" title="Profile">
              <CgProfile />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, originZ: 0, rotateZ: 8 }}
            transition={{
              type: "spring",
              stiffness: 500,
              duration: 1.5,
            }}
          >
            <Link to="/projects" title="Projects">
              <MdDeveloperMode />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, originZ: 0, rotateZ: 8 }}
            transition={{
              type: "spring",
              stiffness: 500,
              duration: 1.5,
            }}
          >
            <Link to="/contact" title="Contact me">
              <MdPermContactCalendar />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
