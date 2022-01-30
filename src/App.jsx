import './App.css'
import Header from './components/Header';
import Home from './components/Home'
import Tenzies from './components/tenzies/Tenzies'
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/mypf/tenzies' element={<Tenzies />} />
          <Route exact path='/mypf/' element={<Home />} />

        </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default App
