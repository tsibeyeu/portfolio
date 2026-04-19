import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import { themeContext } from "../component/Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tsion",
          from_email: form.email,
          to_email: "tsibeyeu@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus("SUCCESS");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        setLoading(false);
        setStatus("ERROR");
        console.error(error);
      });
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <header className={style.header}>
          <span className={style.tag}>04 // CONTACT</span>
          <h1 className={style.title}>
            Let's build something <span>together.</span>
          </h1>
          <p className={style.lead}>
            Have an idea? I'm currently open for new projects and
            collaborations.
          </p>
        </header>

        <div className={style.contactGrid}>
          <form ref={formRef} onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className={style.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className={style.inputGroup}>
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={style.submitBtn}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "SUCCESS" && (
              <p className={style.success}>Message sent successfully! 👋</p>
            )}
            {status === "ERROR" && (
              <p className={style.error}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className={style.sideInfo}>
            <div className={style.infoBlock}>
              <h4>Email</h4>
              <p>tsibeyeu@gmail.com</p>
            </div>
            <div className={style.infoBlock}>
              <h4>Location</h4>
              <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className={style.infoBlock}>
              <h4>Socials</h4>
              <div className={style.socialLinks}>
                <a href="#">Github</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
