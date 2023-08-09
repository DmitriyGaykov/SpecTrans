import {NavLink} from "react-router-dom";
import {memo} from "react";

export type HeaderNavLinkType = {
    to: string,
    text?: string,
    color?: string,
    className?: string
}

const HeaderNavLink = memo(({ to, text, color, className } : HeaderNavLinkType) => {
    return (
        <li className={`nav-item d-flex align-items-center justify-content-center ${className || ""}`}>
            <NavLink className={"nav-link py-3 px-lg-3 py-lg-4 text-" + (color || "black")} to={to}>
                { text }
            </NavLink>
        </li>
    )
})

export default HeaderNavLink