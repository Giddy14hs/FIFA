import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/about'
import Login from '../pages/login/AuthForm'
import PrivateRouter from './PrivateRouter'
import Products from "../pages/Products&Services/Products"
import Careers from "../pages/careers/Careers"
import {Layout} from "antd"

const AppRouter = () => {
  return (
    <div>
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<PrivateRouter />}>
            <Route path='' element={<About />} />
          </Route>
          <Route path='products' element={<Products />} />
          <Route path='careers' element={<Careers />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
  )
}

export default AppRouter;