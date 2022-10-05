import React from 'react'

import Categories from '../components/Categories'
import Footer from '../components/footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { useTranslation } from 'react-i18next';

export default function HomeScreen(props) {
  const { t } = useTranslation ( )
  return (
    <div>
      {/* <CartProvider> */}
        <Navigation categories={props.categories}/>
        <Header/>
        <Categories useCart={props.useCart()}  categories = {props.categories} foods = {props.foods} />
        <Footer useCart={props.useCart() } t={t}/>
        {/* </CartProvider> */}
    </div>
  )
}
