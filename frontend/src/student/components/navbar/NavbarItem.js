import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavbarItem = (props) => {
    const { children, to } = props;

    return (
        <NavLink className="item" to={to} end>
            {children}
        </NavLink>
    );
};

export default NavbarItem;
