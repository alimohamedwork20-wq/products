import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SlideProducts.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import CategoryPage from "../../Page/CategoryPages/CategoryPage";
export default function SlideProducts({ title, dis, style, api, path }) {
  const [category, setCategory] = useState([]);
  const { cartItems, addCart, toggleFavorite, favoriteItems } =
    useContext(CartContext);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${api}`)
      .then((res) => res.json())
      .then((data) => setCategory(data.products || []));
  }, [api]);
  const isInCart = (id) => cartItems.some((cart) => cart.id === id);
  const isInFav = (id) =>
    Array.isArray(favoriteItems) && favoriteItems.some((fav) => fav.id === id);
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
  return (
    <div style={style} className="slide slide-product">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>{dis}</p>
        </div>

        <Swiper
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          loop={category.length > 5}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* 🔥 لو مفيش منتجات → Loading لكل كارت */}
          {category.length === 0
            ? Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Loading />
                </SwiperSlide>
              ))
            : category.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className={`products ${isInCart(item.id) ? "activItems" : ""}`}
                  >
                    <div className="img-products">
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="link"
                        to={`${path}/${item.id}`}
                      >
                        <img src={item.thumbnail} alt={item.title} />
                      </Link>

                      <div className="aicons-action">
                        <i
                          onClick={() => toggleFavorite(item)}
                          className={
                            isInFav(item.id)
                              ? "fa-solid fa-heart"
                              : "fa-regular fa-heart"
                          }
                        />

                        {!isInCart(item.id) ? (
                          <i
                            onClick={() => handelCart(item)}
                            className="fa-solid fa-cart-arrow-down"
                          ></i>
                        ) : (
                          <Link to={"/cart"}>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </Link>
                        )}

                        <i
                          onClick={() => handleShare(item)}
                          className="fa-solid fa-share"
                        ></i>
                      </div>
                    </div>
                    <Link
                      to={`${path}/${item.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {" "}
                      <p className="name-product">{item.title}</p>
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
                    </Link>
                    {isInCart(item.id) ? (
                      <span
                        style={{ width: "fit-content" }}
                        className="badge text-bg-primary"
                      >
                        in cart
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}
