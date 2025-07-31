import '../css/contact.css';

function Contact() {
  return (
    <div className="contact-wrapper contact">
      <h2 className="contact-title">CONTACT</h2>
      <form className="contact-form">
        <div className="contact-row">
          <input name="name" placeholder="Name" className="contact-input" />
          <input name="email" placeholder="Email" className="contact-input" />
          <input name="subject" placeholder="Subject" className="contact-input" />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="contact-textarea"
        />
        <input className="form-btn" type="submit" value="Send Message" />
      </form>
    </div>
  );
}
export default Contact;
