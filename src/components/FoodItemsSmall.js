import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FoodItemList from "./FoodItemList";
// import { CartProvider, useCart } from "react-use-cart";

export default function FoodItemsSmall(props) {
 
  const foods = props.foods;

  return (
    <>
   
     <div>
      { props.categories ? props.categories.map( (cat,index) => { 

     return(
      <>
      <Card.Title className="heading-color p-3 scrollspy-example" data-spy="scroll" data-target="#navbar-example2" data-offset="0" id={`${cat.catnameeng}`} data-aos="fade-down">{cat.catnameeng}</Card.Title> 
      {/* <FoodItemList  food={food}/> */}
      {props.foods.filter(food => food.category_id === cat.id).map(food_items => (
       <div>
          {/* {filteredPerson.name} */}
          <FoodItemList useCart={props.useCart} food={food_items}/>
       </div>
      ))}

      </>
      )

     
      
      }) :"" 

      }
     </div>
    </>
  );
}
