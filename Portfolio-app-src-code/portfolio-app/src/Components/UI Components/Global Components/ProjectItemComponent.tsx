import ProjectItemAttributes from "../Small commponents/ProjectItemAttributesHolde";
import ProjectItemTopSection from "../Small commponents/ProjectItemTopComponent";
import ProjectStackIconsHolder from "../Small commponents/ProjectStackIconsHolder";
interface ProjectItemProps {
  projectTitle: string;
  projectDescription: string;
  projectImageURL: string;
  projectRole: string;
  projectDate: string;
  projectPurpose: string;
  projectStack: Array<string>;
}
const ProjectItemComponent: React.FC<ProjectItemProps> = ({
  projectTitle,
  projectDescription,
  projectImageURL,
  projectRole,
  projectDate,
  projectPurpose,
  projectStack,
}) => {
  return (
    <>
      <div className="project-item-component-wrapper">
        <ProjectItemTopSection
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          projectImageURL={projectImageURL}
        />
        <ProjectItemAttributes
          role={projectRole}
          date={projectDate}
          purpose={projectPurpose}
        />
        <ProjectStackIconsHolder projectStackItems={projectStack} />
      </div>
    </>
  );
};

export default ProjectItemComponent;
