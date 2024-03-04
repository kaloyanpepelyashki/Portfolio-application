interface ProjectAttributesProps {
  role: string;
  date: string;
  purpose: string;
}
const ProjectItemAttributes: React.FC<ProjectAttributesProps> = ({
  role,
  date,
  purpose,
}) => {
  return (
    <div className="project-atributes-holder">
      <div className="project-item-left-side-attributes ">
        <h4 className="project-attribute-text project-role-attribute-text">
          My Role: {role}
        </h4>
      </div>
      <div className="project-item-right-side-attributes ">
        <h4 className="project-attribute-text project-date-attribute-text">
          Date: {date}
        </h4>
        <h4 className="project-attribute-text project-purpose-attribute-text">
          Purpose: {purpose}
        </h4>
      </div>
    </div>
  );
};

export default ProjectItemAttributes;
