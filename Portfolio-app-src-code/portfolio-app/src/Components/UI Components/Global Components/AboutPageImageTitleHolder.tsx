export default function ImageTitleHolder() {
  return (
    <>
      <div className="about-page-image-title-wrapper">
        <img
          className="about-page-profile-picture"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
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
