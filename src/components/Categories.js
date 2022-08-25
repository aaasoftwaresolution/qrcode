import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import FoodItemsSmall from './FoodItemsSmall';
import HorizontCards from './HorizontalCard';



export default function Categories(props) {
  return (
    <div className="container2">
      
    <div className="d-flex justify-content-center ">
      <div className="shadow p-0 mb-5 bg-white rounded">
        <Card className="text-center">
          <Card.Header>
            <div className="d-flex justify-content-between">
              <Link to={"/admin"}>
            <i class="fa-regular fa-clock fa-2x p-2 font-color" data-aos="fade-right"></i>
            </Link>
            <div>
            <i class="fa-brands fa-snapchat-square fa-2x p-2"></i>
            <i class="fa-brands fa-instagram-square fa-2x p-2 "></i>
            <i class="fa-brands fa-twitter-square fa-2x p-2"></i>
            </div>
            <i class="fa-brands fa-facebook-f fa-2x p-2" data-aos="fade-left"></i>
            
            </div>
          </Card.Header>
        
          <Card.Body>
            <Card.Title className=" heading-color p-3">Categories</Card.Title>
            <div class="container-fluid">
           <HorizontCards categories = {props.categories} />
           </div>
          
           <FoodItemsSmall useCart={props.useCart} categories = {props.categories} foods = {props.foods}/>
            
          </Card.Body>
         
        </Card>
      </div>
    </div>
    </div>
  )
}
