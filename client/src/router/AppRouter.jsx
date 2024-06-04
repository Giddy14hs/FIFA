import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/about'
import Login from '../pages/login/AuthForm'
import PrivateRouter from './PrivateRouter'
import Products from "../pages/Products&Services/Products"
import Careers from "../pages/careers/Careers"
import Loans from "../pages/loans/businessLoans/business"
import Moans from "../pages/loans/msingiLoans/msingi"
import Soans from "../pages/loans/salariedLoans/salaried"
import Goans from "../pages/loans/groupLoans/group"
import Ioans from "../pages/loans/individualLoans/individual"
import Ssoans from "../pages/loans/specialLoans/special"
import Savings from "../pages/loans/savingsPlan/savings"
import Benevolent from "../pages/loans/benevolentFund/benevolent"

import Footer from "../components/footer/footer"
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
          <Route path='businessloans' element={<Loans />} />
          <Route path='msingiloans' element={<Moans />} />
          <Route path='salariedloans' element={<Soans />} />
          <Route path='grouploans' element={<Goans />} />
          <Route path='individualloans' element={<Ioans />} />
          <Route path='specialloans' element={<Ssoans />} />
          <Route path='savingsplan' element={<Savings />} />
          <Route path='benevolentfund' element={<Benevolent />} />
        </Routes>
        <Footer/>
      </Layout>
    </BrowserRouter>
  </div>
  )
}

export default AppRouter;