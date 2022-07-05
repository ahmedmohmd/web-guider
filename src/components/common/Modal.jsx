//* Imports
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";

//* Modal JSX
function Modal({ modalInfo, urls, modalId, npmInstallCommand }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      id={modalId}
      class="hs-modal hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div class="hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center p-4 border-b-2 border-b-slate-200/50">
            <h3 class="text-2xl font-bold text-slate-600">{modalInfo.title}</h3>
            <button
              type="button"
              class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-red-500 hover:bg-red-100 duration-300 transition-all text-sm"
              data-hs-modal={`#${modalId}`}
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3.5 h-3.5"
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
          </div>
          <div class="p-4 overflow-y-auto">
            <h3 className="mb-1 text-lg font-semibold text-slate-600">
              Description:
            </h3>

            <p class="text-slate-500">{modalInfo.description}</p>
          </div>
          {npmInstallCommand ? (
            <div className="relative p-4">
              <h3 className="pl-1 mb-1 text-lg font-semibold text-slate-600">
                Installation:
              </h3>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(npmInstallCommand);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className={
                  "hover:cursor-pointer absolute z-[100] p-[2px] rounded-md top-14 right-6 bg-white/80"
                }
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#475163"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#475163"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
              <SyntaxHighlighter
                class="rounded-lg text-start !p-4"
                language="bash"
                style={shadesOfPurple}
              >
                {npmInstallCommand}
              </SyntaxHighlighter>
            </div>
          ) : null}
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t-2 border-t-slate-200/50">
            {urls.vscodeUrl ? (
              <a
                target="_blank"
                href={urls.vscodeUrl}
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none transition-all text-sm"
                data-hs-modal={`#${modalId}`}
              >
                VS Code URL
              </a>
            ) : urls.npmUrl ? (
              <a
                target="_blank"
                href={urls.npmUrl}
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none  transition-all text-sm"
                data-hs-modal={`#${modalId}`}
              >
                NPM URL
              </a>
            ) : null}
            {urls.offecialUrl ? (
              <a
                target="_blank"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl border-2 border-violet-200 font-semibold text-violet-500 hover:text-white hover:bg-violet-500 hover:border-violet-500 focus:outline-none transition-all text-sm"
                href={urls.offecialUrl}
              >
                Offecial Website
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
