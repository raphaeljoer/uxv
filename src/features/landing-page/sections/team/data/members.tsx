import { FaOrcid } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { Member } from '../types/member';

export const members: Member[] = [
  {
    name: 'Claudia Pernencar',
    position: 'Co-Founder, UX/UI Consultant & Researcher',
    image: '/features/landing-page/team/claudia.jpg',
    imageOverlay: '/features/landing-page/team/claudia-overlay.svg',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/claudiapernencar/',
        icon: <RiLinkedinFill />
      },
      {
        name: 'Orcid',
        url: 'https://orcid.org/0000-0001-8981-2133',
        icon: <FaOrcid />
      }
    ]
  },
  {
    name: 'Inga Saboia',
    position: 'Co-Founder, UX/UI Consultant & Research',
    image: '/features/landing-page/team/inga.jpg',
    imageOverlay: '/features/landing-page/team/inga-overlay.svg',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ingasaboia/',
        icon: <RiLinkedinFill />
      },
      {
        name: 'Orcid',
        url: 'https://orcid.org/0000-0002-3635-2927',
        icon: <FaOrcid />
      }
    ]
  },
  {
    name: 'Deivith Oliveira',
    position: 'Co-Founder & Digital Product Manager',
    image: '/features/landing-page/team/deivith.jpg',
    imageOverlay: '/features/landing-page/team/deivith-overlay.svg',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/deivitholiveira/',
        icon: <RiLinkedinFill />
      },
      {
        name: 'Orcid',
        url: 'https://orcid.org/0000-0002-2255-0818',
        icon: <FaOrcid />
      }
    ]
  }
];
