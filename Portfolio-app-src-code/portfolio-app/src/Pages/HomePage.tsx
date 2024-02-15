import { useRef } from "react";
import NavBarLink from "../Components/Atomic Components/NavigationBar-Link";
import { ArrowDropDownCircleOutlined } from '@mui/icons-material'

export default function HomePage() {
    // const containerRef = useRef<HTMLDivElement | null>(null);

    // const scrollToTarget = (targetId: string) => {
    //   const container = containerRef.current;
    //   const targetElement = document.getElementById(targetId);
    //   if (container && targetElement) {
    //     // Calculate the position to scroll to
    //     const containerTop = container.getBoundingClientRect().top;
    //     const targetTop = targetElement.getBoundingClientRect().top;
    //     // Since scrollTop is a property of the container, ensure container is typed correctly
    //     const scrollPosition = targetTop - containerTop + container.scrollTop;
    //     container.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    //   }
    // };

    const scrollTarget = useRef<HTMLDivElement | null>(null)

    const ScrollTrigger = () => scrollTarget.current?.scrollIntoView()   
        
    return (
        <div  className="home-page-main-wrapper page-main-wrapper">
            <h1 className="home-page-named-heading">I am <b>Kaloyan</b></h1>
            <div className="linked-headings-holder">
                <h3 className="home-page-linked-heading">Check out my <NavBarLink text={"work"} to={""} size={"47"} /></h3>
                <h3 className="home-page-linked-heading">Learn more <NavBarLink text={"about"} to={""} size={"47"} /> me</h3>
            </div>
            <div className="home-page-bottom-heading-wrapper">
                <h4 className="hope-page-bottom-heading">See why I am a perfect fit</h4>
                <a onClick={(e) => { e.preventDefault(); ScrollTrigger()}}>
                    <ArrowDropDownCircleOutlined  className="home-page-arrow-down-icon" sx={[{ fontSize: 50, marginTop: "40px", transition: "all", transitionDuration: "0.6s" }, {'&:hover': { transform: "scale(1.2)",}}]}/>
                </a>
            </div>
            <div  id="targetElementId" className="home-page-hidden-section-holder">
                <h2 ref={scrollTarget}>Heading</h2>
            </div>
        </div>
    )
}