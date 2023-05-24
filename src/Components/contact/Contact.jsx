import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MdWhatsapp } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2h0o44d",
        "template_6r7sgev",
        form.current,
        "5lu-oQFTwpOqu2Hcd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>amit258012@gmail.com</h5>
            <a
              href="mailto:amit258012@gmail.com"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Amit Jahagirdar</h5>
            <a
              href="https://m.me/amit.jahagirdar.338"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+919663754361</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+919663754361"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
