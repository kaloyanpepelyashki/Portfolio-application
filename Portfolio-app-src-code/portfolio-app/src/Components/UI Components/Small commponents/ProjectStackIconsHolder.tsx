import { mapStackIcons } from "../../BLOC/MapStackIcon";
import StackItem from "../Atomic Components/StackItem";
interface ProjectStackIconsHolder {
  stackItems: Array<string>;
}
const ProjectStackIconsHolder: React.FC<ProjectStackIconsHolder> = ({
  stackItems,
}) => {
  return (
    <>
      <div className="project-stack-icons-holder">
        {stackItems.map((stackItem) => {
          const stackIcon = mapStackIcons(stackItem);
          return <StackItem>{stackIcon}</StackItem>;
        })}
      </div>
    </>
  );
};

export default ProjectStackIconsHolder;
