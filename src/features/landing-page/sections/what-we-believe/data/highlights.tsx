import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import { IHighlight } from '../types/highlight';

export const highlights: IHighlight[] = [
  {
    icon: <AccessAlarmIcon color="primary" />,
    title: 'Evolution',
    details:
      'We are always looking for continuous changes in our projects and ourselves to reach the best version.'
  },
  {
    icon: <WorkOutlineOutlinedIcon color="primary" />,
    title: 'Commitment',
    details:
      'We guide all our actions with purpose and rigour to achieve excellent results.'
  },
  {
    icon: <GroupsOutlinedIcon color="primary" />,
    title: 'Flexibility',
    details:
      'We recognize that the world is constantly changing. As a result, our activities, plans and behaviors are adaptable to enable different possibilities.'
  },
  {
    icon: <FingerprintOutlinedIcon color="primary" />,
    title: 'The whole is greater than the sum of the parts',
    details: ' We are singular individuals, who are stronger together.'
  },
  {
    icon: <FavoriteBorderOutlinedIcon color="primary" />,
    title: 'Transparency',
    details:
      'We believe in direct communication, respect and freedom of speech.'
  }
];
