import './styles/App.scss'
import { styled } from '@mui/material'
import { Grid } from '@mui/material';
import MenuBar from './components/Menubar'
import Footer from './components/Footer'
import FlashOffer from './components/FlashOffer'
import { Outlet } from 'react-router';
import { useUser } from './contexts/userContext';
import AdminMenubar from './components/Menubar/adminMenubar';
import { useYouTubeCategories } from './contexts/youtubeCategoryContext';

function App() {
  const ContainerStyled = styled(Grid)(() => ({
    padding: '0px',
    width: '100%'
  }))
  const { user } = useUser()
  const {categories, loading, error} = useYouTubeCategories()
  
  
  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <>
      {user?.email ? <AdminMenubar /> : <MenuBar />}
      {!(user?.email) && (
        <FlashOffer
          onClick={() => { }}
          message="Book your spot now before registration closes. Don’t miss out!"
          buttonlabel="Register" />
      )}


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
