import Project from "../../Models/Project";
import ProjectItemAttributes from "../Small commponents/ProjectItemAttributesHolde";
import ProjectItemTopSection from "../Small commponents/ProjectItemTopComponent";
import ProjectStackIconsHolder from "../Small commponents/ProjectStackIconsHolder";
interface ProjectItemProps {
  project: Project;
}
const ProjectItemComponent: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <>
      <a href={!project.isPrivate ? project.repoUrl : ""}>
        <div className="project-item-component-wrapper">
          <ProjectItemTopSection
            isPrivate={project.isPrivate}
            title={project.title}
            description={project.description}
            imageURL={
              "https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg"
            }
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
