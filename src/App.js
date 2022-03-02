import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
