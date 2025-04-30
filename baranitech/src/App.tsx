import './styles/App.scss'
import { Container, CssBaseline, Paper, styled, ThemeProvider, useMediaQuery, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import theme from './theme'
import MenuBar from './components/Menubar'
import Footer from './components/Footer'
import { PostsProvider } from './contexts/postContext'
import FlashOffer from './components/FlashOffer'
import AccordionComponent from './components/AccordianComponent'
import { Outlet } from 'react-router';



function App() {
  const ContainerStyled = styled(Grid)(({ theme }) => ({
    padding: '0px',
    width: '100%'
  }))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostsProvider>

        <MenuBar />
        <FlashOffer
          onClick={() => { }}
          message="Book your spot now before registration closes. Don’t miss out!"
          buttonlabel="Register" />

        <ContainerStyled sx={{ flex: 1, minHeight: '80vh', p: '0px' }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 2 }}>
              <AccordionComponent />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Outlet />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}></Grid>
          </Grid>

        </ContainerStyled>

        <Footer />

      </PostsProvider>
    </ThemeProvider>
  )
}

export default App
