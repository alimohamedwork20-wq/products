import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import ProductsDetails from "./Page/ProductDetails/ProductsDetails";
import Cart from "./Page/Cart/Cart";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./Page/CategoryPages/CategoryPage";
import TopHeaders from "./Components/Headers/TopHeaders";
import ButtonHeaders from "./Components/Headers/ButtonHeaders";
import SearchPage from "./Page/SearchPage/SearchPage";
import Contact from "./Page/Contact/Contact";
import SuccesContent from "./Page/SuccesContent";
import Blog from "./Page/Blog/Blog";
import About from "./Page/About/About";
import Accessories from "./Page/Accessories/Accessories";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeaders />
        <ButtonHeaders />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#ffffff",
              borderRadius: "10px",
              border: "1px solid #c9c9c9",
              padding: "8px 10px",
              width: "fit-content",
              maxWidth: "300px",
              fontSize: "12px",
            },
          }}
        ></Toaster>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="products" element={<Home></Home>}></Route>
            <Route
              path="product/:id"
              element={<ProductsDetails></ProductsDetails>}
            ></Route>
            <Route
              path="products/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route path="products/cart" element={<Cart></Cart>}></Route>
            <Route
              path="products/contact"
              element={<Contact></Contact>}
            ></Route>
            <Route
              path="products/products/contact/succes-content"
              element={<SuccesContent></SuccesContent>}
            ></Route>
            <Route
              path="products/search"
              element={<SearchPage></SearchPage>}
            ></Route>
            <Route path="products/blog" element={<Blog></Blog>}></Route>
            <Route path="products/about" element={<About></About>}></Route>
            <Route
              path="products/accessories"
              element={<Accessories></Accessories>}
            ></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
