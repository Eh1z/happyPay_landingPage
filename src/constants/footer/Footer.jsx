import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../assets/';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

      emailjs.sendForm('portfolio_emails', 'template_xk', form.current, 'h')
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
    <section className='py-32 px-10 lg:px-28 flex flex-col justify-center items-center' id='footer'>
    <h2 className='text-3xl lg:text-5xl font-bold mb-5'>Get In Touch</h2>
    <p className='text-md lg:text-xl text-center'>We'd love to hear from you. If you have feedback or questions, you're always welcome to get in touch.</p>
    
      <div className="contact_cards">
      <div className="contact_card  hover:scale-105 transition-all duration-300 ease-in-out">
        <img src={images.instagram} alt="instagram" />
        <a href="https://www.instagram.com/happypay.ng/?igshid=NTc4MTIwNjQ2YQ%3D%3D" className='text-sm lg:text-xl text-center' target='_blank'>happypay.ng</a>
      </div>
      <div className="contact_card hover:scale-105 transition-all duration-300 ease-in-out">
        <img src={images.whatsapp} alt="whatsapp" />
        <a href="https://wa.link/v5g0de" className='text-sm lg:text-xl text-center' target='_blank' >+234 814 514 9201</a>
      </div>
    </div>
    
    
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={handleSubmit} className="contact_form flex items-center justify-center">
          <div className='flex justify-center items-center mt-5'>
            <input className='text-xl text-right' type="text" placeholder="Your Name" name="username"  />
          </div>
          <div className='flex justify-center items-center mt-5'>
            <input className='text-xl text-right' type="email" placeholder="Your Email" name="email"  />
          </div>
          <div>
            <textarea
              className='text-xl text-right'
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className='text-xl text-center contact_btn mt-10'>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className='text-5xl font-bold mb-5'>
            Thank you for getting in touch.
          </h3>
          <h3 className='text-5xl font-bold mb-5'><span>
            We'll be with you very soon!</span>
          </h3>
        </div>
      )}
    </section>
      

      
    </>
  );
}

export default Footer

