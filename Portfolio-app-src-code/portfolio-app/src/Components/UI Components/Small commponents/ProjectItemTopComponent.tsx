import ProjectItemLeftSide from "./ProjectItemLeftSide";
import ProjectItemRightSide from "./ProjectItemRightSide";
interface ProjectItemTopSection {
  isPrivate: boolean;
  title: string;
  description: string;
  imageURL: string;
}
const ProjectItemTopSection: React.FC<ProjectItemTopSection> = ({
  isPrivate,
  title,
  description,
  imageURL,
}) => {
  return (
    <div className="project-item-top-section">
      <div className="project-item-left-side">
        <ProjectItemLeftSide imageURL={imageURL} />
      </div>
      <div className="project-item-right-side">
        <ProjectItemRightSide
          isPrivate={isPrivate}
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};
export default ProjectItemTopSection;
