import React, { useState } from "react";

export default function Product_img({ product }) {
  const [active, setActive] = useState("");
  const mainImage = active || product?.thumbnail || "";
  return (
    <div className="imgs-item">
      <div className="big-img">
        <img src={mainImage} alt=""></img>
      </div>
      <div className="sm-img">
        {product?.images?.map((item, index) => (
          <img
            className={`${active === item ? "activ" : ""}`}
            onClick={() => setActive(item)}
            key={index}
            src={item}
            alt=""
          ></img>
        ))}
      </div>
    </div>
  );
}
