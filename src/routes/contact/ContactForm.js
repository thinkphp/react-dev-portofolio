

const ContactForm = () => {
  return (
    <section className="contact-us-form form-tag">
      <form className="contact-form">
        <section className="contact-form-item">
          <input
            className="fullname-input"
            type="text"
            placeholder="Full Name"
          />
          <br></br>
          <label className="fullname-error"></label>
        </section>
        <section className="contact-form-item">
          <input className="email-input" type="text" placeholder="Email" />
          <br></br>
          <label className="email-error"></label>
        </section>
        <section className="contact-form-item">
          <textarea className="textarea-input" placeholder="Message" />
          <br></br>
          <label className="textarea-error"></label>
        </section>
        <section className="contact-form-item">

          <button type="submit" className="form-btn">
            Send
          </button>
          <br></br>
          <label className="button-msg"></label>
        </section>
      </form>
    </section>
  );
}

export default ContactForm;
