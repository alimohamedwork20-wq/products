import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import "./Products.css";
import PageTransition from "../PageTransition";
export default function Products({ item }) {
  const { cartItems, addCart } = useContext(CartContext);

  const isInCart = (id) => cartItems.some((cart) => cart.id === id);

  const handleShare = (item) => {
    const url = `${window.location.origin}/product/${item.id}`;

    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  function handelCart(item) {
    addCart(item);

    toast.success(
      <div className="stoast-wrapper">
        <img src={item.thumbnail} alt="" className="stoast-img" />
        <div className="stoast-content">
          <strong>{item.title}</strong>
          <p>Added to cart</p>

          <Link to="/cart">
            <button
              style={{
                background: "#228bed",
                padding: "10px",
                color: "white",
                borderRadius: "100px",
              }}
              className="toast-btn"
            >
              View
            </button>
          </Link>
        </div>
      </div>,
      { duration: 2500 },
    );
  }

  return (
    <PageTransition>
      {" "}
      <div className="card-products">
        <div
          className={`card card-item ${isInCart(item.id) ? "activItems" : ""}`}
          style={{ width: "18rem" }}
        >
          <div className="img-products">
            {" "}
            <Link to={`/product/${item.id}`}>
              <img src={item.thumbnail} className="card-img-top" alt="..." />
            </Link>
            <div className="icons">
              <i className="fa-regular fa-heart"></i>

              {!isInCart(item.id) ? (
                <i
                  onClick={() => handelCart(item)}
                  className="fa-solid fa-cart-arrow-down"
                ></i>
              ) : (
                <i className="fa-solid fa-cart-shopping"></i>
              )}

              <i
                onClick={() => handleShare(item)}
                className="fa-solid fa-share"
              ></i>
            </div>
          </div>
          <Link to={`/product/${item.id}`}>
            {" "}
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"></p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="price">
                <span>{item.price}$</span>
              </p>
              {isInCart(item.id) ? (
                <span className="badge text-bg-primary">in cart</span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
