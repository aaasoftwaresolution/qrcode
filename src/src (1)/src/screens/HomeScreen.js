import React from 'react'
import { CartProvider } from 'react-use-cart'
import Categories from '../components/Categories'
import Footer from '../components/footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function HomeScreen(props) {
  return (
    <div>
      {/* <CartProvider> */}
        <Navigation categories={props.categories}/>
        <Header/>
        <Categories useCart={props.useCart()}  categories = {props.categories} foods = {props.foods} />
        <Footer/>
        {/* </CartProvider> */}
    </div>
  )
}
