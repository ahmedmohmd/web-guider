//* Imports
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

//* Footer JSX
function Footer() {
  return (
    <footer class="text-gray-600 body-font bg-gray-100">
      <div class="container px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="/images/tab-icon.png" className="w-10 h-10" alt="" />
          <span class="ml-2 text-xl">Web Guider</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Ahmed Mohamed
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
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
