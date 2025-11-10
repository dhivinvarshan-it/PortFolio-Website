


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [envLoaded, setEnvLoaded] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    console.log("📦 Loaded ENV:", {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY,
    });

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      setEnvLoaded(true);
    } else {
      console.error("❌ EmailJS ENV not loaded correctly!");
      setEnvLoaded(false);
    }
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!envLoaded) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "❌ Email service configuration missing.",
      });
      return;
    }

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "Sending message...",
    });

    try {
     
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      console.log("✅ EmailJS Result:", result);

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: `✅ Thank you, ${formData.name}! Your message has been sent successfully.`,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "❌ Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
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
        className="contact-content"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="contact-content"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p className="text-center mb-6 text-gray-400">
          Have a question, project idea, or just want to say hi?  
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>

       
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeInUp}
        >
         
          <label htmlFor="name" className="font-medium">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleInputChange}
            whileFocus={{ scale: 1.02 }}
            className="p-2 rounded-md border border-gray-600 bg-transparent focus:outline-none"
          />

          {/* Email */}
          <label htmlFor="email" className="font-medium">Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleInputChange}
            whileFocus={{ scale: 1.02 }}
            className="p-2 rounded-md border border-gray-600 bg-transparent focus:outline-none"
          />

          {/* Message */}
          <label htmlFor="message" className="font-medium">Message</label>
          <motion.textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
            value={formData.message}
            onChange={handleInputChange}
            whileFocus={{ scale: 1.02 }}
            className="p-2 rounded-md border border-gray-600 bg-transparent focus:outline-none"
          ></motion.textarea>

          {/* Button */}
          <motion.button
            type="submit"
            className="submit"
            disabled={formStatus.submitting}
            whileTap={{ scale: 0.95 }}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

         
          {formStatus.message && (
            <p
              style={{
                color: formStatus.error ? "red" : "lightgreen",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {formStatus.message}
            </p>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
