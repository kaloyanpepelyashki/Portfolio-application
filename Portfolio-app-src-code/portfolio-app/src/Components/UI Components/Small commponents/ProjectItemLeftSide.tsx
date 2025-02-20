interface ProjectItemLeftSide {
  imageURL: string;
}

const ProjectItemLeftSide: React.FC<ProjectItemLeftSide> = ({ imageURL }) => {
  return (
    <>
      <div className="project-item-top-section-left-side-wrapper">
        <img className="project-item-image" src={imageURL} />
      </div>
    </>
  );
};

export default ProjectItemLeftSide;
