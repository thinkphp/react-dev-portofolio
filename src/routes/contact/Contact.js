import { Footer } from "../../components";
import ContactForm from "./ContactForm";

const Contact = () => {
  document.title = "Contact | Sophia Martinez";
  return (
    <article className="contact-main">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <br></br>
      <p className="white-text p-tag">
        If you are interested to hire me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <ContactForm />
      <Footer />
    </article>
  );
};

export default Contact;
