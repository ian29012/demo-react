import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductList from './ProductList';
import ProductDetail from "./ProductDetail";
import CheckOut from "./checkout/CheckOut";
import { CartContext } from './CartContext.js';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
      <BrowserRouter>

      <CartContext.Provider value={{cartItems,setCartItems}}>

      <Link to="/">主頁</Link>
      <Link to="/check_out">購物車</Link>
      <Link to="/product">產品資料</Link>

        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail />}/>
          </Route>

          <Route path="/check_out" element={<CheckOut />} />
          <Route path="*" element={<p>找不到頁面</p>} />
        </Routes>

        </CartContext.Provider>

      </BrowserRouter>
  );
}

export default App;
