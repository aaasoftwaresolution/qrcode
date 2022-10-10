import './App.css';
import {
  Route,
 
  Routes,
  
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeScreen from './screens/HomeScreen';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider, useCart } from "react-use-cart";
import Page from './components/Addtocart';
import Cart from './components/Cart';
import OrderScreen from './screens/OrderScreen';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import AOS from 'aos';
import DeliveryScreen from './screens/DeliveryScreen';
import ChartScreen from './screens/ChartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



export default function App() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  const [categories, setCategories] = useState([]);
  const [foods, setFood] = useState([]);

  const fetchFoodCats = () => {
   axios.get(`https://qrorder.itrends.in/api/category`)
    .then(res => {
   const category = res.data.data;
       setCategories(category);
      console.log('axios console cat',categories);
    })
  }
  const fetchFoods = () => {
    axios.get(`https://qrorder.itrends.in/api/alldata`)
     .then(res => {
    const category = res.data.data;
       setFood(category);
       console.log('axios console food',foods);
     })
   }
    useEffect(() => {
      fetchFoodCats();
      fetchFoods();
      AOS.init({
        duration: 1200,
        
      })
      
    }, []);

    useEffect(() => {
      // console.log(categories);
      // console.log(foods);
    }, [categories,foods]);
 
  return (
    !loading && (
    <>
    
    <CartProvider>
     <Routes>
     <Route path="*" element={<LoginScreen />} />
     <Route path="/signup" element={<SignupScreen />} />
          <Route path="/home" element={<HomeScreen useCart={useCart} categories = {categories} foods = {foods} />} />
          <Route path="/orders" element={<OrderScreen useCart={useCart} />} />
          <Route path="/delivery"  element={<DeliveryScreen useCart={useCart}/>}/>
          <Route path="/admin"  element={<ChartScreen  useCart={useCart}/>}/>

        </Routes>
        
    </CartProvider>
    </>
    )
  );

}
// "homepage":"https://zandeepsanand.github.io/v-4-foodmenu",
// "homepage": "https://aaasoftwaresolution.github.io/qrcode",