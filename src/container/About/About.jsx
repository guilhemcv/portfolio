import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import 'animate.css/animate.min.css';
import './About.css';
import Polygon from '../../components/Polygon/Polygon';
import Softskill from '../../data/softskill';
import { CircleProgress } from 'react-gradient-progress';
import javascript from '../../assets/images/javascript.png';
import react from '../../assets/images/react.png';
import html from '../../assets/images/html.png';
import git from '../../assets/images/git.png';
import mysql from '../../assets/images/mysql.png';
import guilhem from '../../assets/images/portrait.jpg';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';

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
              <span>
                <CircleProgress
                  percentage={75}
                  strokeWidth={8}
                  fontColor="white"
                  fontFamily="roboto"
                  fontSize="15px"
                  primaryColor={['#F3F9A7', '#CAC531']}
                  width="100"
                />
              </span>
              <img width="50px" src={javascript} alt={javascript} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">React</p>
              <span>
                <CircleProgress
                  percentage={85}
                  strokeWidth={8}
                  fontColor="white"
                  fontFamily="roboto"
                  fontSize="15px"
                  primaryColor={['#56CCF2', '#2F80ED']}
                  width="100"
                />
              </span>
              <img width="50px" src={react} alt={react} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">HTML / CSS</p>
              <span>
                <CircleProgress
                  percentage={95}
                  strokeWidth={8}
                  fontColor="white"
                  fontFamily="roboto"
                  fontSize="15px"
                  primaryColor={['#f7b733', '#fc4a1a']}
                  width="100"
                />
              </span>
              <img width="50px" src={html} alt={html} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Git / Github</p>
              <span>
                <CircleProgress
                  percentage={90}
                  strokeWidth={8}
                  fontColor="white"
                  fontFamily="roboto"
                  fontSize="15px"
                  primaryColor={['#FF416C', '#FF4B2B']}
                  width="100"
                />
              </span>
              <img width="50px" src={git} alt={git} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="skills-card">
              <p className="text-skill">Express / MySQL</p>
              <span>
                <CircleProgress
                  percentage={60}
                  strokeWidth={8}
                  fontColor="white"
                  fontFamily="roboto"
                  fontSize="15px"
                  primaryColor={['#D3CCE3', '#E9E4F0']}
                  width="100"
                />
              </span>
              <img width="50px" src={mysql} alt={mysql} />
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
              height: "100%",
              width: "100%",
              paddingTop: '60px',
            }}
          />
          </span>
          <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
            <div className="pres-reseau">
              <p className="presentation">
                Après plusieurs années d'expérience dans le commerce et en
                agence de voyages, j'ai souhaité me reconvertir dans la création
                et la conception de sites internet. Une formation certifiante
                ainsi qu'une grande volonté m'ont permis d'acquérir rapidement
                toutes les connaissances techniques requises et de les appliquer
                dans ce cadre, sur des projets professionnels concluants. Je
                recherche à présent à mettre mes nouvelles compétences et toute
                mon expérience au service d'une équipe.
              </p>
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
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
