import {
  Box,
  Grid,
  List,
  Card,
  ListItemText,
  styled,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogProps,
  IconButton,
  FormGroup,
  Chip,
  Pagination,
} from "@mui/material";

interface extentedInterfaceForLang {
  language?: number;
}

export const BodyPara1Styled = styled(Typography)(({ theme }) => ({
  padding: "10px 10px 10px 0px",
  textAlign: "left",
  alignItems: "flex-start",
  color: theme.palette.common.white,
}));
type BgVariantType = 'light' | 'dark'; // default dark
interface DialogStyledProps extends DialogProps {
  bgvariant?: BgVariantType;
}

export const PageWrapperStyled = styled(Box)(({ theme }) => ({
  // padding: '0px 16px 16px 20px',
  [theme.breakpoints.down("sm")]: {
    padding: "0",
    margin: " 20px 0",
  },
}));

export const ListItemTextStyled = styled(ListItemText)(() => ({
  textAlign: "left",
  paddingRight: "2em",
  paddingBottom: "5px",
  //  background: 'yellow '
  //fontStyle: "italic",
}));

export const HeadingStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  background: theme.palette.flashPrimaryBGColor.main,
  // borderRadius: '20px',
  paddingBlock: "15px",
  paddingLeft: "15px",
  maxWidth: "320px",
  textAlign: "left",
  fontWeight: "bold",
  listStyle: "none",
  borderRadius: "8px 50px 50px 8px",
  marginLeft: "-15px",
}));

export const ListStyled = styled(List)(({ theme }) => ({
  textAlign: "left",
  paddingLeft: "15px",
  color: theme.palette.common.white,
}));

export const TwoColumnStyled = styled(Grid)(({ theme }) => ({
  padding: "30px 30px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

// AboutUs

export const AboutUsStyled = styled("div")(({ theme }) => ({
  margin: "8px 30px 20px",
  // padding: "0px 20px 0px",
  //background: '#ffffff',
  borderRadius: "20px",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    margin: '0px 16px'
  },
}));

export const AboutUsTitleStyled = styled("h2")(({ theme }) => ({
  fontSize: "1em",
  color: theme.palette.appBarColour.main,
  background: theme.palette.flashPrimaryBGColor.main,
  //margin: '30px 0',
  padding: "8px",
  marginBottom: '30px',
  borderRadius: "12px 50px 50px 12px",
  textAlign: "left",
  fontWeight: "bold",
  fontFamily: "Poetsen One",
  letterSpacing: "1px",
  maxWidth: 'fit-content',
  paddingRight: '16px'
}));

export const AboutUsParaStyled = styled("p")(({ theme }) => ({
  // background: 'yellow',
  margin: "0",
  padding: "0 0 20px",
  color: theme.palette.appBarColour.light,
  fontSize: "0.88em",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 0",
  },
}));

export const AboutUsDivWrapperStyled = styled("div")(({ theme }) => ({
  // background: 'yellow',
  margin: "0",
  padding: "0 20px 20px 0",
  display: "flex",
  color: theme.palette.appBarColour.light,
  // fontSize: "0.88em",
  flexDirection: "column",
  textAlign: 'justify',
  paddingRight: '250px',
  position: 'relative',
  "& > div": {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: "-20px",
    },
  },
  "& > div > img": {
    width: "100%",
    margin: "0 20px",
    //float: 'right',
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    flexDirection: "column",
    width: "100%",
    "& > div > img": {
      marginTop: "20px",
      width: "100%",
    },
  },
}));

export const AboutUsPara1Styled = styled("p")(({ theme }) => ({
  // background: 'yellow',
  margin: "0",
  padding: "0 20px 20px 0",
  color: theme.palette.appBarColour.light,
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    maxWidth: "100%",
  },
}));

export const AboutUsDivStyled = styled("div")(({ theme }) => ({
  // background: 'yellow',
  margin: "10px 0 20px",
  padding: "15px 20px",
  color: theme.palette.appBarColour.main,
  background: theme.palette.flashPrimaryBGColor.main,
  fontWeight: "bold",
  borderRadius: "8px 50px 50px 8px",
  maxWidth: 'fit-content',
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

// Learning Resources

export const LearningResourcesStyled = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "1.3em",
  paddingBottom: "15px",
  color: theme.palette.appBarColour.light,
}));

export const AdminTitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  color: theme.palette.appBarColour.main,
  background: theme.palette.flashPrimaryBGColor.main,
  //margin: '30px 0',
  padding: "8px",
  marginBottom: '30px',
  borderRadius: "12px 50px 50px 12px",
  textAlign: "left",
  fontWeight: "bold",
  fontFamily: "Poetsen One",
  letterSpacing: "1px",
  maxWidth: 'fit-content',
  paddingRight: '16px',
}));

