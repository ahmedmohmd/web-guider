//* Imports
import { useLayoutEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Backend from "./components/backend/Backend";
import NavBar from "./components/common/NavBar";
import NotFound from "./components/error/NotFound";
import Frontend from "./components/frontend/Frontend";
import Home from "./components/home/Home";

//* App JSX
function App() {
  const scrollBtn = useRef(null);

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        scrollBtn.current.style.right = "20px";
      } else {
        scrollBtn.current.style.right = "-75px";
      }
    });

    window.onscroll = handleScroll();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/frontend/*" element={<Frontend />} />
        <Route
          path="/frontend"
          element={<Navigate replace to="/frontend/vscode" />}
        />
        <Route path="/backend/*" element={<Backend />} />
        <Route
          path="/backend"
          element={<Navigate replace to="/backend/vscode" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button
        onClick={handleScroll}
        ref={scrollBtn}
        className="fixed p-3 text-white duration-300 animate-scrollBtn scroll-btn -right-16 sm:bottom-10 bottom-6 bg-gradient-to-r from-purple-500/90 to-pink-500/90 hover:bg-gradient-to-l"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );

  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}

export default App;
