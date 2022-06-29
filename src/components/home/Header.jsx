import styled from "../../styles/Home.module.scss";

function Header() {
  return (
    <div className={styled.header + " h-full"}>
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full px-4 pt-5 mx-auto lg:gap-0 lg:flex-row lg:justify-between lg:items-center lg:pt-16 lg:pb-32 sm:max-w-xl md:max-w-full">
          <div className="order-2 max-w-xl mx-auto text-center break-words lg:order-1 lg:text-start lg:max-w-screen-xl">
            <div className="h-full mb-16 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl xl:text-7xl sm:leading-none">
                  Speed Your Development Process Now.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Website Guider is Your Main Helper to lead you to find Your
                  Best Suitable Tools to use it in Your Projects.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  href="#get-started"
                  class="text-white bg-gradient-to-r from-purple-500/75 to-pink-500/75 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-xl lg:rounded-2xl text-sm lg:text-md lg:px-7 lg:py-4 px-5 py-3 text-center duration-500"
                >
                  Quick Start
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 h-full lg:order-2 lg:w-2/3 xl:w-1/2 lg:justify-start lg:items-center">
            <img
              src="/images/header-image.svg"
              className="object-contain object-top w-full h-64 max-w-xl rounded-3xl lg:h-auto lg:max-w-screen-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
