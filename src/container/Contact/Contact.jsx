import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
function Contact() {
  const [state, handleSubmit] = useForm('xgerqakg');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Adresse Mail :</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="phone">Téléphone :</label>
        <input id="phone" type="phone" name="phone" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Votre message :</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className="button-contact"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <span className="reseau">
        <a
          className="link-reseau"
          href="https://www.linkedin.com/in/guilhem-seyvet/"
          target="_blank"
        >
          <img className="logo-reseau" src={linkedin} alt={linkedin} />
        </a>
        <a
          className="link-reseau"
          href="https://github.com/guilhemcv"
          target="_blank"
        >
          <img className="logo-reseau1" src={github} alt={github} />
        </a>
      </span>
      <p className="phone">Téléphone : 06 66 15 46 39</p>
    </div>
  );
}

export default Contact;