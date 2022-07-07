//* Imports
import { NavLink } from "react-router-dom";
import "../../styles/components/common/sidebar.scss";

//* Sidebar JSX
function Sidebar({ field }) {
  return (
    <div className="border-r-none lg:border-r-2 lg:border-r-violet-200/50 bg-violet-500/90 lg:bg-white">
      <div className="lg:sticky lg:top-14">
        <button
          type="button"
          className="p-3 z-[10] animate-arrow fixed lg:hidden top-1/2 left-2 rounded-full duration-500 hover:bg-violet-200/50"
          data-hs-sidebar="#docs-sidebar"
          aria-controls="docs-sidebar"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
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
          className="pt-12 bg-violet-500/90 lg:bg-white  h-full fixed lg:static z-[60] hs-sidebar hs-sidebar-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden lg:block top-0 left-0  lg:z-[10] w-64 bg-white  lg:pt-7 pb-10 overflow-y-auto scrollbar-y lg:translate-x-0 lg:right-auto lg:bottom-0 "
        >
          <button
            data-hs-sidebar="#docs-sidebar"
            className="absolute p-2 text-white duration-300 rounded-lg top-4 right-4 hover:bg-violet-400 "
          >
            <svg
              className="w-3.5 h-3.5"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <nav className="flex flex-col flex-wrap w-full p-6">
            <ul className="font-mitr  sidebar space-y-1.5 flex flex-col gap-2 justify-center items-start">
              <li>
                <NavLink
                  className={
                    "vscode-link flex items-center gap-x-3 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 vscode-link"
                  }
                  to={`/${field}/vscode`}
                >
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-white lg:fill-violet-500 icon icon-tabler icon-tabler-brand-visual-studio"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
                    </svg>
                  </div>
                  <span className="flex items-center justify-start ">
                    VS Code Tools
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center text-sm rounded-md packages-link gap-x-3 text-slate-700 hover:bg-gray-100"
                  to={`/${field}/packages`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <span className="flex items-center justify-start ">
                    {"Packages & Libs"}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center text-sm rounded-md websites-link gap-x-3 text-slate-700 hover:bg-gray-100"
                  to={`/${field}/websites`}
                >
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 lg:fill-violet-500 fill-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="flex items-center justify-start ">
                    Websites
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center text-sm rounded-md programms-link gap-x-3 text-slate-700 hover:bg-gray-100"
                  to={`/${field}/programms`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 lg:stroke-violet-500 stroke-white icon icon-tabler icon-tabler-file-code-2"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12h-1v5h1" />
                      <path d="M14 12h1v5h-1" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    </svg>
                  </div>
                  <span className="flex items-center justify-start ">
                    Programms
                  </span>
                </NavLink>
              </li>
              <li className="relative !mt-2">
                <span className="absolute -top-3 -right-5 inline-flex items-center gap-1.5 py-1 px-2.5 border-[2px] lg:border-[3px] border-white rounded-full text-[12px] font-medium  bg-yellow-200 text-yellow-800">
                  New!
                </span>

                <NavLink
                  className="flex items-center text-sm rounded-md programms-link gap-x-3 text-slate-700 hover:bg-gray-100"
                  to={`/${field}/chrome`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 lg:stroke-violet-500 stroke-white icon icon-tabler icon-tabler-file-code-2"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="9" x2="20.4" y2="9" />
                      <line
                        x1="12"
                        y1="9"
                        x2="20.4"
                        y2="9"
                        transform="rotate(120 12 12)"
                      />
                      <line
                        x1="12"
                        y1="9"
                        x2="20.4"
                        y2="9"
                        transform="rotate(240 12 12)"
                      />
                    </svg>
                  </div>
                  <span className="flex items-center justify-start whitespace-nowrap">
                    Chrome Extensions
                  </span>
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
