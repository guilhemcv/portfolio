import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import thanks from '../../assets/images/thank-you.png';
function Contact() {
  const [state, handleSubmit] = useForm('xgerqakg');
  if (state.succeeded) {
    return (
      <div className="thankyou">
        <p className="thanks">Merci pour votre message !</p>
        <img src={thanks} alt={thanks} width="100px" />
      </div>
    );
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input id="nom" type="nom" name="nom" />
        <label htmlFor="prenom">Prénom : </label>
        <input id="prenom" type="prenom" name="prenom" />
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
          Envoyer
        </button>
      </form>
      <span className="reseau">
        <a
          className="link-reseau"
          href="https://www.linkedin.com/in/guilhem-seyvet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-reseau" src={linkedin} alt={linkedin} />
        </a>
        <a
          className="link-reseau"
          href="https://github.com/guilhemcv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-reseau1" src={github} alt={github} />
        </a>
      </span>
      <p className="phone">Téléphone : 06 10 14 42 33</p>
      <div className="copyright">
        <p className="copy">Copyright © 2021 - 2022 / Guilhem Seyvet - Développeur web </p>
        <a href="mentions.html" target="_blank">
          Mentions Légales
        </a>
      </div>
    </div>
  );
}

export default Contact;
