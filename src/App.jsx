import { CharacterListContainer } from "./components/CharacterListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SeeMoreContainer } from "./components/SeeMoreContainer/SeeMoreContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
<BrowserRouter>

    <NavBar/>
    <Routes>
      <Route path="/" element={<CharacterListContainer/> } />
      <Route path="/gender/:gender" element={<CharacterListContainer/> } />
      <Route path="/character/:id" element={<SeeMoreContainer/> } />
    </Routes>

</BrowserRouter>
  )
}

export default App
