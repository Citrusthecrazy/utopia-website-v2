import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-36">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            Utopia Roleplay
          </a>

          <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
            Pridruži se danas i postani deo Utopia Roleplay zajednice
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 transform bg-[#467BA5] rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-[#3f77a5] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Pridruži se
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright {new Date().getFullYear()}. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