export const AdminButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.appBarColour.main,
  padding: "8px",
  "&:hover": {
    background: "transparent",
  },
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "1.2em",
  paddingRight: "60px",
  marginTop: '0px',
  color: theme.palette.appBarColour.main,
  position: "relative",
  textTransform: 'capitalize',
  WebkitLineClamp: 1,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

export const ParaStyled = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "1rem",
  paddingTop: "5px",
  textTransform: 'capitalize',
  lineHeight: '30px',
  marginTop: '5px',
  color: theme.palette.secondary.main,
  '& span': {
    color: theme.palette.appBarColour.main,
    fontWeight: '600',
    fontSize: '.95rem',
  }
}));
export const TypeStyled = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: ".88rem",
  padding: "5px",
  textTransform: 'capitalize',
  color: theme.palette.red.dark,
  backgroundColor: theme.palette.grey[200],
  borderRadius: '12px',
  '& span': {
    color: theme.palette.appBarColour.main,
    fontWeight: '600',
    fontSize: '.95rem',
  },
  WebkitLineClamp: 1,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

export const DateStyled = styled(Typography)(({ theme }) => ({
  position: 'absolute', 
  top: '16px', 
  color: '#fff', 
  fontSize: '.80em', 
  background: theme.palette.grey[700], 
  padding: '2px 8px', 
  borderRadius: '12px',
  fontFamily: 'Poetsen One'
}))

export const ChipStyled = styled(Chip)(({ theme})=>({
  color: theme.palette.common.black,
  backgroundColor: "transparent",
  fontSize: '1.2em',
  padding: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0 0 0.5em',
  '& svg.MuiChip-icon':{
    color: theme.palette.appBarColour.main,
  },
  '& span': {
    color: theme.palette.red.dark,
    fontWeight: '600',
    padding: '2px 8px',
  },
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
}))

export const ParaStyledOverflow = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: ".88rem",
  paddingTop: "5px",
  textTransform: 'capitalize',
  lineHeight: '1.5em',
  height: '1.5em',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
  color: theme.palette.secondary.main,
  '& span': {
    color: theme.palette.appBarColour.main,
    fontWeight: '600',
    fontSize: '.95rem',
  }
}));

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
   // border: '1px solid #484848',
   color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
   // backgroundImage: 'linear-gradient(to top, #a8edea 0%,rgb(216, 214, 221) 100%)'
  }
}));

export const StyledWrapperDivCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // boxShadow: theme.shadows[3],
  borderRadius: "20px",
  position: 'relative',
}));

export const StackStyled = styled(Stack)(() => ({
  position: "absolute",
  top: "-30px",
  right: "0px",
}));

//contact page

export const BoxContactStyled = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  marginBottom: "30px",
  flexDirection: "column",
  // boxShadow: theme.shadows[3],
  borderRadius: "20px",
  background: theme.palette.appBarColour.light,
}));

export const GridContactStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // boxShadow: theme.shadows[3],
  borderRadius: "20px",
  background: theme.palette.appBarColour.light,
  padding: "30px",
  marginBottom: "30px",
  "& > .hidden": {
    padding: '20px',
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      padding: "0",
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& > .fullwidth": {
      width: "100%",
    },
  },
  "& > .hidden > img": {
    width: "100%",
    borderRadius: '20px',
  },
}));

export const WrapperAdminStyled = styled(Grid)(() => ({
  // background: theme.palette.appBarColour.light,
  background: 'rgb(4, 82, 95)',
  marginBottom: '30px',
  padding: '20px',
}));

export const AdminStyled = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px",
  margin: "20px",
  flexDirection: "column",
  // boxShadow: theme.shadows[3],
  borderRadius: "20px",
  fontFamily: "Poetsen One",
  background: theme.palette.appBarColour.light,
  "&:hover": {
    cursor: 'pointer',
    backgroundColor: 'aliceblue',
    "& div": {
      color: theme.palette.pinkColour.main
    },
    "& svg": {
      color: theme.palette.pinkColour.main
    }
  },
  "& > div": {
    color: theme.palette.appBarColour.main,
    fontSize: "1.3em",
    paddingBottom: "15px",
  },
  "& > button": {
    background: theme.palette.appBarColour.main,
    border: 0,
    color: theme.palette.appBarColour.light,
    padding: "10px 20px",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "240px",
      margin: "0 auto",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "240px",
      margin: "0 auto",
    },
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0px auto 30px",
  },
}));

