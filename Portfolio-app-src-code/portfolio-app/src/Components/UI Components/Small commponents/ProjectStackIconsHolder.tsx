import { mapStackIcons } from "../../BLOC/MapStackIcon";
import StackItem from "../Atomic Components/StackItem";
interface ProjectStackIconsHolder {
  projectStackItems: Array<string>;
}
const ProjectStackIconsHolder: React.FC<ProjectStackIconsHolder> = ({
  projectStackItems,
}) => {
  console.log(projectStackItems);
  projectStackItems.forEach((item) => {
    console.log(item);
  });
  return (
    <>
      <div className="project-stack-icons-holder">
        {projectStackItems.map((item) => {
          const stackIcon = mapStackIcons(item);
          return <StackItem>{stackIcon}</StackItem>;
        })}
      </div>
    </>
  );
};

export default ProjectStackIconsHolder;
