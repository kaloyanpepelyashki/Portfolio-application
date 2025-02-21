import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  to: string;
  size?: string;
  color?: string;
}

const NavBarLink: React.FC<Props> = ({ text, to, size, color }) => {
  const linkStyle: React.CSSProperties = color
    ? {
        fontSize: `${size}px`,
        color: color,
      }
    : {
        fontSize: `${size}px`,
      };

  return (
    <>
      <NavLink className="nav-bar-link" style={linkStyle} to={to}>
        <b className="nav-bar-code-symbol nav-bar-code-symbol-left">&lt;</b>
        {text} /
        <b className="nav-bar-code-symbol nav-bar-code-symbol-right">&gt;</b>
      </NavLink>
    </>
  );
};

export default NavBarLink;
