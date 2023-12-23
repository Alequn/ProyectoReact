import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Products, ProductsContainer } from './components';

function App() {

  return (
<BrowserRouter>
    <NavBar/>
    <ProductsContainer/>
</BrowserRouter>
  )
}

export default App
