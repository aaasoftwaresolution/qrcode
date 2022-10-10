import React from "react";
import { Link } from "react-router-dom";
import "../styles/order.css";
import { CartProvider, useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

export default function OrderScreen() {
  const { t } = useTranslation();
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

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <CartProvider>
        <div className="container2">
          <div className="">
            <div
              className="col-1 d-flex justify-content-start"
              style={{ position: "absolute" }}
            >
              <Link to={"/"}>
                <i class="fa  fa-arrow-left  p-3 font-color"></i>
              </Link>
            </div>

            <div className="col-11 d-flex justify-content-center">
              <h5 class="font-color  p-3 text-center">{t("My Orders")}</h5>
            </div>
            <img
              className=" image3"
              src="images/logout.png"
              alt="restauran"
              onClick={logout}
            />
          </div>
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div class="card-body height">
                <div className="row">
                  {items.map((item) => (
                    <>
                      <div className="col-6 ">
                        <div className="order-font text-start ">
                          {item.english}
                        </div>
                      </div>

                      <div className="col-6 d-flex justify-content-end">
                        <div className="p-1 prize-label1 button-colors p-1 ">
                          {item.quantity} x {item.price}
                          <div className="currency p-1"> S.R</div>
                        </div>
                      </div>
                      <div className="col-11 d-flex justify-content-center ">
                        <button
                          className="button-five m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <div className="button-five m-2"> {item.quantity}</div>
                        <button
                          className="button-five m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div className="col-1 d-flex justify-content-end">
                        <div
                          className="button-five m-3"
                          onClick={() => removeItem(item.id)}
                        >
                          <i class="fa-regular fa-trash-can"></i>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                <div className="d-flex justify-content-between p-3">
                  <div className="">{t("Total")}</div>
                  <div className="font-color" style={{ fontWeight: "800" }}>
                    {cartTotal}SR /-
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <form>
            <div class="form-group p-1">
              <label for="exampleFormControlTextarea1" className="p-3">
                {t("Notes")}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder={t("You Can Add Your Notes Here")}
                onChange={(e) => {
                  setCartMetadata({ Notes: e.target.value });
                }}
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
        <Link to={"/delivery"} useCart={useCart} t={t}>
          <div className="footer1">
            <div className=" fixed-bottom p-3">
              <div className="d-flex justify-content-center">
                {/* <button onClick={ (e) => {
          console.log(JSON.stringify(metadata, null, 2))
         }}>click</button>   */}
                <div
                  className="footer-color content-footer"
                  onClick={(e) => {
                    console.log(JSON.stringify(metadata, null, 2));
                  }}
                >
                  {" "}
                  Next
                </div>
              </div>
            </div>
          </div>
        </Link>
      </CartProvider>
    </>
  );
}
