import ProjectItemComponent from "../Components/Global Components/ProjectItemComponent";

export default function WorkPage() {
  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        <h2>Work page</h2>
        <div className="projects-list-holder">
          <ProjectItemComponent
            projectTitle={"Salon Sila"}
            projectDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing  Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            }
            projectImageURL={
              "https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg"
            }
            projectRole={"Developer"}
            projectDate={"05.2022"}
            projectPurpose={"University Project"}
          />
        </div>
      </div>
    </>
  );
}
