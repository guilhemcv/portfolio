import React from 'react';
import { useNavigate } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import './Accueil.css';

export function Accueil() {
  const cookieStyle = {
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
    fontFamily: 'roboto',
    background: '#424854',
  };
  const boutonStyle = {
    background: '#11ffee00',
    border: '1px solid white',
    color: 'white',
    borderRadius: '5px',
  };

  const declineBouton = {
    background: '#11ffee00',
    border: '1px solid white',
    color: 'white',
    borderRadius: '5px',
    float: 'right',
  };
  const redirect = useNavigate();

  return (
    <div>
      <div className="accueil">
        <p id="head1" className="header tracking-in-expand-fwd">
          Hello ! <br />
          <br /> Je m'appelle Guilhem SEYVET
        </p>
        <p id="head2" className="header tracking-in-expand-fwd2">
          Je suis développeur web full-stack
        </p>
        <button
          type="button"
          className="button-accueil text-focus-in"
          onClick={() => redirect('/about')}
        >
          Continuer
        </button>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
      <div className="cookies">
      <CookieConsent
        buttonClasses="butonCookie"
        declineButtonClasses="btnRefuse"
        containerClasses="cookie"
        overlayClasses="overlay"
        contentClasses="text-cookie"
        buttonText={"J'accepte"}
        disableStyles={true}
        enableDeclineButton
        buttonWrapperClasses="divbuton"
        declineButtonText={'Je refuse'}
      >
        🍪 Ce site utilise des cookies pour améliorer l'experience de
        l'utilisateur.
      </CookieConsent>
      </div>
    </div>
  );
}
