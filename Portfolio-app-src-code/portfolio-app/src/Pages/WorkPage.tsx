import ProjectItemComponent from "../Components/UI Components/Global Components/ProjectItemComponent";
import fetchProjects from "../Components/BLOC/GetProjectsBLOC";
import { useEffect, useState } from "react";
import Project from "../Components/Models/Project";
import { Fab } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import FilterButton from "../Components/UI Components/Atomic Components/FilterButton";
import WorkPageHeader from "../Components/UI Components/Small commponents/WorkPageHeader";

export default function WorkPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);

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

  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <div className="project-section-wrapper">
          <WorkPageHeader />
          <div className="projects-list-holder">
            {projects.length > 0
              ? projects.map((project) => {
                  console.log(project);
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
