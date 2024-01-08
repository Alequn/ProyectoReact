import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Products, ProductsContainer } from './components';
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailCotainer';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
<CartContextProvider>
<BrowserRouter>
<NavBar/>
  <Routes>
    <Route path='/' element={<ProductsContainer/>} />
    <Route path="/category/:category" element={<ProductsContainer/> } />
    <Route path="/product/:name" element={<ProductDetailContainer/> } />
    <Route path="/cart" element={<Cart/> } />
  </Routes>
</BrowserRouter>
</CartContextProvider>
  )
}

export default App
