import AsideMenu from "./_resumeBricks/AsideMenu";
import Breadcrumb from "./_resumeBricks/Breadcrumb";
import Education from "./_resumeBricks/Education";
import Feedback from "./_resumeBricks/Feedback";
import Intro from "./_resumeBricks/Intro";
import Languages from "./_resumeBricks/Languages";
import Projects from "./_resumeBricks/Projects";
import SoftSkills from "./_resumeBricks/SoftSkills";
import WorkExperience from "./_resumeBricks/WorkExperience";

const Resume = () => {
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-8">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <Breadcrumb />
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
            Môj životopis
          </h2>
          <div className="gap-8 lg:flex">
            <AsideMenu />
            <div className="grid w-full grid-cols-2 gap-4">
              <Intro />
              <Projects />
              <Education />
              <WorkExperience />
              <SoftSkills />
              <Languages />
              <Feedback />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
