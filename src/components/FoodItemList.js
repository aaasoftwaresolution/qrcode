
import React, { useEffect, useState } from "react";
import ModalCard from "./ModalCard";
import Modal from "react-bootstrap/Modal";


export default function FoodItemList(props) {
  
  // const { addItem, inCart, setCartMetadata } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const food = props.food;
  const {
    addItem,
    inCart,
    setCartMetadata,
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,

    updateItemQuantity,
    removeItem,
    emptyCart,
    metadata,
  } = props.useCart;
  // console.log(food);
  return (
    <>
    <div className="container">
    <div className="row d-flex justify-content-center">
     <div className="col-12 col-sm-10 p-2 font-color">
      {/* {console.log(food.subcategory)} */}
        <div class="card curve shadow p-0 mb-0 bg-white rounded" onClick={handleShow} data-aos="fade-up">
          <div class="card-body " id={food.id} >
            <div className="row" >
              <div className="col-3 ">
                <img className="card-image" src={food.image}  alt="pic" />
              </div>
              
              <div className="col-9 ">
                <div className="prize-label button-colors  ">{food.price}
                  <div className="currency">S.R</div>
                </div>

                <h5 class="card-title font-size card-heading text-left">
                  {food.english}
                </h5>
                
                <p class="card-details  p-0 m-0 text-left">
                {food.des}
                </p>
              </div>
            </div>
          </div>
        </div>
      
        {/* <CartProvider> */}
        <Modal className="card shadow" show={show} onHide={handleClose} >
      <Modal.Body  >
        <ModalCard addItem={addItem} inCart={inCart} setCartMetadata={setCartMetadata} isEmpty={isEmpty}
        cartTotal={cartTotal} totalUniqueItems={totalUniqueItems} items={items} updateItemQuantity={updateItemQuantity}
        removeItem={removeItem} emptyCart={emptyCart} metadata={metadata}
        food={food}/>
      </Modal.Body>
    </Modal>
    {/* </CartProvider> */}
      </div>
      </div>
    </div>
    
      
      </>
      )

      
   
}
