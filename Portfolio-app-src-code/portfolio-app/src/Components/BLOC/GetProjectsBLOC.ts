import Project from "../Models/Project";
import ProjectsService from "../Services/ProjectsService";

export default async function fetchProjects(): Promise<{
  isSuccess: boolean;
  payload: Array<Project>;
  error?: Error;
  message?: string;
}> {
  try {
    const service = new ProjectsService();
    const projectsData = await service.getAllProjects();
    const projects: Array<Project> = [];

    projectsData?.forEach((project) => {
      const data = project.data();
      const projectObj = new Project(
        project.id,
        data.title,
        data.description,
        data.imageUrl,
        data.repositoryLink,
        data.role,
        data.purpose,
        data.date,
        data.stack
      );
      projects.push(projectObj);
    });

    if (projects.length > 0) {
      return { isSuccess: true, payload: projects };
    }

    return { isSuccess: true, payload: [], message: "No projects found" };
  } catch (e: any) {
    return { isSuccess: false, payload: [], error: e, message: e.message };
  }
}
