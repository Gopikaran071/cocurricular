import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './enter/Login'
import Signup from './enter/Signup'
import Password from './enter/Password'
import  Home  from './Home/Home'
import Form from './Home/Form'
import Circular from './Home/Circular'
import Dashboard from './Dashboard/Dashboard'
import Report from './Home/Report'




function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Password' element={<Password />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Form' element={<Form />}/>
        <Route path='/Circular' element={<Circular/>}/>
        <Route path='/Report' element={<Report/>}/>   
      </Routes>

    </div>
  )
}

export default App