import FlashlightEffect from "../Components/Atomic Components/CursorFlashLight";
import AboutPageTopComponent from "../Components/Global Components/AboutPageTopSection";
import MyStackComponent from "../Components/Global Components/MyStackComponent";

export default function AboutPage() {
  return (
    <>
      <div className="about-page-main-wrapper page-main-wrapper">
        <FlashlightEffect />
        <AboutPageTopComponent />
        <MyStackComponent />
      </div>
    </>
  );
}
