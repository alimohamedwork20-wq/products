import React, { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import "./cart.css";
import PageTransition from "../../Components/PageTransition";
import ArrowUp from "../../Components/ArrowUp";
export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    increaseQuantityMin,
    Delete,
    DeleteAll,
  } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <PageTransition>
      {" "}
      <div className="checkout">
        <div className="ordersummary">
          <h1>Order Summary</h1>
          <p
            onClick={DeleteAll}
            style={{
              textAlign: "right",
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            delete all
          </p>

          <div className="items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="item-cart">
                  <div className="item-img">
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="content">
                      <h5 className="title">{item.title}</h5>
                      <p className="price">
                        {(item.price * item.quantity).toFixed(2)}$
                      </p>
                      <div className="control">
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                        <span className="quanty">{item.quantity}</span>
                        <button onClick={() => increaseQuantityMin(item.id)}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="delete-item">
                    <i
                      onClick={() => Delete(item.id)}
                      className="fa-solid fa-trash-can"
                    ></i>
                  </button>
                </div>
              ))
            ) : (
              <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                Your cart is empty 🛒
              </h3>
            )}
          </div>
          <div className="btn-summary">
            <div className="shop-table">
              <p>Total:</p>
              <span className="total-checkout">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="btn-order">
            <button type="button">Place Order</button>
          </div>
        </div>
      </div>
      <ArrowUp></ArrowUp>
    </PageTransition>
  );
}
