import React, { useState } from "react";
import "./contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";

function Contact() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(""); // success | error | ""

  // custom submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default reload

    try {
      const response = await fetch("https://formspree.io/f/mwpqjgep", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <h1 className="title">
        <span className="icon-envelope"></span> Contact me
      </h1>
      <p className="sub-title">
        Contact me for more information or any questions.
      </p>

      <div className="flex">
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              autoComplete="off"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button type="submit" className="submit">
            Submit
          </button>

          {/* Show success or error message */}
          {status === "success" && (
            <p className="success-message">Your message has been sent successfully ✅</p>
          )}
          {status === "error" && (
            <p className="error-message">There was an error sending your message ❌</p>
          )}
        </form>

        <div className="flex animation">
          <Lottie style={{ width: "600px" }} loop={true} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
