import ProjectItemLeftSide from "../Small commponents/ProjectItemLeftSide";
import ProjectItemRightSide from "../Small commponents/ProjectItemRightSide";

export default function ProjectItemComponent() {
  return (
    <>
      <div className="project-item-component-wrapper">
        <div className="project-item-left-side">
          <ProjectItemLeftSide />
        </div>
        <div className="project-item-right-side">
          <ProjectItemRightSide />
        </div>
      </div>
    </>
  );
}
