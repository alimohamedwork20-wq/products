import { queries } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
      setSuggestions([]);
      setSearch("");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const location = useLocation();

  useEffect(() => {
    setSearch("");
    setSuggestions([]);
  }, [location.pathname]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data.products.slice(0, 5) || []));
  }, [search]);

  return (
    <div>
      <form onSubmit={handelSubmit} className="search-box">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search For Products"
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      {/* 🔥 عرض suggestions صح */}
      {search.trim() !== "" && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((item) => (
            <li
              key={item.id}
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              {" "}
              <img style={{ width: "40px" }} src={item.thumbnail}></img>{" "}
              <Link style={{ width: "100%" }} to={`product/${item.id}`}>
                <p key={item.id} style={{ cursor: "pointer", color: "black" }}>
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
