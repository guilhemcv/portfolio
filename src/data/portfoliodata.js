import swiper from '../assets/images/swiper.png';
import hackathon from '../assets/images/hackathon.png';
import panam from '../assets/images/panam.png';
import hackaton2 from '../assets/images/hackathon2.jpg';
import vinoperso from '../assets/images/vinoperso.png';

const portfoliodata = [
  {
    image: vinoperso,
    lien: 'https://cave-a-vin.netlify.app/',
    description:
      "Dernier checkpoint de la formation. Objectif : réaliser un projet personnel full-stack avec thème libre en 48H.",
    github: 'https://github.com/guilhemcv/checkpoint4-front',
    duree: '48h', 
    personnes: 1,
    date: "Fev 2022",
    technos1: "ReactJS",
    technos2:  "Express / Node",
    technos3: "Mysql",
    technos4:  "CSS",
    technos5:  "Github",
  },
  {
    image: hackaton2,
    lien: 'https://lesroismerlin-manomano.netlify.app/',
    description:
      "Deuxième Hackathon en collaboration avec Mano Mano. Objectif, réaliser une amélioration d'une partie du site ou une feature liée aux services du site. Nous avons développé une fonctionnalité de mise en relation de particulier, et une fonctionnalité pour proposer des tutoriels aux utilisateurs.",
    github: 'https://github.com/guilhemcv/hackaton_2',
    duree: '48h', 
    personnes: 4,
    date: "Jan 2022",
    technos1: "ReactJS",
    technos2:  "Tailwind",
    technos3: "Bootstrap",
    technos4:  "CSS",
    technos5:  "Github",
  },
  {
    image: hackathon,
    lien: 'https://wildvibes.netlify.app/',
    description:
      "Hackathon réalisé en 36h sur le thème de la musique (projet vainqueur). En partant du postulat que les personnes sourdes ou malentendantes ne pouvaient pas écouter de musique, nous avons développé une application permettant de ressentir la musique par les vibrations du téléphone. Du fait du bridage des terminaux IOS, l'application n'est disponible que pour les appareils android.",
    github: 'https://github.com/guilhemcv/hackathon-novembre2021',
    date: 'Nov 2021',
    duree: '36h', 
    personnes: 4,
    technos1: "ReactJS",
    technos2:  "Framer Motion",
    technos3: "Bootstrap",
    technos4:  "CSS",
    technos5:  "Github",
  },
  {
    image: swiper,
    lien: 'https://swiper-nantes.netlify.app/',
    description:
      "Dans le cadre de mon deuxième projet pour la Wild Code School, nous avons réalisé un site qui répertorie les musées, restaurants et salles de spectacles pour les sorties a Nantes. Ces activités sont répertoriées sous forme de 'swipe card' et en intégration sur une Google map.",
    github: 'https://github.com/guilhemcv/swiper',
    date: 'Oct 2021',
    duree: '1 mois', 
    personnes: 4,
    technos1: "ReactJS",
    technos2:  "Rest API",
    technos3: "Google Cloud Console",
    technos4:  "CSS",
    technos5:  "Github",
  },
  {
    image: panam,
    lien: 'https://guilhemcv.github.io/panam-web/',
    description:
      'Premier projet, après 3 semaines de formation. Site statique en HTML, choix du thème libre.',
    github: 'https://github.com/guilhemcv/panam-web',
    date: 'Sept 2021',
    duree: '1 mois', 
    personnes: 4,
    technos1: "HTML",
    technos2:  "CSS",
    technos3:  "Github",
  },
];

export default portfoliodata;
