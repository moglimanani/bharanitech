import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { flexDirection, styled } from "@mui/system";
import { useAllResources } from "../contexts/allResourcesContext";
import { ResourceType } from "../types/resources";
import { getLanguageType } from "../helper";
import { AboutUsTitleStyled, BackButtonStyled, LangStyled } from "./styles";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { LeftRightBlock } from "../components/LatestTraining/styles";

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "20px 0 30px",
  textAlign: "left",
  //padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  fontWeight: "bold",
  textTransform: "capitalize",
  padding: "5px 10px 5px",
}));

const StyledDiv = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1.2rem",
  padding: "5px 10px 5px",
  textTransform: 'capitalize',
  fontFamily: 'Comfortaa',
}));

const StyledParag = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.main,
  padding: "5px 10px 5px",
  textTransform: 'capitalize',
  fontSize: '.95rem',
}));


const StyledDivPage = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
    border: '1px solid #484848',
    color: theme.palette.appBarColour.main,
    backgroundImage: 'linear-gradient(to top, #a8edea 0%,rgb(216, 214, 221) 100%)'
  }
}));

const VideoFrame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "400px",
  border: 0,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "200px",
  },
}));

const StyledDivMain = styled("div")(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  flexDirection: 'column',
  position: 'relative',
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ResourceViewPage: React.FC = () => {
  const [resource, setResource] = useState<ResourceType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { allResources } = useAllResources();
  const navigate = useNavigate();
  const { rid } = useParams();

  useEffect(() => {
    if (!rid) return;
    const found = allResources.find(
      (resource: ResourceType) => +resource.id === +rid
    );

    if (found) {
      setResource(found);
      setLoading(false);
    } else {
      setError("Training not found");
    }
  }, [rid]);

  return (
    <div style={{ margin: "0 30px" }}>
      <AboutUsTitleStyled>Resources View</AboutUsTitleStyled>
      <Container>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={200}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : resource ? (
          <StyledPaper elevation={3}>
            <StyledDivMain>
             
                <LangStyled>
                  {getLanguageType[+resource.language].name}
                </LangStyled>
                <StyledTypography variant="h5" gutterBottom>
                  {resource.title}
                </StyledTypography>
                {/* <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop:'30px' }}> */}
                {resource.url && (
                  <VideoFrame 
                    src={resource.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                
                
                <StyledDiv>
                  {/* <span>Description:</span> */}
                  <div
      dangerouslySetInnerHTML={{ __html: resource.description }}
    />
                  {/* <span>{resource.description}</span> */}
                </StyledDiv>
                <StyledParag>
                <LeftRightBlock>
                  <div>
                  <span>Type: {resource.category.title}</span>
                  </div>
                  <div>
                  <span>Instructor:  Ezhumalai</span>
                  </div>
                  </LeftRightBlock>
                
                
                </StyledParag>
                {/* <StyledDiv>
                
                </StyledDiv> */}
                {/* <StyledDiv>
                  <span>Language:</span>
                  <span>{getLanguageType[+resource.language].name}</span>
                </StyledDiv> */}
              
               
              {/* </div> */}
            </StyledDivMain>
            <StyledDivPage>
              <BackButtonStyled color="primary" aria-label="back"  onClick={() =>
                  navigate(`${import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}`)
                }>
                <ReplyAllIcon />
              </BackButtonStyled>
            </StyledDivPage>
          </StyledPaper>
        ) : (
          <Typography>No resource found.</Typography>
        )}
      </Container>
    </div>
  );
};

export default ResourceViewPage;
