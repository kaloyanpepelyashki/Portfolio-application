import { useEffect, useRef, useState } from "react";
import NavBarLink from "../Components/UI Components/Atomic Components/NavigationBar-Link";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

export default function HomePage() {
  const scrollTarget = useRef<HTMLDivElement | null>(null);

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          Check out my{" "}
          <NavBarLink
            text={"work"}
            to={"/work"}
            size={screenWidth >= 2000 ? "47" : "37"}
            color={"#fcec3b"}
          />
        </h3>
        <h3 className="home-page-linked-heading">
          Learn more{" "}
          <NavBarLink
            text={"about"}
            to={"/about"}
            size={screenWidth >= 2000 ? "47" : "37"}
            color={"#fcec3b"}
          />{" "}
          me
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
          <b>Why Me..?</b>
        </h2>
        <p className="home-page-hidden-section-paragraph">
          I am a young and motivated full-stack developer with a passion for
          building scalable, high-performing, and user-focused solutions. My
          experience spans the entire development lifecycle — from optimizing
          legacy systems to designing and deploying new features that improve
          both functionality and user experience. With a strong foundation in
          software and web development and design sensibility, I bring a goof
          mix of technical precision and creativity. I thrive in agile
          environments, enjoy solving complex challenges, and I believe that
          great software is not just about code—it is about crafting solutions
          that make an impact.
        </p>
      </div>
    </div>
  );
}
