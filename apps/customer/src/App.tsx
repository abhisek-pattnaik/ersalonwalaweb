import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import ServicePage from './pages/service/Service';
import { ROUTES } from './routes/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
