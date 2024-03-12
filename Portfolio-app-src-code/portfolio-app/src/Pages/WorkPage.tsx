import ProjectItemComponent from "../Components/UI Components/Global Components/ProjectItemComponent";
import { fetchProjects } from "../Components/BLOC/GetProjectsBLOC";

const projects = await fetchProjects();

export default function WorkPage() {
  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <h2 className="comment-like-heading work-comment-heading">//My work</h2>
        <div className="projects-list-holder">
          {projects.length > 0
            ? projects.map((project) => {
                console.log(project);
                return (
                  <ProjectItemComponent
                    key={project.id}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    projectImageURL={
                      "https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg"
                    }
                    projectRole={project.role}
                    projectDate={project.date}
                    projectPurpose={project.purpose}
                    projectStack={project.stack}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
