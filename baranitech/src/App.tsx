import './styles/App.scss'
import { Container, CssBaseline, Paper, styled, ThemeProvider, useMediaQuery, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import MenuBar from './components/Menubar'
import Footer from './components/Footer'
import FlashOffer from './components/FlashOffer'
import { Outlet } from 'react-router';
import { useUser } from './contexts/userContext';
import { useEffect } from 'react';
import AdminMenubar from './components/Menubar/adminMenubar';



function App() {
  const ContainerStyled = styled(Grid)(({ theme }) => ({
    padding: '0px',
    width: '100%'
  }))
  const { user } = useUser()
  useEffect(()=>{

    console.log('user', user);
  },[user])

  return (
    <>
      {user?.email ? <AdminMenubar /> : <MenuBar /> }
      <FlashOffer
        onClick={() => { }}
        message="Book your spot now before registration closes. Don’t miss out!"
        buttonlabel="Register" />

      <ContainerStyled sx={{ flex: 1, minHeight: '80vh', p: '0px' }}>
        <Grid container>
          {/* <Grid size={{ xs: 12, md: 2 }}>
              <AccordionComponent />
            </Grid> */}
          <Grid size={{ xs: 12 }}>
            <Outlet />
          </Grid>
          {/* <Grid size={{ xs: 12, md: 2 }}></Grid> */}
        </Grid>

      </ContainerStyled>

      <Footer />
    </>
  )
}

export default App
