import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from 'react-use-cart';
import "../styles/horizontal.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

export default function DeliveryScreen(props) {
  const [show, setShow] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [dinein, setDinein] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    metadata,
    setCartMetadata,
    updateCartMetadata,
    updateItemQuantity,
    removeItem,
  } = props.useCart();
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(true);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [dispatchTime, setDispatchTime] = React.useState(moment());

  const handleValueChange = value => {
    setDispatchTime(value);
    console.log("value" + value);
    
    updateCartMetadata({"Pickup Time":value})
  };
  // console.log(items);

var val = [{metadata:metadata},{total_qty:totalUniqueItems},{total_amount:cartTotal}];
items.forEach(el =>{
   var item = {"name":el.name,"price":el.price,"quantity":el.quantity}
   val.push(item)
});
console.log('here',JSON.stringify(val));
  var myOtherUrl =  "https://wa.me/+918129602660?text=" + encodeURI(JSON.stringify(val));
  return (
    <div>
      <div className="container2">
        <h5 class="font-color p-3 text-center">Order Type</h5>
        <div className="container2">
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div class="card-body ">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              class="form-check-input"
                              type="radio"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => setDelivery((prev) => !prev)} 
                              style={{padding:"10px"}}
                              
                            />
                            <label
                            class="form-check-label p-1 font-color"
                            for="flexCheckDefault "
                            style={{fontSize:"13px",fontWeight:"700"}}
                           
                            >
                              Delivery
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div className="text-center font-color" style={{fontSize:"15px"}}>To get order delivered to your location</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve2 shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              class="form-check-input"
                              type="radio"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => setShow((prev) => !prev)} 
                              style={{padding:"10px"}}

                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{fontSize:"13px",fontWeight:"700"}}
                            >
                              Pickup
                            </label>
                          </div>
                          
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div className="text-center font-color" style={{fontSize:"15px"}}>To get your order ready before you arrive</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve2 shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              class="form-check-input"
                              type="radio"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => setDinein((prev) => !prev)} 
                              style={{padding:"10px"}}

                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{fontSize:"13px",fontWeight:"700"}}
                            >
                              Dine-In
                            </label>
                          </div>
                          
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div className="text-center font-color" style={{fontSize:"15px"}}>To get your order on your Table</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <h5 class="font-color1 p-3 text-left">Select pickup time :</h5>
        )}
         {delivery && (
          <h5 class="font-color1 p-3 text-left">Please enter your Address :</h5>
        )}
         {dinein && (
          <h5 class="font-color1 p-3 text-left">Please enter your Table number :</h5>
        )}

        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body ">
              {/* horizontal time card  */}

              {show && (
                <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                  <div
                    class="row flex-nowrap overflow d-flex justify-content-center mb-5"
                    onClick={handleClick}
                  >
                   
                    <TimePicker
        value={dispatchTime}
        onChange={handleValueChange}
        showSecond={false}
        allowEmpty
      />
                  </div>
                </div>
              )}
               {delivery && (
                 <form>
                 <div class="form-group p-1">
                   <label for="exampleFormControlTextarea1" className="p-3"></label>
                   <textarea
                     class="form-control"
                     id="exampleFormControlTextarea1"
                     placeholder="You Can Add Your Address here"
                     onChange={(e) => {
                      updateCartMetadata({deliveryAddress: e.target.value });
                     }}
                     rows="3"
                   ></textarea>
                 </div>
               </form>
               )}
               {dinein && (
                 <form>
                 <div class="form-group p-1">
                   <label for="exampleFormControlTextarea1" className="p-3"></label>
                   <textarea
                     class="form-control"
                     id="exampleFormControlTextarea1"
                     placeholder="You Can Add Your Address here"
                     onChange={(e) => {
                      updateCartMetadata({tablenumber: e.target.value });
                     }}
                     rows="3"
                   ></textarea>
                 </div>
               </form>
               )}
             

              {/* horizontal time card end  */}
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded pb-5">
              <div className="d-flex justify-content-between p-3">
                <div className="font-color" style={{fontWeight:"600"}}>Net Total :</div>
                <div className="font-color" style={{fontWeight:"800"}}>{cartTotal}SR/-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1"></div>
        {/* <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
  </div>
</form>
        
      </div> */}
        <div className="container2">
          <div className=" fixed-bottom p-3">
            <div className="d-flex justify-content-center">
             
            <a href={myOtherUrl} className=" content-footer"
                style={{
                  backgroundColor: isActive ? "green" : "rgb(83, 94, 121)",
                  color: isActive ? "white" : "white",textDecoration:"none"
                }}>
             
                {" "} 
                Send Order to Whatsapp
             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
