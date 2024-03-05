interface ProjectItemLeftSide {
  projectImageURL: string;
}

const ProjectItemLeftSide: React.FC<ProjectItemLeftSide> = ({
  projectImageURL,
}) => {
  return (
    <>
      <div className="project-item-top-section-left-side-wrapper">
        <img className="project-item-image" src={projectImageURL} />
      </div>
    </>
  );
};

export default ProjectItemLeftSide;
