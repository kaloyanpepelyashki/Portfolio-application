
import NavBarLink from "../Atomic Components/NavigationBar-Link";

export default function NavigationBar() {
    return (
        <nav className="navigation-bar-wrapper">
            <h2 className="navigation-bar-logo">&#123; / &#125; </h2>
            <div className="navigation-links-holder">
                <NavBarLink text={"Home"} to={"/"} />
                <NavBarLink text={"About"} to={"/"} />
                <NavBarLink text={"Home"} to={"/"} />
            </div>
        </nav>
    )
}