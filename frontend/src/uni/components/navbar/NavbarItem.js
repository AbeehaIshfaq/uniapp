import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
    const { children, to } = props;

    return (
        <NavLink className="item" to={to} end>
            {children}
        </NavLink>
    );
};

export default NavbarItem;
