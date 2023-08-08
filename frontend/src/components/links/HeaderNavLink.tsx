import {NavLink} from "react-router-dom";

export type HeaderNavLinkType = {
    to: string,
    text?: string,
    color?: string
}

const HeaderNavLink = ({ to, text, color } : HeaderNavLinkType) => {
    return (
        <li className="nav-item d-flex align-items-center justify-content-center">
            <NavLink className={"nav-link py-3 px-lg-3 py-lg-4 text-" + (color || "black")} to={to}>
                { text }
            </NavLink>
        </li>
    )
}

export default HeaderNavLink