import { useParams } from "react-router";
import { TitleDivStyled } from "../components/ThreeColumnPage/styles";
import theme from "../theme";
import { DescriptionStyled } from "./styles";

const ThankYou = () => {
    const { tid: thankyouId = 0 } = useParams()

    //1 => Job Submission
    //2 => Training Submission
    //3 => Contact Submission
    //4=> contact developer


    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <TitleDivStyled sx={{ fontSize: '2rem', color: theme.palette.common.white, justifyContent: 'center' }}>Thank You!</TitleDivStyled>
            {+thankyouId === 1 && (
                <>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Your job application has been successfully submitted.</DescriptionStyled>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Our team will review your profile and get in touch with you shortly.<br />
                        Please keep an eye on your email and phone for further updates.</DescriptionStyled>
                </>
            )}
            {+thankyouId === 2 && (
                <>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Your training registration has been successfully submitted!</DescriptionStyled>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Our team will get in touch with you soon with the next steps. <br />
                        Please stay tuned to your email and phone for updates and further communication.

                    </DescriptionStyled>
                </>
            )}
            {+thankyouId === 3 && (
                <>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Thank you for reaching out!</DescriptionStyled>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>We’ve received your message and our team will get back to you shortly. <br />
                    Please keep an eye on your email and phone for our response.
                    </DescriptionStyled>
                </>
            )}
            {+thankyouId === 4 && (
                <>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Thanks for getting in touch with us! </DescriptionStyled>
                    <DescriptionStyled sx={{ color: theme.palette.common.white, textAlign: 'center' }}>Your message means a lot to the Mogli Developers team. <br/> We'll review your inquiry and respond within 24 hours. <br />
                    Please keep an eye on your email and phone for our response.
                    </DescriptionStyled>
                </>
            )}

        </div>
    )
};

export default ThankYou;
