import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Javascript from "./pages/Javascript";
import Css from "./pages/Css";
import Bootstrap from "./pages/Bootstrap";
import Rjs from "./pages/Rjs";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/reactjs" element={<Rjs />} />
        <Route exact path="/javascript" element={<Javascript />} />
        <Route exact path="/css" element={<Css />} />
        <Route exact path="/bootstrap" element={<Bootstrap />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
