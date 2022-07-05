import "./contact.css"
import { send } from "emailjs-com"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

function Contact() {
  //States
  const [input, setInput] = useState({
    form_name: "",
    form_subject: "",
    form_mail: "",
    message: "",
  })

  const [onload, setOnload] = useState(false)

  //onChange function
  const onChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  //onSubmit function
  const onSubmit = (e) => {
    e.preventDefault()
    setOnload(true)
    document.getElementById("my-form").reset()
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      input,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        toast.success("Email sent successfully!")
        setOnload(false)
      })
      .catch((err) => {
        toast.error("ERROR, please retry later!")
        console.log("ERROR", err)
        setOnload(false)
      })
  }

  //framer-motion variants

  const onHover = {
    onHover: {
      y: ["-2px", "2px"],
      textShadow: "0px 0px 8px #f0f0f0",
      boxShadow: "0px 0px 8px #f0f0f0",
      transition: {
        duration: 0.4,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  }
  const containerVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0",
      transition: {
        delay: 0.5,
        duration: 1.5,
        type: "spring",
        mass: 0.4,
        damping: 10,
      },
    },
    exit: {
      x: "-100vw",
    },
  }
  return (
    <motion.div
      className="contact-me"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Contact me </h1>
      <form onSubmit={onSubmit} id="my-form">
        <div className="form-control">
          <input
            type="text"
            name="form_name"
            id="form_name"
            placeholder="Name..."
            onChange={onChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="form_subject"
            id="form_subject"
            placeholder="Subject..."
            onChange={onChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            name="form_mail"
            id="form_mail"
            placeholder="E-mail..."
            onChange={onChange}
            required
          />
        </div>
        <div className="form-control">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Text..."
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div className="form-control">
          {onload ? (
            <button className="inprogress"></button>
          ) : (
            <motion.button
              type="submit"
              variants={onHover}
              whileHover="onHover"
            >
              Send
            </motion.button>
          )}
        </div>
      </form>
    </motion.div>
  )
}

export default Contact
