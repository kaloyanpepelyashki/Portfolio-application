import ProjectItemLeftSide from "./ProjectItemLeftSide";
import ProjectItemRightSide from "./ProjectItemRightSide";
interface ProjectItemTopSection {
  projectTitle: string;
  projectDescription: string;
  projectImageURL: string;
}
const ProjectItemTopSection: React.FC<ProjectItemTopSection> = ({
  projectTitle,
  projectDescription,
  projectImageURL,
}) => {
  return (
    <div className="project-item-top-section">
      <div className="project-item-left-side">
        <ProjectItemLeftSide projectImageURL={projectImageURL} />
      </div>
      <div className="project-item-right-side">
        <ProjectItemRightSide
          projectTitle={projectTitle}
          projectDescription={projectDescription}
        />
      </div>
    </div>
  );
};
export default ProjectItemTopSection;
