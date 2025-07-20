import './styles/App.scss'
import { styled, useMediaQuery, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import MenuBar from './components/Menubar'
import Footer from './components/Footer'
import FlashOffer from './components/FlashOffer'
import { Outlet, useLocation, useNavigate } from 'react-router';
import { useUser } from './contexts/userContext';
import AdminMenubar from './components/Menubar/adminMenubar';
import { useYouTubeCategories } from './contexts/youtubeCategoryContext';
import { TwoColumnStyled } from './pages/styles';
import AccordionComponent from './components/AccordianComponent';
import GetStartedToday from './components/GetStartedComponent';
import Vacancies from './components/Vacancies';
import LoaderWithIcon from './components/Loader';
import TrainingsThreeColumnWhitePage from './components/TrainingsThreeColumnWhitePage';
import ResourcesThreeColumnWhitePage from './components/ResourcesThreeColumnWhitePage';
import { useAllTrainings } from './contexts/allTrainingsContext';
import { useEffect, useState } from 'react';
import { TrainingType } from './types/trainings';

function App() {
  const ContainerStyled = styled(Grid)(() => ({
    padding: '0px',
    width: '100%'
  }))

  const { user } = useUser()
  const { loading, error } = useYouTubeCategories()
  const location = useLocation()
  const [futureTrainings, setFutureTrainings] = useState<TrainingType[]>([])
  const { allTrainings } = useAllTrainings()
  const navigate = useNavigate()

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getFutureTrainings = () => {
    const futureTrainings = allTrainings.filter((item) => new Date(item.startdate) > new Date()).sort((training1: TrainingType, training2: TrainingType) => new Date(training1.startdate).getTime() - new Date(training2.startdate).getTime())

    setFutureTrainings(futureTrainings)
  }

  useEffect(() => {
    getFutureTrainings()
  }, [allTrainings])

  if (loading) return <LoaderWithIcon />;
  if (error) return <div>{error}</div>;

  const ifItsLoginOrRegisterPage = (location.pathname === import.meta.env.VITE_ROUTE_LOGIN_URL) || (location.pathname === import.meta.env.VITE_ROUTE_REGISTER_USER_URL)
  const isLogged = !ifItsLoginOrRegisterPage && user?.email

  // const isHomePage = (location.pathname === import.meta.env.VITE_ROUTE_HOME_URL)

  const Flashes = futureTrainings.length > 0 && futureTrainings.slice(0, 2).map(item => (
    <FlashOffer
      key={`flashTraining-${item.id}`}
      onClick={() => { navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${item.id}`); }}
      message={`${item.title} - Book your spot now before registration closes. Don’t miss out!`}
      buttonlabel="Register" />
  ))


  return (
    <>
      {isLogged ? <AdminMenubar /> : <MenuBar />}
      {(!isLogged)  && Flashes}
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
              {/* <Grid size={12}>
                <ThreeColumnPage />
              </Grid> */}
              <Grid size={12}>
                <TrainingsThreeColumnWhitePage />
              </Grid>
              <Grid size={12}>
                <ResourcesThreeColumnWhitePage />
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
