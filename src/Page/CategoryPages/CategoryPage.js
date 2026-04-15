import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../Components/Products/Products";
import PageTransition from "../../Components/PageTransition";
import ArrowUp from "../../Components/ArrowUp";
import Loading from "../../Components/Loading";
export default function CategoryPage() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const path = location.pathname;
  const lastPart = path.split("/").filter(Boolean).pop();
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products${path}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setLoading(false));
  }, [path]);
  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div style={{ borderBottom: "1px solid #bdbdbd" }}>
            {" "}
            <h1
              style={{
                textTransform: "capitalize",
                color: "#1d99f2",
                marginTop: "30px",
              }}
            >
              {lastPart} {products.length}
            </h1>
            <h5
              style={{
                borderBottom: "1px solid #2c8ae7",
                margin: "0",
                padding: "10px 0",
                width: "fit-content",
              }}
            >
              product:
            </h5>
          </div>

          <div className="products">
            {products.map((item, index) =>
              loading ? (
                <p style={{ transform: "translateY(120%)" }}>
                  <Loading></Loading>
                </p>
              ) : (
                <Products key={index} item={item}></Products>
              ),
            )}
          </div>
        </div>
      </div>
      <ArrowUp></ArrowUp>
    </PageTransition>
  );
}
