import { FaOrcid } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { IMemberAdvisoryBoard } from '../types/memberAdvisoryBoard';

export const memberAdvisoryBoard: IMemberAdvisoryBoard[] = [
  {
    image: '/features/landing-page/team/advisory-board/fran-oliveira.jpg',
    name: 'Fran Oliveira',
    position: 'Computer Science',
    socials: [
      {
        url: 'https://www.linkedin.com/in/fran-oliveira-phd-a2b4844/',
        icon: <RiLinkedinFill />
      },
      {
        url: 'http://lattes.cnpq.br/0649930882307115',
        icon: <FaOrcid />
      }
    ]
  },
  {
    image: '/features/landing-page/team/advisory-board/odorico-monteiro.jpg',
    name: 'Odorico Monteiro',
    position: 'Digital Health and Public Health',
    socials: [
      {
        url: 'https://www.linkedin.com/in/odorico-monteiro-4a585b59/',
        icon: <RiLinkedinFill />
      },
      {
        url: 'http://lattes.cnpq.br/4138758876612437',
        icon: <FaOrcid />
      }
    ]
  }
];
