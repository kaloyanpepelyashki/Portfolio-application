import Project from "../../Models/Project";
import ProjectItemAttributes from "../Small commponents/ProjectItemAttributesHolde";
import ProjectItemTopSection from "../Small commponents/ProjectItemTopComponent";
import ProjectStackIconsHolder from "../Small commponents/ProjectStackIconsHolder";
interface ProjectItemProps {
  project: Project;
}
const ProjectItemComponent: React.FC<ProjectItemProps> = ({ project }) => {
  const props = !project.isPrivate
    ? {
        href: project.repoUrl,
        target: "_blank",
      }
    : null;

  return (
    <>
      <a {...props}>
        <div className="project-item-component-wrapper">
          <ProjectItemTopSection
            isPrivate={project.isPrivate}
            title={project.title}
            description={project.description}
            imageURL={project.imageUrl}
          />
          <ProjectItemAttributes
            role={project.role}
            date={project.date}
            purpose={project.purpose}
          />
          <ProjectStackIconsHolder stackItems={project.stack} />
        </div>
      </a>
    </>
  );
};

export default ProjectItemComponent;
