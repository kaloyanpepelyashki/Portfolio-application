import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    text: string,
    to: string,
    size?: string
}

 const NavBarLink: React.FC<Props> = ({text, to, size}) => {
    return (
        <>
            <NavLink className="nav-bar-link" style={{"fontSize": `${size}px`}} to={to}><b className="nav-bar-code-symbol nav-bar-code-symbol-left">&lt;</b>{text} /<b className="nav-bar-code-symbol nav-bar-code-symbol-right">&gt;</b></NavLink>
        </>
    )
}

export default NavBarLink