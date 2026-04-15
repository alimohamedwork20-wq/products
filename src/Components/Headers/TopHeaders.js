import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Headers.css";
import { CartContext } from "../Context/CartContext";
import Search from "../Search/Search";
import toast from "react-hot-toast";
export default function TopHeaders() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems, favoriteItems, addCart, DeleteF } =
    useContext(CartContext);
  const number = cartItems.length;
  const numberF = favoriteItems.length;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isInCart = (id) => cartItems.some((cart) => cart.id === id);

  function handelCart(item) {
    addCart(item);
    toast.success(
      <div className="stoast-wrapper">
        <img src={item.thumbnail} className="stoast-img" />

        <div className="stoast-content">
          <strong>{item.title}</strong>
          <p>Added to cart</p>

          <Link to="/cart">
            <button className="btn">View</button>
          </Link>
        </div>
      </div>,
      { duration: 3000 },
    );
  }
  const handleShare = (item) => {
    const url = `${window.location.origin}/product/${item.id}`;

    if (navigator.share) {
      navigator.share({
        title: item?.title,
        text: item?.description,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  };
  return (
    <div
      style={{
        background: isScrolled ? "#f2f2f2" : "transparent",
        borderBottom: isScrolled ? "#cccccc solid 1px" : "transparent",
        transition: "0.15s",
      }}
      className="top-header"
    >
      <div className="container">
        <Link className="logo" to="/">
          <img src={process.env.PUBLIC_URL + "products/img/logo.png"} />
        </Link>

        <Search></Search>

        <div className="header-icons">
          <div className="icon">
            <i
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              className="fa-regular fa-heart"
            ></i>
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              className="count"
            >
              {numberF}
            </span>
          </div>

          <div className="icon">
            <Link to={"cart"}>
              <i className="text-black fa-solid fa-cart-shopping"></i>
            </Link>
            <span className="count">{number}</span>
          </div>
        </div>
      </div>

      {/* offCanfase */}

      <>
        <div
          style={{ transition: "0.3s" }}
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="true"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Favorite
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div>
              {favoriteItems.length != 0 ? (
                favoriteItems.map((item, index) => (
                  <div
                    key={index}
                    className="card"
                    style={{ width: "16rem", margin: "15px auto" }}
                  >
                    <img
                      style={{
                        width: "200px",
                        paddingTop: "20px",
                        objectFit: "cover",
                        margin: "auto",
                      }}
                      src={item.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="stars">
                        {" "}
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span
                        style={{ fontSize: "20px", fontWeight: "700" }}
                        className="price"
                      >
                        {item.price}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {isInCart(item.id) ? (
                          <Link
                            to={"/cart"}
                            style={{ margin: "10px 0" }}
                            className="btn btn-primary"
                          >
                            View Cart
                          </Link>
                        ) : (
                          <Link
                            onClick={() => handelCart(item)}
                            style={{ margin: "10px 0" }}
                            className="btn btn-primary"
                          >
                            Add Cart
                          </Link>
                        )}
                        <Link
                          style={{ transform: "translateY(10%)" }}
                          to={`product/${item.id}`}
                        >
                          {" "}
                          <i
                            style={{
                              fontSize: "20px",
                              color: "#1285e9",
                              cursor: "pointer",
                            }}
                            className="fa-solid fa-eye"
                          ></i>
                        </Link>

                        <i
                          onClick={() => handleShare(item)}
                          style={{
                            fontSize: "20px",
                            color: "#1285e9",
                            cursor: "pointer",
                          }}
                          className="fa-solid fa-share"
                        ></i>
                        <i
                          onClick={() => DeleteF(item.id)}
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          className="fa-solid fa-trash-can"
                        ></i>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "20%",
                    fontSize: "20px",
                  }}
                >
                  Your favorite is empty
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
