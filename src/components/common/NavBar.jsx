//* Imports
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../../styles/components/common/navbar.scss";

//* NavBar JSX
function NavBar() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      setScrollValue(this.scrollY);
    };
  }, [scrollValue]);

  return (
    <div
      className={
        "navbar sticky top-0 z-20 duration-100 shadow-md w-full " +
        (scrollValue <= 0 ? "bg-violet-500" : "bg-violet-500/90")
      }
    >
      <header className="container z-50 flex flex-wrap w-full py-4 mx-auto text-sm md:py-2 sm:justify-start sm:flex-nowrap">
        <nav
          className="w-full px-4 mx-auto sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="inline-flex items-center text-lg font-semibold gap-x-2"
              to="/"
            >
              <img
                src="/images/logo.png"
                className="w-10 h-10"
                alt="Website Logo"
              />
              <span className="w-36 text-slate-100">Web Guider</span>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className={
                  "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle hover:bg-violet-400/90 focus:outline-none transition-all text-sm " +
                  (scrollValue <= 0 ? "bg-violet-500" : "bg-violet-500/90")
                }
                data-hs-collapse="#navbar-image-and-text-1"
                aria-controls="navbar-image-and-text-1"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-5 h-5 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="#e2e8f0"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden w-5 h-5 hs-collapse-open:block"
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
            className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 font-semibold text-center text-white text-md sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink
                className="p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                to={"/"}
              >
                Home
              </NavLink>

              {/* <NavLink
                className="p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                to={"/About"}
              >
                About
              </NavLink> */}
              <div
                className="relative flex flex-col items-center justify-center gap-2 hs-dropdown lg:flex-row"
                data-hs-dropdown-trigger="hover"
              >
                <button
                  id="hs-dropdown-hover-event"
                  type="button"
                  className="inline-flex items-center justify-center w-full gap-2 p-3 text-sm font-semibold align-middle transition-all rounded-md shadow-sm rounded-xl hs-dropdown-toggle hover:bg-violet-400/80"
                >
                  Actions
                  <svg
                    className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-white"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 flex justify-center items-center flex-col hs-mega-menu-content hs-mega-menu-open:opacity-100 opacity-0 top-full translate-y-1 gap-3 hidden z-10 rounded-xl before:absolute before:-top-5 before:left-0 before:w-full before:h-5 w-full bg-violet-400/60 sm:bg-violet-500/80 p-3 sm:w-48 sm:transition-all sm:absolute sm:shadow-md sm:duration-300"
                  aria-labelledby="hs-dropdown-hover-event"
                >
                  <NavLink
                    className="w-full p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                    to={"/frontend"}
                  >
                    Frontend
                  </NavLink>
                  <NavLink
                    className="w-full p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                    to={"/backend"}
                  >
                    Backend
                  </NavLink>
                </div>
              </div>
              {/* <div
                data-hs-dropdown-trigger="hover"
                className="flex flex-col items-center justify-center w-full gap-2 hs-mega-menu lg:w-auto"
              >
                <button
                  id="hs-dropdown-hover-event"
                  type="button"
                  className="flex items-center justify-center gap-1 font-semibold text-center text-white text-md hs-mega-menu-toggle"
                >
                  <span className="text-md">Track</span>{" "}
                  <IoMdArrowDropdown className="text-xl text-white" />
                </button>

                <div
                  className="flex justify-center items-center flex-col hs-mega-menu-content hs-mega-menu-open:opacity-100 opacity-0 top-full translate-y-1 gap-3 hidden z-10 rounded-lg before:absolute before:-top-5 before:left-0 before:w-full before:h-5 w-full bg-violet-400/60 lg:bg-violet-500/80 p-3 sm:w-48 sm:transition-all transition-[opacity,margin] sm:absolute sm:shadow-md sm:duration-300 dark:bg-gray-800"
                  aria-labelledby="hs-mega-menu-basic-dr"
                >
                  <NavLink
                    className="w-full p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                    to={"/frontend"}
                  >
                    Frontend
                  </NavLink>
                  <NavLink
                    className="w-full p-3 duration-300 rounded-xl hover:bg-violet-400/80"
                    to={"/backend"}
                  >
                    Backend
                  </NavLink>
                </div>
              </div> */}

              <a
                href="https://github.com/ahmedmohmd/web-guider/tree/main"
                target="_blank"
                className="flex items-center justify-center pt-3 border-t-2 sm:pt-0 sm:pl-3 sm:border-l-2 sm:border-t-0 border-slate-200/50"
              >
                <div className="p-3 duration-300 rounded-full hover:bg-violet-400/50">
                  <BsGithub className="text-3xl" />
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
