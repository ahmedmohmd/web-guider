//* Imports
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

//* Footer JSX
function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-100 body-font">
      <div className="container flex flex-col items-center px-4 py-8 mx-auto sm:flex-row">
        <a
          href="#"
          className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <img
            src="/images/tab-icon.png"
            className="w-10 h-10"
            alt="Tab Icon Image"
          />
          <span className="ml-2 text-xl font-semibold text-slate-500">
            Web Guider
          </span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2022 Ahmed Mohamed
        </p>
        <span className="inline-flex items-center justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <div className="flex items-center justify-center gap-2 text-xl social-icons ">
            <a
              href="https://www.facebook.com/a7m3dmohmd/"
              target="_blank"
              className="p-2 duration-500 bg-gray-400 rounded-xl hover:bg-facebook-color"
            >
              <BsFacebook className="text-white" />
            </a>
            <a
              href="https://twitter.com/a7m3D_000"
              target="_blank"
              className="p-2 duration-500 bg-gray-400 rounded-xl hover:bg-twitter-color"
            >
              <BsTwitter className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedmohmd/"
              target="_blank"
              className="p-2 duration-500 bg-gray-400 rounded-xl hover:bg-linkedin-color"
            >
              <BsLinkedin className="text-white" />
            </a>
            <a
              href="https://github.com/ahmedmohmd"
              target="_blank"
              className="p-2 duration-500 bg-gray-400 rounded-xl hover:bg-github-color"
            >
              <BsGithub className="text-white" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
