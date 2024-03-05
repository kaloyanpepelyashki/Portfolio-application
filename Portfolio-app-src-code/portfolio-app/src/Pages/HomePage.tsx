import { useRef } from "react";
import NavBarLink from "../Components/UI Components/Atomic Components/NavigationBar-Link";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

export default function HomePage() {
  const scrollTarget = useRef<HTMLDivElement | null>(null);

  const ScrollTrigger = () =>
    scrollTarget.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <div className="home-page-main-wrapper page-main-wrapper">
      <h1 className="home-page-named-heading">
        I am <b>Kaloyan</b>
      </h1>
      <div className="linked-headings-holder">
        <h3 className="home-page-linked-heading">
          Check out my <NavBarLink text={"work"} to={""} size={"47"} />
        </h3>
        <h3 className="home-page-linked-heading">
          Learn more <NavBarLink text={"about"} to={""} size={"47"} /> me
        </h3>
      </div>
      <div className="home-page-bottom-heading-wrapper">
        <h4 className="hope-page-bottom-heading">See why I am a perfect fit</h4>
        <a
          onClick={(e) => {
            e.preventDefault();
            ScrollTrigger();
          }}
        >
          <ArrowDropDownCircleOutlined
            className="home-page-arrow-down-icon"
            sx={[
              {
                fontSize: 50,
                marginTop: "40px",
                transition: "all",
                transitionDuration: "0.6s",
              },
              { "&:hover": { transform: "scale(1.2)" } },
            ]}
          />
        </a>
      </div>
      <div id="targetElementId" className="home-page-hidden-section-holder">
        <h2 className="home-page-hidden-section-heading" ref={scrollTarget}>
          <b>I am a full-stack developer</b>
        </h2>
        <p className="home-page-hidden-section-paragraph">
          As a <b>dedicated</b> full-stack developer I blend technical expertise
          with design sensibility to craft software and web solutions that are{" "}
          <b>visually striking, highly functional, robust and user-centric</b>.
          My software/web development background enables me to navigate and
          solve complex challenges, always with an eye on enhancing user
          experience.pleasing but also highly functional and scalable. My
          background in Multimedia Design and Web Development, combined with my
          experience as a full-time developer at Ebits, equips me with a unique
          perspective and diverse skill set that can tackle a variety of
          challenges.
        </p>
      </div>
    </div>
  );
}
