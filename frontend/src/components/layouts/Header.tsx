import HeaderNavLink from "../links/HeaderNavLink";
import logo from './../../assets/img/logo.svg';
import './../../assets/scss/layouts/header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header w-100 padding">
            <NavLink to="/">
                <img src={logo} className="logo" alt="logo"/>
            </NavLink>
            <ul className="site-navbar mx-5 navbar-nav list-group gap-1">
                <HeaderNavLink to="/materials" text="Материалы"/>
                <HeaderNavLink to="/delivery-and-payment" text="Доставка и оплата"/>
                <HeaderNavLink to="/add-material" text="Добавить материал"/>
            </ul>
            {/*<ActionButton className="ms-auto" text="Заказать звонок"/>*/}
        </header>
    )
}

export default Header