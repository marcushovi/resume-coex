import { link } from "fs";

const projectData = [
  {
    name: "Bedeka Web",
    link: "https://www.bedeka.sk",
    date: "2024",
    technologies: "Next.js, Flowbite UI, Nodemailer, Vercel",
    status: "Prebieha",
    statusColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    statusIcon: (
      <svg
        className="me-1 size-3"
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
          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        />
      </svg>
    ),
  },
  {
    name: "AirQuality",
    link: "https://github.com/Neolker/AirQuality",
    date: "2024",
    technologies: "Next.js, Mantine UI, Vercel",
    status: "Dokončené",
    statusColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    statusIcon: (
      <svg
        className="me-1 size-3"
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
        ></path>
      </svg>
    ),
  },
  {
    name: "Velox",
    link: "https://github.com/marcushovi/velox",
    date: "2024",
    technologies: "Next.js, Mantine UI, Mongoose, Next Auth, i18n, Vercel",
    status: "Dokončené",
    statusColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    statusIcon: (
      <svg
        className="me-1 size-3"
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
        ></path>
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <div
      id="projekty"
      className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h3 className="flex items-center pb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white md:pb-6">
          Projekty
          <button
            data-tooltip-target="orders-desc"
            data-tooltip-trigger="hover"
            className="ms-2 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          >
            <svg
              className="size-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="orders-desc"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Tu môžete vidieť moje projekty
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </h3>
      </div>
      {projectData.map((project, index) => (
        <div
          key={index}
          className="mt-4 grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:grid-cols-4 md:mt-6 md:grid-cols-5 md:pb-6 lg:grid-cols-4"
        >
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Názov:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              <a
                href={project.link}
                target="_blank"
                className="hover:underline"
              >
                {project.name}
              </a>
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Dátum:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              {project.date}
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Technológie:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              {project.technologies}
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Status:
            </dt>
            <dd
              className={`mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${project.statusColor}`}
            >
              {project.statusIcon}
              {project.status}
            </dd>
          </dl>
        </div>
      ))}
      <div className="pt-4 dark:border-gray-700 md:pt-6">
        <a
          href="https://www.marekhovancak.com/projects"
          target="_blank"
          type="button"
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
              stroke-width="2"
              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
            />
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Pozri viac
        </a>
      </div>
    </div>
  );
};

export default Projects;
