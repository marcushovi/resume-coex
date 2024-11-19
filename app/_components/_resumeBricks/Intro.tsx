const Intro = () => {
  return (
    <div
      id="intro"
      className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="flex items-center border-b border-gray-200 pb-4 text-xl font-semibold leading-none text-gray-900 dark:border-gray-700 dark:text-white md:pb-6">
        Intro
      </h3>
      <div className="my-4 grid gap-4 md:my-6 md:grid-cols-2 md:gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              className="size-16 rounded-lg"
              src="https://www.marekhovancak.com/profile.png"
              alt="Marek Hovančak"
            />
            <div>
              <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                Web Developer
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Marek Hovančak
              </h3>
            </div>
          </div>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">
              Email
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              hireme@marekhovancak.com
            </dd>
          </dl>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">
              Adresa
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Praha - 10, Česká republika
            </dd>
          </dl>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">
              Tel. číslo
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              <div className="mb-4 flex h-8 w-48 justify-center rounded-lg bg-gray-200 text-center dark:bg-gray-700">
                <svg
                  className="mt-1 size-6 text-blue-600 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </div>
            </dd>
          </dl>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mb-4 flex shrink-0 items-center space-x-2">
            <a href="#" title="" className="text-2xl font-semibold">
              Niečo o mne
            </a>
          </div>
          <p className="mb-4 border-y border-gray-200 py-4 text-xl font-medium text-gray-900 dark:border-gray-600 dark:text-white">
            Programovaniu sa venujem od strednej školy, posledné 2 roky sa
            venujem hlavne Frontend developmentu
          </p>
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            Zručnosti
          </p>
          <ul
            role="list"
            className="my-4 space-y-3 text-left text-sm text-gray-500 dark:text-gray-400"
          >
            <li className="flex items-center space-x-1.5">
              <svg
                className="size-5 shrink-0 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              <span>React, Next.js</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <svg
                className="size-5 shrink-0 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              <span>Figma, Tailwind CSS, Flowbite UI, Mantine</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <svg
                className="size-5 shrink-0 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              <span>Git, Github, Visual Studio Code, Vercel</span>
            </li>
          </ul>
          <a
            href="https://www.marekhovancak.com/"
            target="_blank"
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <svg
              className="-ms-0.5 me-1.5 size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            Viac
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
        <a
          href="mailto:hireme@marekhovancak.com"
          type="button"
          data-modal-target="accountInformationModal"
          data-modal-toggle="accountInformationModal"
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          <svg
            className="-ms-0.5 me-1.5 size-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          Kontaktovať
        </a>
      </div>
    </div>
  );
};

export default Intro;
