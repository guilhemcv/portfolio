import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import 'animate.css/animate.min.css';
import './About.css';
import Polygon from '../../components/Polygon/Polygon';
import Softskill from '../../data/softskill';
import javascript from '../../assets/images/javascript.png';
import react from '../../assets/images/react.png';
import html from '../../assets/images/html.png';
import git from '../../assets/images/git.png';
import mysql from '../../assets/images/mysql.png';
import guilhem from '../../assets/images/portrait.jpg';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import node from '../../assets/images/node.png';
import notion from '../../assets/images/notion.png';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import css from '../../assets/images/css.png';
import figma from '../../assets/images/figma.png';
import api from '../../assets/images/api.png';

export function About() {
  return (
    <div className="about">
      <div className="about-haut">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <p className="about-titre">A PROPOS</p>
          <p className="softskills">Soft Skills</p>
        </ScrollAnimation>
        <div className="skills">
          {Softskill.map((skill) => (
            <Polygon skill={skill} />
          ))}
        </div>
      </div>
      <div className="about-middle">
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
          <p className="softskills2">Skills</p>
        </ScrollAnimation>
        <div className="skill-percent">
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Javascript</p>
              <img width="50px" src={javascript} alt={javascript} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">React</p>
              <img width="50px" src={react} alt={react} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">NodeJS</p>
              <img width="50px" src={node} alt={node} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">ExpressJS</p>
              <img width="50px" src={node} alt={node} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">HTML</p>
              <img width="50px" src={html} alt={html} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">CSS</p>
              <img width="50px" src={css} alt={css} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">MySQL</p>
              <img width="50px" src={mysql} alt={mysql} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Rest Api</p>
              <img width="50px" src={api} alt={api} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Git</p>
              <img width="50px" src={git} alt={git} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Github</p>
              <img width="50px" src={github} alt={github} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Figma</p>
              <img width="50px" src={figma} alt={figma} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Notion</p>
              <img width="50px" src={notion} alt={notion} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="about-bas">
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
          <p className="softskills3">Un mot sur moi</p>
        </ScrollAnimation>
        <div className="photo-descri">
          <span className="parallax">
            <Parallax
              bgImage={guilhem}
              strength={200}
              style={{
                height: '100%',
                width: '100%',
                paddingTop: '60px',
              }}
            />
          </span>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="pres-reseau">
              <p className="presentation"><br/><br/>
                Après plusieurs années d'expérience dans le commerce et en
                agence de voyages, j'ai souhaité me reconvertir dans la création
                et la conception de sites internet. Une formation certifiante
                ainsi qu'une grande volonté m'ont permis d'acquérir rapidement
                toutes les connaissances techniques requises et de les appliquer
                dans ce cadre, sur des projets professionnels concluants. <br/> En complément de ma formation, un stage de 5 mois à partir de Février 2022 en tant qu'assistant formateur au sein de la Wild Code School va renforcer mes connaissances et développer ma pédagogie. <br/><br/>J'aimerais à présent mettre mes nouvelles compétences et toute
                mon expérience au service d'une équipe et je cherche donc un poste en tant que développeur web.
              </p>
              <span className="reseau">
                <a
                  className="link-reseau"
                  href="https://www.linkedin.com/in/guilhem-seyvet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="logo-reseau" src={linkedin} alt={linkedin} />
                </a>
                <a
                  className="link-reseau"
                  href="https://github.com/guilhemcv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="logo-reseau1" src={github} alt={github} />
                </a>
              </span>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}
