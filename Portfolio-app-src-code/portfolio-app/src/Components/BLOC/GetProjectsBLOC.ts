import Project from "../Models/Project";
import ProjectsService from "../Services/ProjectsService";

export const fetchProjects: () => Promise<Array<Project> | []> = async () => {
  const service = new ProjectsService();
  const projectsData = await service.getAllProjects();
  const projects: Array<Project> = [];

  projectsData?.forEach((project) => {
    const data = project.data();
    const projectObj = new Project(
      data.title,
      data.description,
      data.imageUrl,
      data.role,
      data.purpose,
      data.date,
      data.stack
    );
    projects.push(projectObj);
  });

  if (projects.length != 0) {
    return projects;
  } else {
    return [];
  }
};
