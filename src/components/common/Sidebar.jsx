import { NavLink } from "react-router-dom";

function Sidebar({ field }) {
  return (
    <div className="min-h-screen border-r border-gray-200">
      <div className="lg:sticky lg:top-12">
        <button
          type="button"
          class="animate-pulse fixed lg:hidden top-1/2 left-2 text-gray-500 hover:text-gray-600"
          data-hs-sidebar="#docs-sidebar"
          aria-controls="docs-sidebar"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#8c60f6"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>

        <div
          id="docs-sidebar"
          class="h-full fixed lg:static z-[60] hs-sidebar hs-sidebar-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden lg:block top-0 left-0  lg:z-[10] w-64 bg-white  pt-7 pb-10 overflow-y-auto scrollbar-y lg:translate-x-0 lg:right-auto lg:bottom-0 "
        >
          <nav class="p-6 w-full flex flex-col flex-wrap">
            <ul class="sidebar space-y-1.5 flex flex-col gap-2 justify-center items-start">
              <li>
                <NavLink
                  class="flex items-center gap-x-3 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 "
                  to={`/${field}/vscode`}
                >
                  <div className="w-5 h-5">
                    <img src="/images/icons/vscode-icon.svg" alt="" />
                  </div>
                  <span class="ml-3">VS Code Tools</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  class="flex items-center gap-x-3 text-sm text-slate-700 rounded-md hover:bg-gray-100  dark:text-slate-400 "
                  to={`/${field}/websites`}
                >
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="#8c60f6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="ml-3">Websites</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  class="flex items-center gap-x-3 text-sm text-slate-700 rounded-md hover:bg-gray-100  dark:text-slate-400 "
                  to={`/${field}/packages`}
                >
                  <div className="w-5 h-5">
                    <img src="/images/icons/package-icon.svg" alt="" />
                  </div>
                  <span class="ml-3">{"Packages & Libs"}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  class="flex items-center gap-x-3 text-sm text-slate-700 rounded-md hover:bg-gray-100  dark:text-slate-400 "
                  to={`/${field}/programms`}
                >
                  <div className="w-5 h-5">
                    <img src="/images/icons/program-icon.svg" alt="" />
                  </div>
                  <span class="ml-3">Programms</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
