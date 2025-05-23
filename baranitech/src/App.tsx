import './styles/App.scss'
import { styled, useMediaQuery, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import MenuBar from './components/Menubar'
import Footer from './components/Footer'
import FlashOffer from './components/FlashOffer'
import { Outlet, useLocation } from 'react-router';
import { useUser } from './contexts/userContext';
import AdminMenubar from './components/Menubar/adminMenubar';
import { useYouTubeCategories } from './contexts/youtubeCategoryContext';
import { TwoColumnStyled } from './pages/styles';
import AccordionComponent from './components/AccordianComponent';
import ThreeColumnPage from './components/ThreeColumnPage/ThreeColumnPage';
import ThreeColumnWhitePage from './components/ThreeColumnWhitePage/ThreeColumnWhitePage';
import GetStartedToday from './components/GetStartedComponent';
import Vacancies from './components/Vacancies';
import LoaderWithIcon from './components/Loader';

function App() {
  const ContainerStyled = styled(Grid)(() => ({
    padding: '0px',
    width: '100%'
  }))

  const { user } = useUser()
  const { categories, loading, error } = useYouTubeCategories()
  const location = useLocation()

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (loading) return <LoaderWithIcon />;
  if (error) return <div>{error}</div>;

  const ifItsLoginOrRegisterPage = (location.pathname === import.meta.env.VITE_ROUTE_LOGIN_URL) || (location.pathname === import.meta.env.VITE_ROUTE_REGISTER_USER_URL)
  const isLogged = !ifItsLoginOrRegisterPage && user?.email

  // const isHomePage = (location.pathname === import.meta.env.VITE_ROUTE_HOME_URL)
  

  return (
    <>
      {isLogged ? <AdminMenubar /> : <MenuBar />}
      {!ifItsLoginOrRegisterPage && !(user?.email) && (
        <FlashOffer
          onClick={() => { }}
          message="Book your spot now before registration closes. Don’t miss out!"
          buttonlabel="Register" />
      )}

      {!ifItsLoginOrRegisterPage && !(user?.email) && (
        <FlashOffer
          onClick={() => { }}
          message="Book your spot now before registration closes. Don’t miss out!"
          buttonlabel="Register" />
      )}


      {!ifItsLoginOrRegisterPage && !(user?.email) && (
        <Vacancies />
      )}
      <ContainerStyled sx={{ flex: 1, minHeight: '80vh', p: '0px' }}>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TwoColumnStyled size={12}>
              <Grid container>
                {!ifItsLoginOrRegisterPage && !isLogged && !isMobile &&
                  (<Grid size={{ xs: 12, md: 2 }}>
                    <AccordionComponent />
                  </Grid>
                  )}
                <Grid size={{ xs: 12, md: (ifItsLoginOrRegisterPage || user?.email) ? 12 : 10 }}>
                  <Outlet />
                </Grid>
                {/* <Grid size={{ xs: 12, md: 4 }}></Grid> */}
              </Grid>
            </TwoColumnStyled>
          </Grid>
          {!ifItsLoginOrRegisterPage && !(user?.email) && (
            <>
              <Grid size={12}>
                <ThreeColumnPage />
              </Grid>
              <Grid size={12}>
                <ThreeColumnWhitePage />
              </Grid>
              <Grid size={12}>
                <GetStartedToday />
              </Grid>
            </>
          )}
        </Grid>

      </ContainerStyled>

      <Footer />
    </>
  )
}

export default App
