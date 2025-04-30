import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import JobsPage from './pages/JobsPage';
import LoginPage from './pages/LoginPage';
import ResourcesPage from './pages/ResourcesPage';
import TestimonialPage from './pages/TestimonialPage';
import TrainingsPage from './pages/TrainingsPage';
// @ts-ignore
import "@fontsource/comfortaa";
// @ts-ignore
import "@fontsource-variable/montserrat";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
          <Routes>
            <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="trainings" >
              <Route index element={<TrainingsPage />}  />
              <Route path=":tid" element={<TrainingsPage />}  />
              <Route path="edit/:tid" element={<TrainingsPage />}  />
            </Route>
            </Route>
           
          </Routes>
        </BrowserRouter>
  </StrictMode>,
)
