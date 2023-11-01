import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SubHeader from './SubHeader.jsx';

const Contact = () => {
  const form = useRef();
  const [confirmation, setConfirmation] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ducil2t', 'template_e59rnua', form.current, 'GOTW4mvgXSrQuZdbK')
      .then((result) => {
        console.log(result.text);
        setConfirmation('Your message has been sent. You will receive a response within 24 hours.');
        setFormData({
          user_name: '',
          user_email: '',
          user_subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setConfirmation('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <>
      <SubHeader />
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
                <i className="fa fa-home"></i>
                    <span>
                            <h5>Xyz Road, Abc Building</h5>
                            <p>Brampton, Ontario, Canada</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5><a href="tel:+17059305544">+1 0123456789</a></h5>
                            <p>Monday to Saturday 10 Am to 6 Pm</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <span>
                            <h5><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sidaksra8@gmail.com" target="_blank">info@xyz.com</a></h5>
                            <p>Email us your query</p>
                        </span>
                    </div>
                </div>
            
          <div className="contact-col">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                value={formData.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter email address"
                required
                value={formData.user_email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Enter your subject"
                required
                value={formData.user_subject}
                onChange={handleChange}
              />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="hero-btn red-btn" value="Send">
                Send Message
              </button>
            </form>
            {confirmation && <p>{confirmation}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
