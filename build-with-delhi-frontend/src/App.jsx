import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import {Vortex} from './components/ui/Vortex'
import Dashboard from './pages/Dashboard'
import { RecoilRoot } from 'recoil'
import Stock from './pages/Stock'
import Loan from './pages/Loan'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Vortex children={<Landing />} />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/dashboard/stock' element={<Stock />}/>
        <Route path='/dashboard/loan' element={<Loan />}/>
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
    </>
  )
}

export default App