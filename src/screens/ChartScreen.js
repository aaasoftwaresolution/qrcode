import React from "react";
import { Link } from "react-router-dom";
import "../styles/order.css";

import { Chart } from "react-google-charts";
import { CartProvider, useCart } from "react-use-cart";
export const data = [
    ["Date", "Menu Opens", "Ordered"],
    ["17-10-2022", 1000, 400],
    ["18-10-2022", 1170, 880],
    ["19-10-2022", 660, 500],
    ["20-10-2022", 1030, 540],
  ];
  
  export const options = {
    title: "Total menu request",
    curveType: "function",
    legend: { position: "bottom" },
  };


export default function ChartScreen() {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        metadata,
        setCartMetadata,
        updateItemQuantity,
        removeItem,
      } = useCart();
  return (
    <div>
        <CartProvider>
        <div className="container2">
          <div className="">
           
              <div className="col-1 d-flex justify-content-start" style={{position:"absolute"}}>
              <Link to={"/"}>
                <i class="fa  fa-arrow-left  p-3 font-color"></i>
                </Link>
              </div>
            

            <div className="col-11 d-flex justify-content-center">
              <h5 class="font-color  p-3 text-center">Menu Opens</h5>
            </div>
          </div>
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
              {/* <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                <div className="d-flex justify-content-between p-3">
                  <div className="">Total</div>
                  <div className="font-color" style={{fontWeight:"800"}}>{cartTotal}SR /-</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container2">
          <form>
            <div class="form-group p-1 text-center ">
              <label for="exampleFormControlTextarea1 " className="p-3"> <h5 class="font-color  p-3 text-center">Most View Items</h5></label>
              <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Milk fish /Kayal poomeen - medium
    <span class="badge badge-primary badge-pill bg-secondary">1170</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Pink perch /Kilimeen -big
    <span class="badge badge-primary badge-pill bg-secondary">280</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Pomfret black /Avoli -big (400-900gms)
    <span class="badge badge-primary badge-pill bg-secondary">190</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Karimeen
    <span class="badge badge-primary badge-pill bg-secondary">140</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Leather jacket /Uduppoori -Medium
    <span class="badge badge-primary badge-pill bg-secondary">120</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Cobia/Motha -big
    <span class="badge badge-primary badge-pill bg-secondary">95</span>
  </li>
</ul>
            </div>
          </form>
          <form className="pb-5">
            <div class="form-group p-1 text-center ">
              <label for="exampleFormControlTextarea1 " className="p-3"> <h5 class="font-color  p-3 text-center">Whatsapp Order</h5></label>
              <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Milk fish /Kayal poomeen - medium
    <span class="badge badge-primary badge-pill bg-secondary">1105</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Pink perch /Kilimeen -big
    <span class="badge badge-primary badge-pill bg-secondary">245</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Pomfret black /Avoli -big (400-900gms)
    <span class="badge badge-primary badge-pill bg-secondary">166</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Cobia/Motha -big
    <span class="badge badge-primary badge-pill bg-secondary">141</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Leather jacket /Uduppoori -Medium
    <span class="badge badge-primary badge-pill bg-secondary">108</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  karimeen
    <span class="badge badge-primary badge-pill bg-secondary">56</span>
  </li>
</ul>
            </div>
          </form>
        </div>
        
      </CartProvider>
      
    </div>
  )
}
