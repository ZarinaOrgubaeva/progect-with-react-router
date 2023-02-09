import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MyCart } from "./pages/MyCart";
import { MyOrders } from "./pages/MyOrders";
import { ProductDetails } from "./pages/ProductItem";
import { Products } from "./pages/Products";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="order" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;
