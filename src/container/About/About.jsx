import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import { hardSkills } from '../../data/hardSkills';
import 'animate.css/animate.min.css';
import './About.css';
import '../Contact/Contact.css';
import Polygon from '../../components/Polygon/Polygon';
import Softskill from '../../data/softskill';
import portrait from '../../assets/images/portrait2.png'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';

export function About() {
  return (
    <div className="about">
      <div className="about-haut">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h1 className="about-titre">A PROPOS</h1>
          <h2 className="softskills">Soft Skills</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="skills">
            {Softskill.map((skill) => (
              <Polygon skill={skill} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
      <div className="about-middle">
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
          <p className="softskills2">Skills</p>
        </ScrollAnimation>
        <div className="skill-percent">
          {hardSkills.map((skill) => (
            <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
              <div className="skills-card">
                <p className="text-skill">{skill.nom}</p>
                <img width="50px" src={skill.image} alt={skill.nom} />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <div className="about-bas">
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
          <p className="softskills3">Un mot sur moi</p>
        </ScrollAnimation>
        <div className="photo-descri">
          <span className="parallax">
            <Parallax
              bgImage={portrait}
              strength={200}
              style={{
                height: '80%',
                width: '100%',
                paddingTop: '120px',
              }}
            />
          </span>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="pres-reseau">
              <p className="presentation">
                <br />
                <br />
                Apr??s plusieurs ann??es d'exp??rience dans le commerce et en
                agence de voyages, j'ai souhait?? me reconvertir dans la cr??ation
                et la conception de sites internet. Une formation certifiante
                ainsi qu'une grande volont?? m'ont permis d'acqu??rir rapidement
                toutes les connaissances techniques requises et de les appliquer
                dans ce cadre, sur des projets professionnels concluants. <br />{' '}
                En compl??ment de ma formation, un stage en tant qu'assistant formateur au sein de la Wild
                Code School a renforc?? mes connaissances et d??velopp?? ma
                p??dagogie. <br />
                <br />
                J'aimerais ?? pr??sent mettre mes nouvelles comp??tences et toute
                mon exp??rience au service d'une ??quipe et je cherche donc un
                poste en tant que d??veloppeur web.
              </p>
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
            </div>
          </ScrollAnimation>
        </div>
        <ScrollToTop />
        <div className="copyright">
          <p className="copy">
            Copyright ?? 2021 - 2022 / Guilhem Seyvet - D??veloppeur web{' '}
          </p>
          <a href="mentions.html" target="_blank">
            Mentions L??gales
          </a>
        </div>
      </div>
    </div>
  );
}
