import ProjectItemComponent from "../Components/UI Components/Global Components/ProjectItemComponent";
import fetchProjects from "../Components/BLOC/GetProjectsBLOC";
import { useEffect, useState } from "react";
import Project from "../Components/Models/Project";
import WorkPageHeader from "../Components/UI Components/Small commponents/WorkPageHeader";

export default function WorkPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);
  const [filterLanguages, setFilterLanguages] = useState<Array<string>>([]);

  async function getProjects() {
    const productResult = await fetchProjects();

    if (productResult.isSuccess) {
      return setProjects(productResult.payload);
    } else {
      console.error("Error getting projects: ", productResult.message);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (filterLanguages.length > 0) {
      setFilteredProjects(
        projects.filter((project) =>
          filterLanguages.every((lng) => project.stack.includes(lng))
        )
      );
    } else {
      setFilteredProjects([]);
    }
  }, [filterLanguages]);

  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <div className="project-section-wrapper">
          <WorkPageHeader
            filterLanguages={filterLanguages}
            setFilterLanguages={setFilterLanguages}
          />
          <div className="projects-list-holder">
            {projects.length > 0 && filteredProjects.length == 0
              ? projects.map((project) => {
                  return (
                    <ProjectItemComponent key={project.id} project={project} />
                  );
                })
              : filteredProjects.length > 0
              ? filteredProjects.map((project) => {
                  return (
                    <ProjectItemComponent key={project.id} project={project} />
                  );
                })
              : "No projects found"}
          </div>
        </div>
      </div>
    </>
  );
}
