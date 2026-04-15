import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Headers.css";
export default function ButtonHeaders() {
  const [productsList, setProductsList] = useState([]);
  const [categoryActiv, setCategoryActiv] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setCategoryActiv(false);
  }, [window.location.pathname]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setProductsList(data));
  }, []);
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  const path = useLocation();
  // عرض الشاشه
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navRef = useRef();
  return (
    <div className="buttom-header">
      <div className="container">
        <nav ref={navRef}>
          <div className="category-nav">
            {" "}
            <div
              onClick={() => setCategoryActiv(!categoryActiv)}
              className="category-btn"
            >
              <i className="fa-solid fa-bars"></i>
              <p>Browse Category</p>
              {!categoryActiv ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-sort-up"></i>
              )}
            </div>
            <div
              className={
                categoryActiv ? "category-select actives" : "category-select"
              }
            >
              {productsList.map((item, index) => (
                <Link key={index} to={`category/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {width < 1090 && (
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          )}
          {width > 1090 ? (
            <div className="category-list">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={path.pathname === item.link ? "active" : ""}
                >
                  <Link to={item.link}> {item.title}</Link>
                </li>
              ))}
            </div>
          ) : (
            <div className={`category-list ${menuOpen ? "open" : ""}`}>
              {navLinks.map((item, index) => (
                <Link
                  style={{ color: "white" }}
                  onClick={() => setMenuOpen(false)}
                  to={item.link}
                >
                  <li
                    key={index}
                    className={path.pathname === item.link ? "active" : ""}
                    // يقفل بعد الضغط
                  >
                    {" "}
                    {item.title}
                  </li>
                </Link>
              ))}
            </div>
          )}

          <div className="sign-icons">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <i className="fa-solid fa-user-plus"></i>
          </div>
        </nav>
      </div>
    </div>
  );
}
