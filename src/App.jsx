import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Products, ProductsContainer } from './components';
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailCotainer';
import { ProductDetail } from './components/ProductDetail/ProductDetail';

function App() {

  return (
<BrowserRouter>
<NavBar/>
  <Routes>
    {/* <Route path='/' element={<ProductsContainer/>} /> */}
    <Route path='/' element={<ProductsContainer/>} />
    <Route path="/category/:category" element={<ProductsContainer/> } />
    <Route path="/product/:name" element={<ProductDetailContainer/> } />
  </Routes>
</BrowserRouter>
  )
}

export default App
