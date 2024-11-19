const Feedback = () => {
  return (
    <div
      id="spatna-vazba"
      className="col-span-full rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <img
        className="mx-auto h-28 dark:hidden"
        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
        alt="shopping illustration"
      />
      <img
        className="mx-auto hidden h-28 dark:block"
        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
        alt="shopping illustration"
      />
      <h3 className="mb-2 mt-4 text-xl font-semibold leading-none text-gray-900 dark:text-white">
        Pomôžte mi sa zlepšovať
      </h3>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        Bol by som rád za každú aj objektívne kritickú spátnú väzbu. Ďakujem
      </p>
      <a
        href="mailto:hireme@marekhovancak.com"
        type="button"
        className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Odoslať spätnú väzbu
      </a>
    </div>
  );
};

export default Feedback;
