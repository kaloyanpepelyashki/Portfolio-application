import ProjectItemComponent from "../Components/UI Components/Global Components/ProjectItemComponent";
import fetchProjects from "../Components/BLOC/GetProjectsBLOC";
import { useEffect, useState } from "react";
import Project from "../Components/Models/Project";
import WorkPageHeader from "../Components/UI Components/Small commponents/WorkPageHeader";

export default function WorkPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);

  const [privacyFilter, setPrivacyFilter] = useState<number>(1);
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
    let filtered = projects;

    if (filterLanguages.length > 0) {
      filtered = filtered.filter((project) =>
        filterLanguages.every((lng) => project.stack.includes(lng))
      );
    }

    if (privacyFilter === 2) {
      filtered = filtered.filter((project) => !project.isPrivate);
    } else if (privacyFilter === 3) {
      filtered = filtered.filter((project) => project.isPrivate);
    }

    setFilteredProjects(filtered);
  }, [filterLanguages, privacyFilter]);

  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <div className="project-section-wrapper">
          <WorkPageHeader
            filterLanguages={filterLanguages}
            setFilterLanguages={setFilterLanguages}
            privacyFilter={privacyFilter}
            setPrivacyFilter={setPrivacyFilter}
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
