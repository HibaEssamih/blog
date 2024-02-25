import React from 'react'
import Navbarin from './Navbar/index';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../security/Login';
import Signup from '../security/Signup';
import ForgetPassword from '../security/ForgetPassword';
import ContactUs from '../security/ContactUs';
import { Single } from './Articles/Single';
import { SearchPage } from './Articles/SearchPage';
import { CategoryPage } from './Articles/CategoryPage';
import { AboutUs } from './AboutUs';
import { AllProducts } from './Products/AllProducts';
import { ProductDetail } from './Products/ProductDetail';
import Account from '../Client/Account'
import Tools from './tools'
import { ShoppingCart } from '../Client/shopping/ShoppingCart';


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
      {/* <AboutUs /> */}
      {/* <AllProducts /> */}
      {/* <ProductDetail/> */}
      {/* <ShoppingCart /> */}
      {/* <Account/> */}
      
      <Routes>
        <Route path='/' element={<Banner /> }></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/> }></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/allProducts' element={<AllProducts />}></Route>
        <Route path='/single' element={<Single />}></Route>
        <Route path='/categoryPage' element={<CategoryPage />}></Route>
        <Route path='/allProducts' element={<AllProducts />}></Route>
        <Route path='/productDetail' element={<ProductDetail />}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart />}></Route>
        {/* <Route path='/*' element={<NotFound />}></Route> */}
      </Routes>

      <Footer />

    </>
  )
}

export default Index