import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/about'
import Login from '../pages/login/AuthForm'
import PrivateRouter from './PrivateRouter'
import {Layout} from "antd"

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='about' element={<PrivateRouter/>}>
        <Route path='' element={<About />}/>
        </Route>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;