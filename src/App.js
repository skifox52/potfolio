import "./index.css"
import Navbar from "./components/navbar/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/footer/Footer"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
