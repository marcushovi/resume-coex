import { link } from "fs";

const workData = [
  {
    name: "Na voľnej nohe",
    link: "https://www.marekhovancak.com/",
    subName: "",
    description: "",
    date: "4 mesiace",
    department: "Web developer",
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
    name: "EkoSolution",
    link: "https://www.ekosolution.sk/",
    subName: "Inštalatér fotovoltaických systémov",
    description: (
      <>
        Pracoval som v spoločnosti, ktorá sa zaoberala projektovaním,
        inštaláciou a servisom fotovoltaických elektrární na Slovensku, či už
        pre domácnosti alebo firmy. Mojou úlohou bolo navrhnúť technické
        riešenie systému na mieru. Následná komunikácia so zákazníkom od
        vysvetlenia priebehu projektu až po projektovanie úspor energie. Po
        inštalácii bolo mojou úlohou nastavenie riadiacej jednotky alebo
        striedača fotovoltickej elektrárne.{" "}
        <strong>
          Vytvoril som novú webovú stránku spoločnosti s použitím Wordpress
          pomocou Avada Builder. Pomocou Google appsheet som zautomatizoval a
          digitalizoval najdôležitejšie procesy vo firme ako Obhliadky
          nehnuteľností a budov, Technicka a bezpečnostná kontrola inštalácie.
          Taktiež som firme vytvoril nový eshop pomocou Shoptet platformy.
          www.ekosolution.sk, www.mojsolar.sk
        </strong>
      </>
    ),
    date: "1 rok a 6 mesiacov",
    department: "IT Technik a Elektrikár",
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
    name: "Mesto Veľký Šariš",
    link: "#",
    subName: "Testovanie na COVID 19",
    description: "",
    date: "3 mesiace",
    department: "Dobrovoľník",
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

const WorkExperience = () => {
  return (
    <div
      id="pracovne-skusenosti"
      className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h3 className="flex items-center pb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white md:pb-6">
          Pracovné skúsenosti
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
            Tu môžete vidieť moje Pracovné skúsenosti
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </h3>
      </div>
      {workData.map((WorkExperience, index) => (
        <div
          key={index}
          className="mt-4 grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:grid-cols-4 md:mt-6 md:grid-cols-5 md:pb-6 lg:grid-cols-4"
        >
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Názov firmy:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              <a
                href={WorkExperience.link}
                target="_blank"
                className="hover:underline"
              >
                {WorkExperience.name}
              </a>
            </dd>
            <dd className="mt-1.5 text-sm font-medium text-gray-500 dark:text-white">
              {WorkExperience.subName}
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Doba:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              {WorkExperience.date}
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Pozícia:
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              {WorkExperience.department}
            </dd>
          </dl>
          <dl>
            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
              Status:
            </dt>
            <dd
              className={`mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${WorkExperience.statusColor}`}
            >
              {WorkExperience.statusIcon}
              {WorkExperience.status}
            </dd>
          </dl>
          {WorkExperience.description && (
            <dl className="col-span-full">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Popis:
              </dt>
              <dd className="mt-1.5 text-base font-medium text-gray-900 dark:text-white">
                {WorkExperience.description}
              </dd>
            </dl>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
