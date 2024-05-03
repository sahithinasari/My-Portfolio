import React,{ useRef }  from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
// import { common } from "@mui/material/colors";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdvdyui', 'template_jeuc899', form.current, 'uWdP7jMN6igs2ZqAj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>sahihtinasari6@gmail.com</h5>
            <a href="mailto:sahithinasari6@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"  />
            <h4>Messenger</h4>
            <h5>message</h5>
            <a href="https://www.messenger.com/">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>7989798083</h5>
            <a href="https://api.whatsapp.com/send?phone=+917569155284">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
