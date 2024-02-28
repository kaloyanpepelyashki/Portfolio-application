import ProjectItemComponent from "../Components/Global Components/ProjectItemComponent";

export default function WorkPage() {
  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <h2>Work page</h2>
        <div className="projects-list-holder">
          <ProjectItemComponent />
        </div>
      </div>
    </>
  );
}
