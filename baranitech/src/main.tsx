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
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import RegisterPage from './pages/LoginPage/RegisterPage'
import JobsListPage from './pages/JobsListPage.tsx'
import ResourcesListPage from './pages/ResourcesListPage.tsx'
import YoutubeListPage from './pages/YoutubeListPage.tsx'
import YoutubeUrlAddPage from './pages/YoutubeAddPage.tsx'
import JobAddPage from './pages/JobAddPage.tsx'
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
import ResourceAdminPage from './pages/ResourceAdminPage.tsx'
import ResourceAdminAddComponent from './components/ResourceAdminAddComponent/index.tsx'
import ResourceAdminListComponent from './components/ResourceAdminListComponent/index.tsx'
import { YouTubeCategoryProvider } from './contexts/youtubeCategoryContext.tsx'
import JobsAdminPage from './pages/JobsAdminPage.tsx'
import JobsAdminAddComponent from './components/JobsAdminAddComponent/index.tsx'
import { JobCategoryProvider } from './contexts/jobCategoryContext.tsx'
import JobAdminListComponent from './components/JobAdminListComponent/index.tsx'
import ScrollToTop from './components/ScrollToTop/index.tsx'
import ScrollToComponent from './components/ScrollToComponent/index.tsx'
import TrainingAdminPage from './pages/TrainingAdminPage.tsx';
import TrainingAddComponent from './components/TrainingAdminAddComponent/index.tsx'
import { TrainingCategoryProvider } from './contexts/trainingCategoryContext.tsx'
import TrainingAdminListComponent from './components/TrainingAdminListComponent/index.tsx'
import TrainingRegistedAdminListComponent from './components/TrainingRegisteredAdminListComponent/index.tsx'
import { AllJobsProvider } from './contexts/allJobsContext.tsx'
import { AllTrainingsProvider } from './contexts/allTrainingsContext.tsx'
import { AllResourcesProvider } from './contexts/allResourcesContext.tsx'


// Comfortaa - weights 300 to 700
import '@fontsource/comfortaa/300.css';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/500.css';
import '@fontsource/comfortaa/600.css';
import '@fontsource/comfortaa/700.css';


// Red Hat Display - normal and italic, weights 300 to 900
import '@fontsource/red-hat-display/300.css';
import '@fontsource/red-hat-display/400.css';
import '@fontsource/red-hat-display/500.css';
import '@fontsource/red-hat-display/600.css';
import '@fontsource/red-hat-display/700.css';
import '@fontsource/red-hat-display/800.css';
import '@fontsource/red-hat-display/900.css';

// Italic versions for Red Hat Display (if you use italic)
import '@fontsource/red-hat-display/300-italic.css';
import '@fontsource/red-hat-display/400-italic.css';
import '@fontsource/red-hat-display/500-italic.css';
import '@fontsource/red-hat-display/600-italic.css';
import '@fontsource/red-hat-display/700-italic.css';
import '@fontsource/red-hat-display/800-italic.css';
import '@fontsource/red-hat-display/900-italic.css';
import TrainingsViewPage from './pages/TrainingsViewPage.tsx'
import ResourceViewPage from './pages/ResourceViewPage.tsx'
import GalleryListPage from './pages/GalleryListPage.tsx'
import CandidateRegistedListComponent from './components/CandidatesRegisteredJobList/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogProvider>
        <YouTubeCategoryProvider>
          <JobCategoryProvider>
            <TrainingCategoryProvider>
              <AllJobsProvider>
                <AllTrainingsProvider>
                  <AllResourcesProvider>
                    <UserProvider>
                      <ErrorAlertProvider>
                        <BrowserRouter>
                          <ScrollToTop />
                          <Routes>
                            <Route element={<App />}>
                              <Route path={import.meta.env.VITE_ROUTE_HOME_URL} element={<HomePage />} />
                              <Route path={import.meta.env.VITE_ROUTE_ABOUTUS_URL} element={<AboutUsPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_LOGIN_URL} element={<LoginPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_REGISTER_USER_URL} element={<RegisterPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_CONTACT_URL} element={<ContactPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_ADMIN_URL} element={<AdminPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_RESOURCES_LIST_URL}>
                                <Route index element={<ResourcesListPage />} />
                                <Route path={import.meta.env.VITE_ROUTE_RESOURCES_ID_URL} element={<ResourceViewPage />} />
                              </Route>

                              <Route path={import.meta.env.VITE_ROUTE_TESTIMONIAL_URL} element={<TestimonialPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_YOUTUBE_URL} element={<YoutubeListPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_YOUTUBE_ADD_URL} element={<YoutubeUrlAddPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_JOBS_URL} element={<JobsListPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_JOBS_ADD_URL} element={<JobAddPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_TRAININGS_ADD_URL} element={<TrainingAddPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_TRAININGS_URL} >
                                <Route index element={<TrainingsListPage />} />
                                <Route path={import.meta.env.VITE_ROUTE_TRAININGS_ID_URL} element={<TrainingsViewPage />} />
                                <Route path={import.meta.env.VITE_ROUTE_TRAININGS_EDIT_URL} element={<TrainingsListPage />} />
                              </Route>
                              <Route path={import.meta.env.VITE_ROUTE_GALLERY_URL} element={<GalleryListPage />} />
                              <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_URL} element={<GalleryAdminPage />}>
                                <Route index element={<GalleryList />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_ID_URL} element={<GalleryAdminPage />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_EDIT_URL} element={<GalleryAddAdminPage />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_GALLERY_ADD_URL} element={<GalleryAddAdminPage />} />
                              </Route>
                              <Route path={import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL} element={<ResourceAdminPage />}>
                                <Route index element={<ResourceAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_ID_URL} element={<ResourceAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_EDIT_URL} element={<ResourceAdminAddComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_ADD_URL} element={<ResourceAdminAddComponent />} />
                              </Route>
                              <Route path={import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL} element={<JobsAdminPage />}>
                                <Route index element={<JobAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_JOBS_ID_URL} element={<JobAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_JOBS_EDIT_URL} element={<JobsAdminAddComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_JOBS_ADD_URL} element={<JobsAdminAddComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_JOBS_CANDIDATE_URL} element={<CandidateRegistedListComponent />} />

                              </Route>
                              <Route path={import.meta.env.VITE_ROUTE_ADMIN_TRAINING_URL} element={<TrainingAdminPage />}>
                                <Route index element={<TrainingAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_TRAINING_ID_URL} element={<TrainingAdminListComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_TRAINING_EDIT_URL} element={<TrainingAddComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_TRAINING_ADD_URL} element={<TrainingAddComponent />} />
                                <Route path={import.meta.env.VITE_ROUTE_ADMIN_TRAINING_REGISTERED_URL} element={<TrainingRegistedAdminListComponent />} />
                              </Route>
                            </Route>

                          </Routes>
                          <ScrollToComponent />
                        </BrowserRouter>
                      </ErrorAlertProvider>
                    </UserProvider>
                  </AllResourcesProvider>
                </AllTrainingsProvider>
              </AllJobsProvider>
            </TrainingCategoryProvider>
          </JobCategoryProvider>
        </YouTubeCategoryProvider>
      </DialogProvider>
    </ThemeProvider>
  </StrictMode>,
)
