import styled from "../../styles/Home.module.scss";

//* Get Started
function GetStarted() {
  return (
    <div className={"pb-16 "} id="get-started">
      <div className="container mx-auto">
        <div className="pb-8 text-center">
          <div
            className={
              "relative flex items-center justify-center " + styled.heading
            }
          >
            <div className="relative flex items-center justify-center">
              <span
                className={
                  "text-md sm:text-lg z-10 absolute -top-2 px-5 py-5 sm:px-6 sm:py-6 bg-cyan-300/30 text-start -left-3 sm:-top-3 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl " +
                  styled.hash
                }
              ></span>
              <span className="z-20 mb-3 text-3xl font-extrabold lg:text-5xl text-slate-600">
                Choose Track
              </span>
            </div>
          </div>
          <p className="text-slate-500">
            Choose Your Track if You are{" "}
            <span class="mx-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Frondend
            </span>
            or
            <span class="mx-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              Backend
            </span>
            web Developer.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 p-4 lg:gap-20">
          <a
            href="#"
            className="w-1/2 p-5 duration-500 shadow-md sm:w-1/5 hover:shadow-xl bg-slate-100 rounded-3xl"
          >
            <img
              src="/images/frontend-image.png"
              className="max-w-full"
              alt=""
            />
          </a>
          <a
            href="#"
            className="w-1/2 p-5 duration-500 shadow-md sm:w-1/5 hover:shadow-xl bg-slate-100 rounded-3xl"
          >
            <img
              src="/images/backend-image.png"
              className="max-w-full"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
