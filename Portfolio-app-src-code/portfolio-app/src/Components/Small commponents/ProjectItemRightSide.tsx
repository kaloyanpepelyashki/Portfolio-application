interface ProjectItemRightSide {
  projectTitle: string;
  projectDescription: string;
}
const ProjectItemRightSide: React.FC<ProjectItemRightSide> = ({
  projectTitle,
  projectDescription,
}) => {
  return (
    <>
      <div className="project-item-top-section-right-side-wrapper">
        <div className="project-right-side-text-holder">
          <h2 className="project-item-heading">{projectTitle}</h2>
          <p className="project-item-description">{projectDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItemRightSide;
