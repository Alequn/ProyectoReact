import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Products, ProductsContainer } from './components';
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailCotainer';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {

  return (
<CartContextProvider>
<BrowserRouter>
<NavBar/>
  <Routes>
    <Route path='/' element={<ProductsContainer/>} />
    <Route path="/category/:category" element={<ProductsContainer/> } />
    <Route path="/product/:name" element={<ProductDetailContainer/> } />
    <Route path="/cart" element={<CartContainer/> } />
  </Routes>
</BrowserRouter>
</CartContextProvider>
  )
}

export default App
