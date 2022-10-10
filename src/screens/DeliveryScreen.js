import React, { useState } from "react";

import "../styles/horizontal.css";

import "rc-time-picker/assets/index.css";
import moment from "moment";
import TimePicker from "react-time-picker";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function DeliveryScreen(props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [value, onChange] = useState("10:00");
  const [ordertype, setOrdertype] = useState("");
  const {
    cartTotal,
    totalUniqueItems,
    items,
    metadata,

    updateCartMetadata,
  } = props.useCart();
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(true);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [dispatchTime, setDispatchTime] = React.useState(moment());
  console.log(localStorage);

  const handleValueChange = (value) => {
    setDispatchTime(value);
    console.log("value" + value);

    updateCartMetadata({ "Pickup Time": value });
  };
  // console.log(items);
  console.log(localStorage.getItem("user-info"));
  // alert("here");
  var staff_data = JSON.parse(localStorage.getItem("user-info"));
  console.log(staff_data.id);
  // alert("hello");
  var val = [
    {
      "Order Details": metadata,
      total_qty: totalUniqueItems,
      total_amount: cartTotal,
      staff_data: staff_data.id,
    },
  ];
  items.forEach((el) => {
    var item = {
      name: el.english + "------",
      price: el.price,
      quantity: el.quantity,
    };
    val.push(item);
  });

  function clog(obj) {
    const varToString = Object.keys(obj)[0];
    console.log(varToString + " = " + obj[varToString]);
  }

  // console.log('here',JSON.stringify(val).replace(/[{}]/g, '-------'));
  var myOtherUrl =
    "https://wa.me/+918129602660?text=" +
    encodeURI(JSON.stringify(val).replace(/[{}]/g, "--------"));

  const submit_order = () => {
    const payload = {
      "Order Details": metadata,
      order_items: JSON.stringify(val),
      total_qty: totalUniqueItems,
      total_amount: cartTotal,
      staff_data: staff_data.id,
    };
    try {
      axios({
        method: "post",
        url: "https://qrorder.itrends.in/api/orderstore",
        data: payload, // you are sending body instead
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        window.open(myOtherUrl);
        // handle success

        // if (response.data.success === false) {
        //   alert("login credentials are invaild");
        // } else {
        //   // console.log(response.data);
        //   localStorage.setItem("user-info", JSON.stringify(response.data.data));
        //   navigate("/home");
        // }
      });
    } catch (e) {
      console.log(e);
    }
  };
  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <div>
      <div className="container2">
        <h5 class="font-color p-3 text-center">{t("Order type")}</h5>
        <img
          className=" image3"
          src="images/logout.png"
          alt="restauran"
          onClick={logout}
        />

        <div className="container2">
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div class="card-body ">
                <div className="container">
                  <div className="row ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              type="radio"
                              id="yes"
                              name="choose"
                              value="Delivery"
                              onClick={() => {
                                setOrdertype("delivery");
                              }}
                              style={{ padding: "10px" }}
                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{ fontSize: "13px", fontWeight: "700" }}
                            >
                              Delivery
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div
                            className="text-center font-color"
                            style={{ fontSize: "15px" }}
                          >
                            To get order delivered to your location
                          </div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve2 shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              type="radio"
                              id="yes"
                              name="choose"
                              value="Pickup"
                              onClick={() => {
                                setOrdertype("pickup");
                              }}
                              style={{ padding: "10px" }}
                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{ fontSize: "13px", fontWeight: "700" }}
                            >
                              Pickup
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div
                            className="text-center font-color"
                            style={{ fontSize: "15px" }}
                          >
                            To get your order ready before you arrive
                          </div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve2 shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check d-flex justify-content-center">
                            <input
                              type="radio"
                              id="yes"
                              name="choose"
                              value="Dine-In"
                              onClick={() => {
                                setOrdertype("dine-in");
                              }}
                              style={{ padding: "10px" }}
                            />
                            <label
                              class="form-check-label p-1 font-color"
                              for="flexCheckDefault "
                              style={{ fontSize: "13px", fontWeight: "700" }}
                            >
                              Dine-In
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center p-3">
                          <div
                            className="text-center font-color"
                            style={{ fontSize: "15px" }}
                          >
                            To get your order on your Table
                          </div>
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
        {ordertype === "pickup" && (
          <h5 class="font-color1 p-3 text-left">Select pickup time :</h5>
        )}
        {ordertype === "delivery" && (
          <h5 class="font-color1 p-3 text-left">Please enter your Address :</h5>
        )}
        {ordertype === "dine-in" && (
          <h5 class="font-color1 p-3 text-left">
            Please enter your Table number :
          </h5>
        )}

        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body ">
              {/* horizontal time card  */}

              {ordertype === "pickup" && (
                <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                  <div
                    class="row flex-nowrap overflow d-flex justify-content-center mb-5"
                    onClick={handleClick}
                  >
                    {/*                    
                    <TimePicker
        value={dispatchTime}
        onChange={handleValueChange}
        showSecond={false}
        allowEmpty
      /> */}
                    <TimePicker onChange={handleValueChange} value={value} />
                  </div>
                </div>
              )}
              {ordertype === "delivery" && (
                <form>
                  <div class="form-group p-1">
                    <label
                      for="exampleFormControlTextarea1"
                      className="p-3"
                    ></label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="You Can Add Your Address here"
                      onChange={(e) => {
                        updateCartMetadata({ deliveryAddress: e.target.value });
                      }}
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              )}
              {ordertype === "dine-in" && (
                <form>
                  <div class="form-group p-1">
                    <label
                      for="exampleFormControlTextarea1"
                      className="p-3"
                    ></label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="You Can Add Your Table number"
                      required
                      type="number"
                      onChange={(e) => {
                        updateCartMetadata({ tablenumber: e.target.value });
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
                <div className="font-color" style={{ fontWeight: "600" }}>
                  Net Total :
                </div>
                <div className="font-color" style={{ fontWeight: "800" }}>
                  {cartTotal}SR/-
                </div>
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
              <button
                onClick={() => submit_order()}
                className=" content-footer"
                style={{
                  backgroundColor: isActive ? "green" : "rgb(83, 94, 121)",
                  color: isActive ? "white" : "white",
                  textDecoration: "none",
                }}
              >
                {" "}
                Send Order to Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
