import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import PagenotFound from './pages/PagenotFound'
import Footer from './components/Footer'
import NurseProfile from './pages/NurseProfile'
import Admin from './pages/Admin'
import Auth2 from './pages/Auth2'
import { useContext } from 'react'
import { loginResponseContext } from './Context/ContextShare'


function App() {

      const {loginResponse} = useContext(loginResponseContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/Admin' element={ <Admin /> } />
        <Route path='/userLogin' element={<Auth />} />
        <Route path='/userRegister' element={<Auth userRegister={true} />} />
        <Route path='/nurseLogin' element={<Auth2 />} />
        <Route path='/nurseRegister' element={<Auth2 nurseRegister={true} />} />
        <Route path='/Dashboard' element={loginResponse? <Dashboard /> : <PagenotFound /> } />
        <Route path='/NurseProfile' element={loginResponse? <NurseProfile /> : <PagenotFound /> } />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
