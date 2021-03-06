import { Link } from "react-router-dom";
import "../../styles/components/home/getstarted.scss";

//* Get Started
function GetStarted() {
  return (
    <div
      className={"pb-32 pt-16 lg:pt-0 bg-white get-started"}
      id="get-started"
    >
      <div className="container mx-auto">
        <div className="pb-8 text-center">
          <div className="relative flex items-center justify-center">
            <div
              className={
                "relative flex items-center justify-center home-heading"
              }
            >
              <span
                className={
                  "text-md sm:text-lg z-10 absolute -top-2 px-5 py-5  sm:py-6 bg-cyan-300/30 text-start -left-3 sm:-top-3 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl hash"
                }
              ></span>
              <span className="z-20 mb-3 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl lg:font-extrabold text-slate-600">
                Choose Stack
              </span>
            </div>
          </div>
          <p className="text-slate-500">
            Choose Your Stack if You are{" "}
            <span className="mx-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Frondend
            </span>
            or
            <span className="mx-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
              Backend
            </span>
            Web Developer.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 px-4 lg:gap-20">
          <Link
            to="/frontend/vscode"
            className={
              "relative w-1/2 overflow-hidden duration-500 shadow-md sm:w-1/5 hover:shadow-xl bg-slate-100 rounded-3xl grayscale hover:grayscale-0 home-heading"
            }
          >
            <span
              className={
                "text-sm whitespace-nowrap sm:text-lg z-10 absolute px-4 py-2 sm:px-6 sm:py-3  font-bold text-white bg-[#ea8763]/50 text-start left-0 top-0 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl hash"
              }
            >
              # Frontend
            </span>
            <img
              src="/images/frontend-image.jpg"
              className="max-w-full"
              alt="Frontend Icon"
            />
          </Link>

          <Link
            to="/backend/vscode"
            className={
              "relative w-1/2 overflow-hidden duration-500 shadow-md sm:w-1/5 hover:shadow-xl bg-slate-100 rounded-3xl grayscale hover:grayscale-0 home-heading"
            }
          >
            <span
              className={
                "text-sm whitespace-nowrap sm:text-lg z-10 absolute px-4 py-2 sm:px-6 sm:py-3  font-bold text-white bg-[#8c60f6]/50 text-start left-0 top-0 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl hash"
              }
            >
              # Backend
            </span>
            <img
              src="/images/backend-image.jpg"
              className="max-w-full"
              alt="Backend Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
