import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fslex2m", "template_41qi8i7", form.current, {
        publicKey: "CRmY_sBo7SLpZYE6_00Kz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email send!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="your_name"
            className="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="your_email"
            className="email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Enter your message"
          ></textarea>
          <button value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
