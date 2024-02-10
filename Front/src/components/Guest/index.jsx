import React from 'react'
import Navbarin from './Navbar/index';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import Login from '../security/Login';
import Signup from '../security/Signup';
import ForgetPassword from '../security/ForgetPassword';
import ContactUs from '../security/ContactUs';
import { Single } from './Articles/Single';
import { SearchPage } from './Articles/SearchPage';
import { CategoryPage } from './Articles/CategoryPage';
import { AboutUs } from './AboutUs';


const Index = () => {
  return (
    <>
      <Navbarin />
      {/* <Nav /> */}
      {/* <Banner /> */}
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <ForgetPassword/> */}
      {/* <ContactUs/> */}
      {/* <Single/> */}
      {/* <SearchPage/> */}
      {/* <CategoryPage/> */}
      <AboutUs />
      <Footer />


    </>
  )
}

export default Index