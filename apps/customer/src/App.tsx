import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import ServicePage from './pages/service/Service';
import ForBusinessPage from './pages/bussiness/ForBussiness';
import TeamPage from './pages/footer-pages/team/TeamPage';
import { ROUTES } from './routes/routes';
import './App.css';
import GalleryPage from './pages/footer-pages/gallery/GalleryPage';
import AboutPage from './pages/footer-pages/about/AboutPage';
import ContactUsPage from './pages/footer-pages/ContactUs/ContactUsPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<ServicePage />} />
        <Route path={ROUTES.BUSINESS} element={<ForBusinessPage />} />
        <Route path={ROUTES.TEAM} element={<TeamPage />} />
        <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
