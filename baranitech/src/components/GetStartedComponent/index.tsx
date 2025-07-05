import React from "react";
import { BoxWrapperStyled, DivWrapperBoxStyled, DivWrapperInnerStyled, DivWrapperStyled, ImageWrapperStyled, WrapperDivStyled } from "./styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router';
// import { Button } from "@mui/material";
import {motion} from 'framer-motion';

const GetStartedToday: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div style={{overflow: "hidden"}}>
      <BoxWrapperStyled>
        <DivWrapperStyled>
          <h2>Get stated today</h2>
          <p>
            Furthermore, our courses are available internationally and are UK
            accredited.
          </p>
        
          <motion.button  whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL)}}>Enroll <KeyboardArrowRightIcon /></motion.button>
          
          {/* <Button onClick={() => {navigate(import.meta.env.VITE_ROUTE_TRAININGS_URL)}}>Enroll <KeyboardArrowRightIcon /></Button> */}
        </DivWrapperStyled>
        <ImageWrapperStyled>
          <img src="/radio.png" alt="tower" loading="lazy" height={160} />
        </ImageWrapperStyled>
      </BoxWrapperStyled>
      <DivWrapperBoxStyled>
        <h2>Why study with us?</h2>
        <p>We deliver 4 main categories of UK accredited qualifications:</p>
        <DivWrapperInnerStyled>
          <div>
            <div><img src="/globe.png" alt="" loading="lazy" /></div>
            <WrapperDivStyled>
              <div>UK Accredited</div>
              <p>Benchmarked to the Framework for Higher Education
                Qualifications (FHEQ)</p>
            </WrapperDivStyled>
          </div>
          <div>
            <div><img src="/mail.png" alt="" loading="lazy" /></div>
            <WrapperDivStyled>
              <div>No Exams, No Deadlines, No Classes</div>
              <p>Assessment is by written assignment</p>
            </WrapperDivStyled>
          </div>
        </DivWrapperInnerStyled>
        <DivWrapperInnerStyled>
          <div>
            <div className="image"><img src="/mail.png" alt="" loading="lazy" /></div>
            <WrapperDivStyled>
              <div>100% Online</div>
              <p>Study from Home Anywhere in the World</p>
            </WrapperDivStyled>
          </div>
          <div>
            <div><img src="/add.png" alt="" loading="lazy" /></div>
            <WrapperDivStyled>
              <div>Open Courses</div>
              <p>Anyone can enrol – we teach you everything you need to
                succeed</p>
            </WrapperDivStyled>
          </div>
        </DivWrapperInnerStyled>
      </DivWrapperBoxStyled>
    </div>
  );
};

export default GetStartedToday;
