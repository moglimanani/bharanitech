import React, { forwardRef, useState } from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Info,
  Image
} from '@mui/icons-material';
import { AccordianWrapper, ListItemButtonStyled } from './styles';
import { useYouTubeCategories } from '../../contexts/youtubeCategoryContext';
import { useTrainingCategories } from '../../contexts/trainingCategoryContext';
import { useJobCategories } from '../../contexts/jobCategoryContext';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { NavLink, NavLinkProps, useNavigate } from 'react-router';


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
  const navigate = useNavigate()

  const NavLinkAdapted = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
    <NavLink ref={ref} {...props} />
  ));

  NavLinkAdapted.displayName = "NavLinkAdapted";


  return (
    <AccordianWrapper>
      <List component="nav">
        <ListItemButtonStyled component={NavLinkAdapted} to={import.meta.env.VITE_ROUTE_ABOUTUS_URL} end>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButtonStyled>
        <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL); }}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
          <IconButton
            aria-label="expand"
            onClick={(e) => {
              e.stopPropagation();
              setOpenResources1(false); setOpenResources0(false); setOpenResources(!openResources)
            }}>
            {openResources ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemButtonStyled>

        <Collapse in={openResources} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL); }}>
              <ListItemText primary="TrainingsProtection Relay Testing" />
              <div>
                <IconButton
                  aria-label="expand"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenResources1(false); setOpenResources0(!openResources0)
                  }}>
                  {openResources0 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </div>
            </ListItemButtonStyled>
            <Collapse in={openResources0} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories?.filter(item => item.category === 0)?.map((catRealy) => (
                  <ListItemButtonStyled component={NavLinkAdapted} to={import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}>
                    <ListItemText primary={catRealy.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>

            <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL); }}>
              <ListItemText primary="Equipment Testing" />
              <IconButton
                aria-label="expand"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenResources0(false); setOpenResources1(!openResources1)
                }}>
                {openResources1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButtonStyled>
            <Collapse in={openResources1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories?.filter(item => item.category === 1)?.map((equipTest) => (
                  <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL); }}>
                    {/* <ListItemIcon>
                      <SchoolOutlined />
                    </ListItemIcon> */}
                    <ListItemText primary={equipTest.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>

          </List>
        </Collapse>

        <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL); }}>
          <ListItemIcon>
            <CastForEducationIcon />
          </ListItemIcon>
          <ListItemText primary="Trainings" />
          <IconButton
            aria-label="expand"
            onClick={(e) => {
              e.stopPropagation();
              setOpenTrainings0(false); setOpenTrainings1(false); setOpenTrainings(!openTrainings)
            }}>
            {openTrainings ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemButtonStyled>

        <Collapse in={openTrainings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL); }}>
              <ListItemText primary="Direct" />
              <IconButton
                aria-label="expand"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenTrainings1(false); setOpenTrainings0(!openTrainings0)
                }}>
                {openTrainings0 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButtonStyled>
            <Collapse in={openTrainings0} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {trainingCategories?.map((training) => (
                  <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL); }} >
                    <ListItemText primary={training.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>
            <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL); }}>
              <ListItemText primary="Online" />
              <IconButton
                aria-label="expand"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenTrainings0(false); setOpenTrainings1(!openTrainings1)
                }}>
                {openTrainings1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemButtonStyled>
            <Collapse in={openTrainings1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {trainingCategories?.map((training) => (
                  <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL); }} >
                    <ListItemText primary={training.title} />
                  </ListItemButtonStyled>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>


        <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_JOBS_URL); }}>
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Careers" />
          <IconButton
            aria-label="expand"
            onClick={(e) => {
              e.stopPropagation();
              setOpenJobs(!openJobs)
            }}>
            {openJobs ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemButtonStyled>
        <Collapse in={openJobs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {jobCategories?.map(item => (
              <ListItemButtonStyled component={NavLinkAdapted} to={import.meta.env.VITE_ROUTE_JOBS_URL} key={`jobcat-${item.id}`}>
                <ListItemText primary={item.title} />
              </ListItemButtonStyled>
            ))}
          </List>
        </Collapse>
        <ListItemButtonStyled onClick={() => { navigate(import.meta.env.VITE_ROUTE_GALLERY_URL); }}>
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
