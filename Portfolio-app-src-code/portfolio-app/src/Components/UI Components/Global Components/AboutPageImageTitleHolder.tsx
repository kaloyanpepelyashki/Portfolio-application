export default function ImageTitleHolder() {
  return (
    <>
      <div className="about-page-image-title-wrapper">
        <img
          className="about-page-profile-picture"
          src="https://avatars.githubusercontent.com/u/93147724?s=96&v=4"
          alt="A picture of me"
        />
        <div className="about-page-hero-headings-holder">
          <h1 className="about-page-hero-name-heading">Kaloyan Pepelyashki</h1>
          <h4 className="about-page-hero-text-heading">Full-stack developer</h4>
        </div>
      </div>
    </>
  );
}
