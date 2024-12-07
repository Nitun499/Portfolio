import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { TbBrandLinkedin } from 'react-icons/tb';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rathorenitun499@gmail.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Send a message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            {/* <h5>rathorenitun499@gmail.com</h5> */}
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <TbBrandLinkedin className="contact__option-icon" />
            <a href="https://www.linkedin.com/in/nitunsingh/">
              Connect on Linkedin
            </a>
          </article>
        </div>
        {/* <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
