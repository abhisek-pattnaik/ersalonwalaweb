
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Admin from './pages/Admin'
function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
         <Route path="/admin/:navigatedata" element={<Admin />} />
         <Route path="*" element={"Page Not Found"} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
