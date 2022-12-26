import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from '../../assets/icons/email.png';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oq3wpkc', 'template_b4t63np', form.current, 'GtlsS9af2YBeT-UyN');
        e.target.reset();
        alert("Message Successfully Sent")
    };

    return (
        <div id='contact' className='contact'>
            <h2 className='contact__title'>Contact</h2>
            <div className='contact__tablet-aligner'>
                <div className='contact__email'>
                    <img src={email} alt='Email' />
                    <p className='contact__text'>dkrj45@gmail.com</p>
                    <a className='contact__link' href='mailto:dkrj45@gmail.com'>Send Email</a>
                </div>
                <div className='contact__or-container'>
                    <p className='contact__or'>or</p>
                </div>
                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input className='contact__form-input' type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Email</label>
                        <input className='contact__form-input' type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className='contact__form-div contact__form-area' >
                        <label className='contact__form-tag'>Message</label>
                        <textarea className='contact__form-input' name="message" placeholder="Please write your message here." color='30' rows='10'></textarea>
                    </div>
                    <button className='contact__form-submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;