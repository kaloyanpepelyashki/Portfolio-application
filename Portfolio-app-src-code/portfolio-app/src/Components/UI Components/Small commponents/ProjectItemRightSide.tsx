import { ArrowOutward } from "@mui/icons-material";
import PrivateLabel from "../Atomic Components/PrivateLabel";

interface ProjectItemRightSide {
  isPrivate: boolean;
  title: string;
  description: string;
}
const ProjectItemRightSide: React.FC<ProjectItemRightSide> = ({
  isPrivate,
  title,
  description,
}) => {
  return (
    <>
      <div className="project-item-top-section-right-side-wrapper">
        <div className="project-right-side-text-holder">
          <div className="project-right-side-heeading-icon-holder">
            <h2 className="project-item-heading">{title}</h2>
            {!isPrivate ? (
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
            ) : (
              <PrivateLabel />
            )}
          </div>
          <p className="project-item-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItemRightSide;
