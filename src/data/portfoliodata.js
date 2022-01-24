import swiper from '../assets/images/swiper.png';
import hackathon from "../assets/images/hackathon.png";
import panam from "../assets/images/panam.png";
import hackaton2 from "../assets/images/hackathon2.jpg";

const portfoliodata = [
  {
    image: hackaton2,
    lien: "https://lesroismerlin-manomano.netlify.app/",
    description: "Deuxième Hackathon en collaboration avec Mano Mano. Objectif, réaliser une amélioration d'une partie du site ou une feature liée aux services du site. Nous avons développé une fonctionnalité de mise en relation de particulier, et une fonctionnalité pour proposer des tutoriels aux utilisateurs.",
  },
  {
    image: swiper,
    lien: "https://swiper-nantes.netlify.app/",
    description:
      "Dans le cadre de mon deuxième projet pour la Wild Code School, nous avons réalisé un site qui répertorie les musées, restaurants et salles de spectacles pour les sorties a Nantes. Ces activités sont répertoriées sous forme de 'swipe card' et en intégration sur une Google map.",
  },
  {
    image: hackathon,
    lien: "https://wildvibes.netlify.app/",
    description:
      "Hackathon réalisé en 36h sur le thème de la musique (projet vainqueur). En partant du postulat que les personnes sourdes ou malentendantes ne pouvaient pas écouter de musique, nous avons développé une application permettant de ressentir la musique par les vibrations du téléphone. Du fait du bridage des terminaux IOS, l'application n'est disponible que pour les appareils android.",
  },
  {
    image: panam,
    lien: "https://guilhemcv.github.io/panam-web/",
    description:
      "Premier projet, après 3 semaines de formation. Site statique en HTML, choix du thème libre.",
  }
];

export default portfoliodata;
