import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_mgxnvdn",
      "template_9c0ekcc",
      form.current,
      "c9qOjhtYpK2BXmpRu"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>asuetta123@gmail.com</h5>
            <a href="mailto:asuetta123@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option__icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            
            <a href="https://www.linkedin.com/in/indah-riscobelle-mbah-9a7327238">
              Tape me on LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href="https://api.whatsapp.com/send?phone=+237652440164">
              Whatsapp me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="full name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
