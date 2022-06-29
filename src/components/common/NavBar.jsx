//* Imports
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "../../styles/NavBar.module.scss";

function NavBar() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      setScrollValue(this.scrollY);
      console.log(scrollValue);
    };
  }, [scrollValue]);

  return (
    <div
      className={
        styled.navbar +
        " sticky top-0 z-10 duration-100 " +
        (scrollValue <= 0 ? "bg-violet-500" : "bg-violet-700/90")
      }
    >
      <header class="container mx-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav
          class=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <a
              class="inline-flex items-center gap-x-2 text-lg font-semibold"
              href="#"
            >
              <img src="/images/logo.png" className="w-10 h-10" alt="" />
              <span className="w-64 text-slate-200">Web Dev Guider</span>
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class={
                  "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium text-gray-700 shadow-sm align-middle hover:bg-violet-400/90 focus:outline-none transition-all text-sm " +
                  (scrollValue <= 0 ? "bg-violet-500" : "bg-violet-700/90")
                }
                data-hs-collapse="#navbar-image-and-text-1"
                aria-controls="navbar-image-and-text-1"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden w-5 h-5"
                  width="16"
                  height="16"
                  fill="#e2e8f0"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden w-5 h-5"
                  width="16"
                  height="16"
                  fill="#e2e8f0"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-1"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="text-center text-md font-semibold text-white flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink
                className="p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className="p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                to={"/About"}
              >
                About
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
