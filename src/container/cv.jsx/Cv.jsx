import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Cv.css';
import DataCv from '../../data/datacv';
import DataFormation from '../../data/DataFormation';

export function Cv() {
  return (
    <div className="cv">
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} >
          <p className="titre-cv2">EXPERIENCES PROFESSIONNELLES :</p>
      </ScrollAnimation>
      <div className="curriculum">
        {DataCv.map((data) => (
          <div>
          <div className="card">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img className="imgcard" src={data.logo} alt={data.logo} />
              <p className="cv-titre">{data.entreprise}</p>
              <span
                className="trait"
                style={{
                  backgroundColor: data.color,
                  border: `3px solid ${data.color}`,
                }}
              ></span>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <p className="cv-date">{data.date}</p>
              <p className="front-titre"> MISSIONS : </p>
              <li>{data.li1}</li>
              <li>{data.li2}</li>
              <li>{data.li3}</li>
            </ScrollAnimation>
          </div>
          <div className="separate"></div>
          </div>

        ))}
      </div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <p className="titre-cv2">FORMATIONS :</p>
      </ScrollAnimation>
      <div className="curriculum ">
        {DataFormation.map((data) => (
          <div>
          <div className="card2">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img className="imgcard" src={data.logo} alt={data.logo} />
              <p className="cv-titre">{data.ecole}</p>
              <span
                className="trait2"
                style={{
                  backgroundColor: data.color,
                  border: `3px solid ${data.color}`,
                }}
              ></span>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <p className="cv-date">{data.date}</p>
              <p className="cv-date">{data.formation}</p>
              <p className="front-titre"> Apprentissages : </p>
              <li>{data.li1}</li>
              <li>{data.li2}</li>
              <li>{data.li3}</li>
            </ScrollAnimation>
          </div>
          <div className="separate"></div>
          </div>
        ))}
      </div>
    </div>
  );
}