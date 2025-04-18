import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/about'
import Login from '../pages/login/AuthForm'
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
import History from "../pages/history/History"
import Branches from "../pages/branches/branches"
import PrivacyPolicy from "../pages/privacyPolicy/privacyPolicy"
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Layout} from "antd"
import ScrollAnimation from '../components/ScrollAnimation'
import { motion } from 'framer-motion'

const LayoutWithConditionalNavFooter = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <Layout>
      {!hideNavAndFooter && <Navbar />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollAnimation>
          {children}
        </ScrollAnimation>
      </motion.div>
      {!hideNavAndFooter && <Footer />}
    </Layout>
  );
};

const AppRouter = () => {
  return (
    <GoogleOAuthProvider>
    <div>
     <BrowserRouter>
      <LayoutWithConditionalNavFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products/businessloans" element={<Loans />} />
          <Route path="/products/msingiloans" element={<Moans />} />
          <Route path="/products/salariedloans" element={<Soans />} />
          <Route path="/products/grouploans" element={<Goans />} />
          <Route path="/products/individualloans" element={<Ioans />} />
          <Route path="/products/specialloans" element={<Ssoans />} />
          <Route path="/products/savingsplan" element={<Savings />} />
          <Route path="/products/benevolentfund" element={<Benevolent />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/history" element={<History/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </LayoutWithConditionalNavFooter>
    </BrowserRouter>
  </div>
  </GoogleOAuthProvider>
  )
}

export default AppRouter;