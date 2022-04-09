import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import { IHighlight } from '../types/highlight';

export const highlights: IHighlight[] = [
  {
    icon: <DoneAllOutlinedIcon color="primary" />,
    title: 'Prioritize efficiency',
    details:
      'We prioritize efficiency and productivity, because we believe that there is always a better way to do the right thing and do the thing right.'
  },
  {
    icon: <MapsHomeWorkOutlinedIcon color="primary" />,
    title: 'Officeless',
    details:
      'We are officeless. Our remote process embraces all the great learning of big and small companies to ensure an amazing virtual environment for work and play as a team.'
  },
  {
    icon: <SchoolOutlinedIcon color="primary" />,
    title: 'Lifelong learners',
    details:
      'We are lifelong learners. In order to adapt and grow as our surroundings change (and it is always changing), we are both students and teachers of each other.'
  },
  {
    icon: <GppGoodOutlinedIcon color="primary" />,
    title: 'Transparency',
    details:
      'We believe in transparency, empathetic communication, respect and free speech liberty.'
  },
  {
    icon: <HealthAndSafetyOutlinedIcon color="primary" />,
    title: 'Healtholics',
    details:
      'We are healtholics. We believe that work-life balance is not negotiable. Therefore, we are highly committed to embrace a process workflow that ensures doing more in less time. '
  }
];
