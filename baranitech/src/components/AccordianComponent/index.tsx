// import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const AccordionComponent: React.FC = () => {
//   const [expanded, setExpanded] = useState<string | false>(false);

//   const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt arcu vel arcu tincidunt, eu feugiat enim accumsan.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//           <Typography>Accordion 3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default AccordionComponent;
import React, { useState } from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Info,
  SchoolOutlined,
  Image
} from '@mui/icons-material';
import { AccordianWrapper, ListItemButtonStyled } from './styles';
import { Briefcase, NotebookText } from 'lucide-react';

const AccordionComponent: React.FC = () => {
  const [openTrainings, setOpenTrainings] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);


  return (
    <AccordianWrapper>
      <List component="nav">
        <ListItemButtonStyled>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <ListItemIcon>
            <NotebookText />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItemButtonStyled>
        <ListItemButtonStyled onClick={() => setOpenTrainings(!openTrainings)}>
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText primary="Trainings" />
          {openTrainings ? <ExpandLess /> : <ExpandMore />}
        </ListItemButtonStyled>
        <Collapse in={openTrainings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Collapse in={openTrainings} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButtonStyled sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <SchoolOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Training 1" />
                </ListItemButtonStyled>
                <ListItemButtonStyled sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <SchoolOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Training 2" />
                </ListItemButtonStyled>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <ListItemButtonStyled onClick={() => setOpenJobs(!openJobs)}>
          <ListItemIcon>
            <Briefcase />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
          {openJobs ? <ExpandLess /> : <ExpandMore />}
        </ListItemButtonStyled>
        <Collapse in={openJobs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButtonStyled sx={{ pl: 6 }}>
              <ListItemIcon>
                <Briefcase />
              </ListItemIcon>
              <ListItemText primary="Job 1" />
            </ListItemButtonStyled>
            <ListItemButtonStyled sx={{ pl: 6 }}>
              <ListItemIcon>
                <Briefcase />
              </ListItemIcon>
              <ListItemText primary="Job 2" />
            </ListItemButtonStyled>
          </List>
        </Collapse>
        <ListItemButtonStyled>
          <ListItemIcon>
            <Image />
          </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItemButtonStyled>

      </List>
    </AccordianWrapper>
  );
};

export default AccordionComponent;
