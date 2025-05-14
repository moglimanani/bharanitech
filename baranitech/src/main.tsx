import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import TestimonialPage from './pages/TestimonialPage';
// @ts-ignore
import "@fontsource/comfortaa";
// @ts-ignore
import "@fontsource-variable/montserrat";
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import RegisterPage from './pages/LoginPage/RegisterPage'
import JobsListPage from './pages/JobsListPage.tsx'
import ResourcesListPage from './pages/ResourcesListPage.tsx'
import YoutubeListPage from './pages/YoutubeListPage.tsx'
import YoutubeUrlAddPage from './pages/YoutubeAddPage.tsx'
import JobAddPage from './pages/JobAddPage.tsx'
import ResourceAddPage from './pages/ResourceAddPage.tsx'
import TrainingsListPage from './pages/TrainingsListPage.tsx'
import TrainingAddPage from './pages/TrainingAddPage.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import { CssBaseline } from '@mui/material'
import { UserProvider } from './contexts/userContext.tsx'
import { ErrorAlertProvider } from './contexts/errorAlertContext.tsx'
import GalleryAdminPage from './pages/GalleryAdminPage.tsx'
import GalleryAddAdminPage from './pages/GalleryAddAdminPage.tsx'
import GalleryList from './components/GalleryList/index.tsx'
import { DialogProvider } from './contexts/dialogContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogProvider>
        <UserProvider>
          <ErrorAlertProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<App />}>
                  <Route path={import.meta.env.VITE_ROUTE_HOME_URL} element={<HomePage />} />
                  <Route path={import.meta.env.VITE_ROUTE_ABOUTUS_URL} element={<AboutUsPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_LOGIN_URL} element={<LoginPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_REGISTER_USER_URL} element={<RegisterPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_CONTACT_URL} element={<ContactPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_ADMIN_URL} element={<AdminPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL} element={<ResourcesListPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_RESOURCES_ADD_URL} element={<ResourceAddPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_TESTIMONIAL_URL} element={<TestimonialPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_YOUTUBE_URL} element={<YoutubeListPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_YOUTUBE_ADD_URL} element={<YoutubeUrlAddPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_JOBS_URL} element={<JobsListPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_JOBS_ADD_URL} element={<JobAddPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_TRAININGS_ADD_URL} element={<TrainingAddPage />} />
                  <Route path={import.meta.env.VITE_ROUTE_TRAININGS_URL} >
                    <Route index element={<TrainingsListPage />} />
                    <Route path={import.meta.env.VITE_ROUTE_TRAININGS_ID_URL} element={<TrainingsListPage />} />
                    <Route path={import.meta.env.VITE_ROUTE_TRAININGS_EDIT_URL} element={<TrainingsListPage />} />
                  </Route>
                  <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL} element={<GalleryAdminPage />}>
                    <Route index element={<GalleryList />} />
                    <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_ID_URL} element={<GalleryAdminPage />} />
                    <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_EDIT_URL} element={<GalleryAdminPage />} />
                    <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_ADD_URL} element={<GalleryAddAdminPage />} />
                  </Route>
                </Route>

              </Routes>
            </BrowserRouter>
          </ErrorAlertProvider>
        </UserProvider>
      </DialogProvider>
    </ThemeProvider>
  </StrictMode>,
)
