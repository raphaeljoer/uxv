import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as styles from './styles';
import { IHighlight } from '../../types/highlight';

type Props = IHighlight;

export const Highlight = ({ icon, title, details }: Props) => {
  return (
    <Accordion disableGutters sx={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box sx={styles.summary}>
          {icon}
          <Typography variant="h6" color="grey.400">
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={styles.details}>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
