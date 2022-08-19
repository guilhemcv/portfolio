import concept from '../assets/images/concept.png';
import solar from '../assets/images/solar-system.png'
import parc from '../assets/images/parc.png';
import popcorn from '../assets/images/popcorn.png';
import care from '../assets/images/care.png';

const portfoliopro = [
  {
    image: care,
    lien: 'https://care-sante.vercel.app/',
    description:
      "Sur Care, vous aurez accès à un suivi santé comprenant le suivi du poids, de votre consommation d'eau et de votre sommeil.",
    github: 'https://github.com/guilhemcv/tracking-sante',
    technos1: 'Next.js',
    technos2: 'Tailwind CSS',
    technos3: 'Chart.js',
    technos4: 'Supabase',
  },
  {
    image: popcorn,
    lien: 'https://popcorn-moment.netlify.app/',
    description:
      "Découverte de Vue.js à travers une app proposant de retrouver ses films et séries favoris, et d'en découvrir de nouveau.",
    github: 'https://github.com/guilhemcv/vuejs-movies',
    technos1: 'Vue.js',
    technos2: 'Tailwind CSS',
    technos3: 'The Movie DB API',
  },
  {
    image: parc,
    lien: 'https://trouve-ton-parc.vercel.app/',
    description:
      "Utilisation de l'API Google pour créer une carte interactive et collaborative des aires de jeux en France. Découverte de Supabase pour héberger les aires de jeux en ligne.",
    github: 'https://github.com/guilhemcv/trouve-ton-parc',
    technos1: 'React',
    technos2: 'Google API',
    technos3: 'Supabase',
    technos4: 'Tailwind CSS',
  },
  {
    image: solar,
    lien: 'https://solar-system-threejs-guilhemcv.vercel.app/',
    description:
      'Découverte de la librairie 3D Three.js et création de vues interactives des planètes du système solaire.',
    github: 'https://github.com/guilhemcv/Solar-System-ThreeJS',
    technos1: 'React',
    technos2: 'Three.js',
    technos3: 'CSS',
  },
  {
    image: concept,
    lien: 'https://pose-ton-concept.netlify.app/',
    description:
      'Proposer aux utilisateurs des idées et des concepts sur des thèmes variés. Possibilité de partager ses propres idées en ligne.',
    github: 'https://github.com/guilhemcv/pose-ton-concept',
    technos1: 'NextJS',
    technos2: 'Notion pour la BDD',
    technos3: 'Api Notion',
    technos4: "Tailwind CSS",
    technos5: "",
  },
];

export default portfoliopro;
