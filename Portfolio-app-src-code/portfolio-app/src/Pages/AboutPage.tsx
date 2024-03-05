import FlashlightEffect from "../Components/UI Components/Atomic Components/CursorFlashLight";
import AboutMeText from "../Components/UI Components/Global Components/AboutMeTextComponent";
import AboutPageTopComponent from "../Components/UI Components/Global Components/AboutPageTopSection";
import MyStackComponent from "../Components/UI Components/Global Components/MyStackComponent";

export default function AboutPage() {
  return (
    <>
      <div className="about-page-main-wrapper page-main-wrapper">
        <FlashlightEffect />
        <AboutPageTopComponent />
        <MyStackComponent />
        <AboutMeText />
      </div>
    </>
  );
}
