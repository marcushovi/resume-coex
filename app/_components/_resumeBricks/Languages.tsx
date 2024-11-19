const Languages = () => {
  return (
    <div
      id="jazyky"
      className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-1 lg:col-span-2 xl:col-span-1"
    >
      <div className="mb-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:mb-6 md:pb-6">
        <h3 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
          Jazyky
        </h3>
      </div>

      <dl>
        <dt className="mt-2 font-semibold text-gray-900 dark:text-white">
          Angličtina
        </dt>
        <dd className=" pt-4 text-gray-500 dark:text-gray-400">
          <div className="flex flex-wrap gap-4">
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Počúvanie B2
            </span>
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Čítanie B2
            </span>
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Písomný prejav B2
            </span>
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Samostatný ústny prejav B1
            </span>
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Ústna interakcia B1{" "}
            </span>
          </div>

          <p className="mt-4 text-xs">
            Škála založená na základe{" "}
            <a
              href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"
              target="_blank"
              className="underline"
            >
              CEFR.
            </a>
          </p>
        </dd>
      </dl>
    </div>
  );
};

export default Languages;
