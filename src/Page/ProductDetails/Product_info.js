import React, { useContext, useState } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Product_info({ product }) {
  const { cartItems, addCart, toggleFavorite, favoriteItems } =
    useContext(CartContext);
  const isInCart = cartItems.some((item) => item.id === product?.id);

  function handelCart() {
    addCart(product);
    toast.success(
      <div className="stoast-wrapper">
        <img src={product.thumbnail} className="stoast-img" />

        <div className="stoast-content">
          <strong>{product.title}</strong>
          <p>Added to cart</p>

          <Link to="/cart">
            <button className="btn">View</button>
          </Link>
        </div>
      </div>,
      { duration: 3000 },
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Website",
        text: "Check this out!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser");
    }
  };
  const isInFav = (id) =>
    Array.isArray(favoriteItems) && favoriteItems.some((fav) => fav.id === id);
  return (
    <div className="item-name">
      <h1>{product?.title}</h1>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="price">
        <span>{product?.price}$</span>
      </p>
      <div className="name-details">
        <p style={{ fontWeight: "600", color: "#676767" }}>
          Availability: <span>{product?.availabilityStatus}</span>
        </p>
        <p style={{ fontWeight: "600", color: "#676767" }}>
          Brand: <span>{product?.brand}</span>
        </p>
        <p className="dis">{product?.description}</p>
        <h3>
          <span>
            Hurry Up! Only <span className="stock">{product?.stock}</span>{" "}
            Products Left im Stock.
          </span>
        </h3>
        {isInCart ? (
          <button className="btn">
            <Link style={{ color: "white" }} to={"/cart"}>
              View cart <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </button>
        ) : (
          <button onClick={handelCart} className="btn">
            Add to cart <i className="fa-solid fa-cart-arrow-down"></i>
          </button>
        )}
        <div className="icons">
          {" "}
          <i
            className={
              isInFav(product.id) ? "fa-solid fa-heart" : "fa-regular fa-heart "
            }
            onClick={() => toggleFavorite(product)}
          ></i>
          <i onClick={handleShare} className="fa-solid fa-share"></i>
        </div>
      </div>
    </div>
  );
}
