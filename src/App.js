//* Imports
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Home from "./components/home/Home";

//* App JSX
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
