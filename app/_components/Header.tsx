import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center">
          <div className="flex flex-col items-start lg:order-2 lg:justify-center">
            <h1 className="text-2xl font-semibold dark:text-white">
              Marek Hovančák - Web developer
            </h1>
            <p className="text-xl font-medium dark:text-white">
              Curriculum vitae - COex
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end lg:order-3 lg:col-span-1">
            <DarkThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
