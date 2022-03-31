import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
    const { name, to } = props;

    return (
        <NavLink className="item" activeClassName="active" to={to} end>
            {name}
        </NavLink>
    );
};

export default NavbarItem;
