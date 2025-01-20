import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import PagenotFound from './pages/PagenotFound'
import Footer from './components/Footer'
import NurseProfile from './pages/NurseProfile'
import Admin from './pages/Admin'
import NurseRegistration from './pages/NurseRegistration'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/Admin' element={<Admin />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/Register' element={<Auth register={true} />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/NurseProfile' element={<NurseProfile />} />
        <Route path='/NurseRegistration' element={<NurseRegistration />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
