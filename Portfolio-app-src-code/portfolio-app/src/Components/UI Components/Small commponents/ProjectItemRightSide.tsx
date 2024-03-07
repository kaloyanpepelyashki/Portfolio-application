import { ArrowOutward } from "@mui/icons-material";

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
          <div className="project-right-side-heeading-icon-holder">
            <h2 className="project-item-heading">{projectTitle}</h2>
            <span>
              <ArrowOutward
                className="project-item-arrow"
                sx={[
                  {
                    fontSize: 30,
                    transition: "all",
                    transitionDuration: "0.6s",
                    marginLeft: "10px",
                  },
                  { "&:hover": { transform: "translate(6px, -10px)" } },
                ]}
              />
            </span>
          </div>
          <p className="project-item-description">{projectDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItemRightSide;
