
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Fillteroffcanvas from './component/admin_compo/OfferAndCoupons/fillteroffcanvas'

function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
         <Route path="/admin/:navigatedata" element={<Admin />} />
         <Route path="/" element={<Fillteroffcanvas/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
