import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-white p-4 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col flex-wrap items-center justify-between gap-0">
          <h1 className=" text-2xl font-semibold">
            Marek Hovančák - Web developer
          </h1>
          <p className="text-xl font-medium">Curriculum vitae - COex</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
