import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Products } from './components';

function App() {

  return (
<BrowserRouter>
    <NavBar/>
    <Products/>
</BrowserRouter>
  )
}

export default App
