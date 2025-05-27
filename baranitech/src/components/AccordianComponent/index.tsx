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
import { useYouTubeCategories } from '../../contexts/youtubeCategoryContext';
import { useTrainingCategories } from '../../contexts/trainingCategoryContext';
import { useJobCategories } from '../../contexts/jobCategoryContext';

const AccordionComponent: React.FC = () => {
  const [openTrainings, setOpenTrainings] = useState(false);
  const [openTrainings0, setOpenTrainings0] = useState(false);
  const [openTrainings1, setOpenTrainings1] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openResources0, setOpenResources0] = useState(false);
  const [openResources1, setOpenResources1] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);
  const { categories } = useYouTubeCategories()
  const { trainingCategories } = useTrainingCategories()
  const { categories: jobCategories } = useJobCategories()


  return (
    <AccordianWrapper>
      <List component="nav">
        <ListItemButtonStyled>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButtonStyled>
        <ListItemButtonStyled onClick={() => { setOpenResources1(false); setOpenResources0(false); setOpenResources(!openResources) }}>
          <ListItemIcon>
            <NotebookText />
          </ListItemIcon>
          <ListItemText primary="Resources" />
          {openResources ? <ExpandLess /> : <ExpandMore />}
        </ListItemButtonStyled>

        <Collapse in={openResources} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButtonStyled onClick={() => { setOpenResources1(false); setOpenResources0(!openResources0) }}>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="TrainingsProtection Relay Testing" />
              {openResources0 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButtonStyled>
            <Collapse in={openResources0} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories?.filter(item => item.category === 0)?.map((catRealy) => (
                  <ListItemButtonStyled>
                    <ListItemIcon>
                      <SchoolOutlined />
                    </ListItemIcon>
                    <ListItemText primary={catRealy.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>

            <ListItemButtonStyled onClick={() => { setOpenResources0(false); setOpenResources1(!openResources1) }}>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="Equipment Testing" />
              {openResources1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButtonStyled>
            <Collapse in={openResources1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories?.filter(item => item.category === 1)?.map((equipTest) => (
                  <ListItemButtonStyled>
                    <ListItemIcon>
                      <SchoolOutlined />
                    </ListItemIcon>
                    <ListItemText primary={equipTest.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>

          </List>
        </Collapse>

        <ListItemButtonStyled onClick={() => { setOpenTrainings0(false); setOpenTrainings1(false); setOpenTrainings(!openTrainings) }}>
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText primary="Trainings" />
          {openTrainings ? <ExpandLess /> : <ExpandMore />}
        </ListItemButtonStyled>
        
        <Collapse in={openTrainings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButtonStyled onClick={() => { setOpenTrainings1(false); setOpenTrainings0(!openTrainings0) }}>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="Direct" />
              {openTrainings0 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButtonStyled>
            <Collapse in={openTrainings0} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {trainingCategories?.map((training) => (
                  <ListItemButtonStyled>
                    <ListItemIcon>
                      <SchoolOutlined />
                    </ListItemIcon>
                    <ListItemText primary={training.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>
            <ListItemButtonStyled onClick={() => { setOpenTrainings0(false); setOpenTrainings1(!openTrainings1) }}>
              <ListItemIcon>
                <SchoolOutlined />
              </ListItemIcon>
              <ListItemText primary="Online" />
              {openTrainings1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButtonStyled>
            <Collapse in={openTrainings1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {trainingCategories?.map((training) => (
                  <ListItemButtonStyled>
                    <ListItemIcon>
                      <SchoolOutlined />
                    </ListItemIcon>
                    <ListItemText primary={training.title} />
                  </ListItemButtonStyled>
                ))}
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
            {jobCategories?.map(item => (
              <ListItemButtonStyled key={item.id}>
                <ListItemIcon>
                  <Briefcase />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButtonStyled>
            ))}
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
