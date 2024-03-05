import ProjectItemAttributes from "../Small commponents/ProjectItemAttributesHolde";

import ProjectItemTopSection from "../Small commponents/ProjectItemTopComponent";
interface ProjectItemProps {
  projectTitle: string;
  projectDescription: string;
  projectImageURL: string;
  projectRole: string;
  projectDate: string;
  projectPurpose: string;
}
const ProjectItemComponent: React.FC<ProjectItemProps> = ({
  projectTitle,
  projectDescription,
  projectImageURL,
  projectRole,
  projectDate,
  projectPurpose,
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
      </div>
    </>
  );
};

export default ProjectItemComponent;
