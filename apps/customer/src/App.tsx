import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import ServicePage from './pages/service/Service';
import ForBusinessPage from './pages/bussiness/ForBussiness';
import { ROUTES } from './routes/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<ServicePage />} />
        <Route path={ROUTES.BUSINESS} element={<ForBusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
