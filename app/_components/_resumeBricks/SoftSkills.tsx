const SoftSkills = () => {
  return (
    <div
      id="soft-skills"
      className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-1 lg:col-span-2 xl:col-span-1"
    >
      <div className="mb-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:mb-6 md:pb-6">
        <h3 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
          Soft skills
        </h3>
      </div>
      <div className="mb-4 border-b border-gray-200 pb-4">
        <h4 className="mt-2 font-semibold text-gray-900 dark:text-white">
          Som týmoví hráč
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Hral som florbal viac ako 7 rokov aj ako kapitán v extraligových
          ligách. (Juniori a muži)
        </p>
      </div>
      <div className="mb-4 border-b border-gray-200 pb-4">
        <h4 className="mt-2 font-semibold text-gray-900 dark:text-white">
          Zvládám organizáciu času
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Popri štúdiu na vysokej škole, práci a rodine to inak ani nejde.
        </p>
      </div>
      <div className="mb-4 border-b border-gray-200 pb-4">
        <h4 className="mt-2 font-semibold text-gray-900 dark:text-white">
          Rád se vzdelávám
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Popri štúdiu, počúvam podcasty a čítam odborné knihy
        </p>
      </div>
    </div>
  );
};

export default SoftSkills;
