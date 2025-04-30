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
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Settings,
  Build,
  Info,
  ColorLens,
  Language
} from '@mui/icons-material';

const AccordionComponent: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(true);
  const [openPreferences, setOpenPreferences] = useState(false);

  return (
    <Box sx={{ width: 250, bgcolor: '#f4f4f4', p: 1 }}>
      <List component="nav">
        {/* Settings */}
        <ListItemButton onClick={() => setOpenSettings(!openSettings)}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* Settings -> Submenu */}
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Preferences (Expandable) */}
            <ListItemButton sx={{ pl: 4 }} onClick={() => setOpenPreferences(!openPreferences)}>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Preferences" />
              {openPreferences ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Preferences -> Submenu */}
            <Collapse in={openPreferences} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <ColorLens />
                  </ListItemIcon>
                  <ListItemText primary="Theme" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary="Language" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* About App */}
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About App" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default AccordionComponent;
