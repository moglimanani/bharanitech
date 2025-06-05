import { AboutUsDivStyled, AboutUsDivWrapperStyled, AboutUsPara1Styled, AboutUsStyled, AboutUsTitleStyled, ImageClientStyled } from "./styles";

export default function AboutUsPage() {
  return (
    <AboutUsStyled>
      <AboutUsTitleStyled>
        AboutUsPage
      </AboutUsTitleStyled>
      <AboutUsDivWrapperStyled>
        <AboutUsPara1Styled>
          Barani tech YouTube Channel is widely considered as one of the best and top training
          providers in India, Singapore, Indonesia, Malaysia and Most of the world. <br /><br />

          Barani tech YouTube Channel has been an innovation leader in the development and delivery of
          practical outsourcing training  past 5 years. Since then, we have supported thousands of
          Engineers to upskills in their employees & Jobs with personalized content and learning
          solutions.  <br /><br />
          Today, we have evolved to provide a full suite of outsourcing services in the learning
          and development field, positioning ourselves among Electrical Engineer with excellent training
          programs.  <br /><br />
        </AboutUsPara1Styled>
        <AboutUsDivStyled>Our Vision</AboutUsDivStyled>
        <AboutUsPara1Styled>
          We aim to offer adequate training solutions to most Engineering to improve their
          Skills, innovation, competitiveness, and achieving impactful on their Job Roles
          <br /><br />
          Learning & Development is our core competency, which is why we are capable of
          offering better, faster and affordable training solutions. By doing what we do best,
          we allow you to focus on what you do best running your Skills Development.
        </AboutUsPara1Styled>
        <ImageClientStyled src="/baraniTechLeader.jpg" alt="login" loading="lazy" />
      </AboutUsDivWrapperStyled>

    </AboutUsStyled>
  )
}
