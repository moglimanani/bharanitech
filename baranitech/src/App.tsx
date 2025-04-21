import './styles/App.scss'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import MenuBar from './components/Menubar'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar />
      <Container sx={{ flex: 1, py: 40 }}>
        {/* Your main content here */}
        <h1>Hi Welcome to Barani Tech</h1>
      </Container>

      <Footer />
    </ThemeProvider>
  )
}

export default App
