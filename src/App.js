import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import About from "./components/About";
import WrongPath from "./components/WrongPath";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
