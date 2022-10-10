import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

import Modal from "react-bootstrap/Modal";
import "../styles/modalStyle.css";

import Button from "react-bootstrap/Button";


export default function ModalCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const food = props.food;
  const alreadyAdded = props.inCart(food.id);
 

  const item_inc = () => {
  
    return(<> 
    <h5 class="modal-header1 justify-content-center font-modal text-center p-1 mt-3 mb-3 ">
    Choose quantity
  </h5>
         {props.items.filter(person => person.id === food.id).map((item) => (
     
  <div className="d-flex justify-content-center">
   
    <div className="col-12 d-flex justify-content-center" key={item.id}>
      <button
        className="button-five m-2"
        
        onClick={() => props.updateItemQuantity(item.id, item.quantity - 1)}
      >
        <i class="fa-solid fa-minus"></i>
      </button>
      <div className="button-five m-2"> 
      {item.quantity}
      </div>
      <button
        className="button-five m-2" 
        onClick={() => props.updateItemQuantity(item.id, item.quantity + 1)}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
    ))}
  </>)
  // });
 
    }


  return (
    <div className="d-flex justify-content-center">
      {/* <CartProvider> */}
        <div className="container4" show={show} onHide={handleClose}>
          <div className="col-12 col-sm-12 col-lg-12 col-md-12 p-3">
            <div className="card mt-4 shadow">
              <div className="back-button">
                <Modal.Header closeButton>
                  {/* <i class="fa-solid fa-arrow-left-long"  ></i> */}
                </Modal.Header>
              </div>

              <img className ="img-rounded modal-img" src={food.image} alt="Card image cap"/>

              <div class="card-body p-0 overflow-auto scroll" style={{height:"375px"}}>
                <h5 class="modal-header justify-content-center font-modal text-center p-1 mt-2 mb-3">
                  {food.english}
                </h5>

                <p class="card-text card-details1 text-left p-3 m-1">
                  {food.des}
                </p>
                {alreadyAdded ?  item_inc() :  "" }
                {/* {console.log(props.items)} */}
                <>
                  {/* <h6>Cart <br/>(Total Items : {props.totalUniqueItems} <br/> Total Amount {props.cartTotal})</h6>
                  <ul>
                    {props.items.filter(person => person.id === food.id).map((item) => (
                      <li key={item.id}>
                        {item.quantity} x {item.price} = {item.quantity*item.price}
                      </li>
                    ))}
                 </ul> */}

                </>
              

                <div className="button-block justify-content-center p-3" key={food.id}>
                  <div className="btn-block pt-5" onClick={()=>{props.addItem(food)}} typeof="button" >
                 
                      <div className="button-colors icon-btn elevation-0 icon-text-btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
                    
                      {alreadyAdded ? "Add again" : "Add to Cart"}
                   
                      </div>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </CartProvider> */}
    </div>
  );
}