export const GalleyAdminStyled = styled(Grid)(({ theme }) => ({
  // height: '100%',
  display: "flex",
  margin: "20px auto 30px",
  fontSize: "1em",
  // fontFamily: "Comfortaa",
  fontFamily: "cursive",

  // background: '#ffffff',
  "& > nav": {
    // color: '#127B93',
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: theme.palette.appBarColour.light,
    fontWeight: "bold",
    a: {
      // color: '#127B93',
      color: theme.palette.secondary.main,
      borderRadius: "20px",
      boxShadow: theme.shadows[3],
      background: theme.palette.flashPrimaryBGColor.main,
      textDecoration: "none",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      padding: "8px 16px",
      clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)',
      "& svg": {
        paddingRight: '8px'
      },
      "&:first-child": {
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
      },
      "&.boxer": {
        clipPath: 'none',
      },
    },
    "a:hover": {
      color: theme.palette.appBarColour.main,
      background: theme.palette.appBarColour.light,
    },
  },
}));

export const ActionsBarStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
}))

export const DialogStyled = styled(Dialog)<DialogStyledProps>(({ theme }) => ({
  background: 'rgba(250, 250, 250, 0.8)',
  "& .MuiPaper-root": {
    backgroundColor: `({bgvariant }) => bgvariant ==='light' ? theme.palette.common.white : theme.palette.appBarColour.main }`,
    padding: '16px',
    "h2": {
      color: `({bgvariant }) => bgvariant ==='light' ? theme.palette.appBarColour.main } theme.palette.common.white`,
      padding: 0
    },
    "hr": {
      color: theme.palette.common.white,
      width: '100%'
    },
    "& .MuiDialogContent-root": {
      padding: "0 0 16px 0",
      "p": {
        color: theme.palette.common.white,
        fontFamily: 'fantacy',
      }
    },
    "button": {
      background: theme.palette.common.white,
      color: theme.palette.appBarColour.main,

      "&:hover": {
        background: theme.palette.flashPrimaryBGColor.main,
        color: theme.palette.appBarColour.main,
      }
    },
  }
}))

export const ImageClientStyled = styled("img")(({ theme }) => ({
  right: '16px',
  width: '230px',
  position: 'absolute',
  boxShadow: '0 4px 20px rgb(228 255 197 / 50%)',
  [theme.breakpoints.down("sm")]: {
    position: 'relative',
    right: 'auto',
    width: '100%',
    marginTop: '20px'
  }
}))

export const LangStyled = styled(Typography)<extentedInterfaceForLang>(({ theme, language }) => ({
  position: 'absolute',
  right: '10px',
  margin: '0',
  border: '1px solid #720834c9',
  padding: '5px 10px',
  borderRadius: '12px',
  top: '0px',
  fontSize: '.85em',
  color: language == 0 ? theme.palette.pinkColour.main : theme.palette.green.dark,
  background: '#fff',
  fontWeight: 'bold',
  [theme.breakpoints.down("sm")]: {

  }
}))

export const BackButtonStyled = styled(IconButton)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  // background: theme.palette.appBarColour.main,
  background: theme.palette.appBarColour.main,
 // border: '1px solid #484848',
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
  transition: 'all 0.2s',
  '&:hover': {
   // border: '1px solid #484848',
    color: theme.palette.appBarColour.light,
    backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
  }
}));


export const FilterFormStyled = styled(FormGroup)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.indigo.dark,
  background: theme.palette.grey[100],
  border: '1px solid #484848',
  borderRadius: "20px",
  padding: "0px 20px",
  transition: 'all 0.2s',
}));

export const PaginationStyled = styled(Pagination)(({ theme }) => ({
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > ul':{
    '& > li':{
      '& > button':{
        color: theme.palette.common.white,
        '&.Mui-selected':{
          color: theme.palette.appBarColour.main,
         // background: theme.palette.gold.main,
         background: theme.palette.common.white,
         '&:hover': {
          background: theme.palette.flashPrimaryBGColor.main,
         }
        }
      }
    }
  }
}))
     
export const DescriptionStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: ".85rem",
  padding: "5px 10px 5px",
  textTransform: 'capitalize',
  fontFamily: 'Comfortaa',
  margin: "16px"
}));

export const DeveoperFormStyled = styled('form')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1.2rem",
  padding: "5px 10px 5px",
  textTransform: 'capitalize',
  fontFamily: 'Comfortaa',
  margin: "16px",
  backgroundColor: theme.palette.common.white,
  border: '1px solid #484848',
  borderRadius: "20px",
  transition: 'all 0.2s'
}));