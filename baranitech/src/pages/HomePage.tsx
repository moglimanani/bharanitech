import {
  Grid
} from "@mui/material";
import CarouselComponent from "../components/CarouselComponent";
import HeaderComponent from "../components/HeaderComponent";
import {
  BodyPara1Styled,
  HeadingStyled,
  ListItemTextStyled,
  ListStyled,
  PageWrapperStyled,
  TwoColumnStyled,
} from "./styles";

export default function HomePage() {
  return (
    <Grid container>
      <Grid size={12}>
        <CarouselComponent />
      </Grid>
      <TwoColumnStyled size={12}>
        <Grid container>
          <Grid size={{ xs: 12, md: 10 }}>
            <PageWrapperStyled>
              <HeaderComponent title="Welcome to Barani Tech– Powering Your Future in Electrical Equipment & Protection Training" />
              <BodyPara1Styled>
                At Barani Tech, we’re committed to lighting the path for the
                next generation of electrical equipment and protection
                professionals. Whether you're just starting out, advancing your
                skills, or preparing for certification, we offer comprehensive,
                hands-on training in:{" "}
              </BodyPara1Styled>
              <BodyPara1Styled>
                Our expert-led courses cover everything from electrical
                fundamentals, Configuration and testing protocols to advanced
                IEC -61850 protocol, Bus logic, and Goose Communication. With
                flexible learning options—online, in-person, and hybrid—you can
                train in India – Chennai or Malaysia – JB , on your own
                schedule.
              </BodyPara1Styled>
              <ListStyled sx={{ listStyleType: "disc" }}>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  Relay testing
                </ListItemTextStyled>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  Relay software handling
                </ListItemTextStyled>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  In-depth knowledge of feeder, motor, transformer, line, and
                  generator protection
                </ListItemTextStyled>
              </ListStyled>
              <BodyPara1Styled>
                Our expert-led courses cover everything from electrical
                fundamentals and configuration/testing protocols to advanced
                topics such as IEC 61850 protocol, bus logic, and GOOSE
                communication. With flexible learning options—online, in-person,
                and hybrid—you can train on your schedule in Chennai, India or
                Johor Bahru (JB), Malaysia.
              </BodyPara1Styled>
              <BodyPara1Styled>
                Join a vibrant community of learners and professionals energized
                by knowledge and driven by excellence. Start your journey with
                us and ignite a brighter future in the world of electrical
                engineering.
              </BodyPara1Styled>
              <HeaderComponent title="Key Features" />

              <ListStyled sx={{ listStyleType: "none" }}>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  <HeadingStyled>Comprehensive Courses</HeadingStyled>
                  <ListStyled sx={{ listStyleType: "disc" }}>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Introduction to Power Systems – Overall protection
                      philosophy
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Feeder Protection – Overcurrent, earth fault, and earth
                      leakage protection philosophy; fault calculation and
                      grading studies
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Transformer Protection – Differential, over-flux, REF,
                      SEF, and inrush
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Motor Protection – Differential, motor startup, long
                      start, stall, locked rotor, thermal, unbalance, and
                      undercurrent
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Generator Protection – Differential, over-flux,
                      under-excitation, out-of-step, low forward, low reverse,
                      under-frequency, and over-frequency
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Line Protection – Differential, impedance, PSB, SOTF, and
                      scheme communication protection
                    </ListItemTextStyled>
                  </ListStyled>
                </ListItemTextStyled>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  <HeadingStyled>Skill-Based Learning Paths</HeadingStyled>
                  <ListStyled sx={{ listStyleType: "disc" }}>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Busbar Protection – Introduction to various busbar
                      protection types and testing methods
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Feeder Protection Testing – Step-by-step guide using
                      Omicron & Dobble software
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Motor Protection Testing – Step-by-step guide using
                      Omicron & Dobble software
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Transformer Protection Testing – Step-by-step guide using
                      Omicron & Dobble software
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Generator Protection Testing – Step-by-step guide using
                      Omicron & Dobble software
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Line Protection Testing – Step-by-step guide using Omicron
                      & Dobble software
                    </ListItemTextStyled>
                  </ListStyled>
                </ListItemTextStyled>
                <ListItemTextStyled sx={{ display: "list-item" }}>
                  <HeadingStyled>Advanced Skill-Based Learning</HeadingStyled>

                  <ListStyled sx={{ listStyleType: "disc" }}>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Feeder Relay Configuration – For ATS and MTS
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Motor, Transformer, and Generator Relay Configuration
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      Line Protection Relay Configuration
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      IEC 61850 Relay Configuration
                    </ListItemTextStyled>
                    <ListItemTextStyled sx={{ display: "list-item" }}>
                      GOOSE Communication – Between relays
                    </ListItemTextStyled>
                  </ListStyled>
                </ListItemTextStyled>
              </ListStyled>
            </PageWrapperStyled>
          </Grid>
        </Grid>
      </TwoColumnStyled>
    </Grid>
  );
}
