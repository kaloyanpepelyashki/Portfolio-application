import NavBarLink from "../Atomic Components/NavigationBar-Link";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar-wrapper">
      <h6 className="navigation-bar-logo">&#123; / &#125; </h6>
      <div className="navigation-links-holder">
        <NavBarLink text={"Home"} to={"/"} />
        <NavBarLink text={"About"} to={"/about"} />
        <NavBarLink text={"Work"} to={"/work"} />
      </div>
    </nav>
  );
}
