import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FoodItemList from "./FoodItemList";
// import { CartProvider, useCart } from "react-use-cart";

export default function FoodItemsSmall(props) {
 
  const foods = props.foods;
//  console.log(props.foods);

  return (
    <>
   
     <div>
      { props.categories ? props.categories.map( (cat,index) => { 

     return(
      <>
     {/* { console.log(props.foods)}
     { console.log(cat)} */}
      <Card.Title className="heading-color p-3 scrollspy-example" data-spy="scroll" data-target="#navbar-example2" data-offset="0" id={`${cat.catnameeng}`} data-aos="fade-down">{cat.catnameeng}</Card.Title> 
      {/* <FoodItemList  food={food}/> */}
      {props.foods.filter(food => food.cat_id === parseInt(cat.id)).map(food_items => (
        
       <div>
       {/* { console.log('hello',food_items)} */}
          {/* {filteredPerson.name} */}
         { food_items.subcategory ? food_items.subcategory.map((items) =>{
          return(
            <>
               <FoodItemList useCart={props.useCart} food={items}/>
            </>
          );
         }) : ""
        }
         
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
