import { Box, Typography } from '@mui/material';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { Container } from 'shared/components/Container';
import Image from 'next/image';
import * as styles from './styles';

export const ServicesView = () => {
  return (
    <Container sxContent={{ py: 0, height: '100%', position: 'relative' }}>
      <Box sx={styles.container}>
        <Box sx={styles.start}>
          <Typography variant="h2" mb={2}>{`Our services`}</Typography>
          <Typography maxWidth={{ lg: 340, md: '100%' }}>
            {`We connect strategy, design and software engineering to help
              healthcare companies and other organizations to rethink their
              strategic paths, enhance their skills and drive superior results.
              Using an entrepreneurial mindset, we explore opportunities to
              propose new services and technologies in the digital health area
              to impact on the daily lives of users.`}
          </Typography>
        </Box>
        <Box sx={styles.grid}>
          <Box sx={styles.box}>
            <PersonSearchOutlinedIcon fontSize="large" color="secondary" />
            <Typography variant="h4">{`User Research`}</Typography>
            <Typography>
              {`Understanding the context through research methods such as:
              interviews; surveys;  ethnography. We also carry out co-creation
              processes such as: Design Thinking and Lean Inception.`}
            </Typography>
          </Box>
          <Box sx={styles.box}>
            <RocketLaunchOutlinedIcon fontSize="large" color="secondary" />
            <Typography variant="h4">{`Product Ideation`}</Typography>
            <Typography>
              {`We use creative methods such as: Moodboards and Brainstorming.
              We also develop interaction user flows as well as User Interface
              prototyping (low, medium and high fidelity) and style guides for
              digital products.`}
            </Typography>
          </Box>
          <Box sx={styles.box}>
            <AutoGraphOutlinedIcon fontSize="large" color="secondary" />
            <Typography variant="h4">{`Current Solution Diagnosis`}</Typography>
            <Typography>
              {`We review current solutions to suggest necessary changes.
              Based on different methods like: expert review, heuristics,
              usability tests, we are able to propose a backlog for all tasks
               according to product management.`}
            </Typography>
          </Box>
          <Box sx={styles.box}>
            <GroupsOutlinedIcon fontSize="large" color="secondary" />
            <Typography variant="h4">{`Strategic Consulting`}</Typography>
            <Typography>
              {`Across project management, we can guide several work stages,
              such as: problem definition, briefing creation, backlog
              management, task scheduling and product management. These
              stages involve joining several stakeholder teams. `}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.bg}>
          <Image
            src="/features/landing-page/services/group.svg"
            layout="fill"
          />
        </Box>
      </Box>
    </Container>
  );
};
