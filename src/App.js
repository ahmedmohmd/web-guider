//* Imports
import { Routes, Route } from "react-router-dom";
import Backend from "./components/backend/Backend";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Frontend from "./components/frontend/Frontend";
import Home from "./components/home/Home";

//* App JSX
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/frontend/*" element={<Frontend />} />
        <Route path="/backend/*" element={<Backend />} />
      </Routes>
    </div>
  );
}

export default App;
