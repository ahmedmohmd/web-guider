//* Imports
import Card from "./Card";

//* Roadmap JSX
function Roadmap({ roadmap, downloadLink }) {
  return (
    <div className="container relative flex flex-col items-center justify-center gap-5 p-2 py-5 pt-6 mx-auto lg:pt-10">
      <div className="inline-flex items-center justify-center w-full">
        <a
          href={downloadLink}
          download
          alt="download roadmap"
          class="font-semibold text-slate-700 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg sm:text-sm text-xs sm:px-5 sm:py-2.5 px-2 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 sm:h-6 sm:w-6 sm:mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4a5052"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
          <span className="flex items-start justify-start">Download</span>
        </a>
      </div>

      <img
        className="rounded-3xl"
        src={roadmap}
        alt="Frontend or Backend Roadmap"
      />
    </div>
  );
}

export default Roadmap;
