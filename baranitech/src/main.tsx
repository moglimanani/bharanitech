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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/ea532f28cda5ac4d4b037af546c61233/login" element={<LoginPage />} />
          <Route path="/ea532f28cda5ac4d4b037af546c61233/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ea532f28cda5ac4d4b037af546c61233/admin" element={<AdminPage />} />
          <Route path="/resources" element={<ResourcesListPage />} />
          <Route path="/resource/add" element={<ResourceAddPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/youtube" element={<YoutubeListPage />} />
          <Route path="/youtube/add" element={<YoutubeUrlAddPage />} />
          <Route path="/jobs" element={<JobsListPage />} />
          <Route path="/jobs/add" element={<JobAddPage />} />
          <Route path="training/add" element={<TrainingAddPage />} />
          <Route path="trainings" >
            <Route index element={<TrainingsListPage />} />
            <Route path=":tid" element={<TrainingsListPage />} />
            <Route path="edit/:tid" element={<TrainingsListPage />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
