import HeaderNavLink from "../links/HeaderNavLink";
import logo from './../../assets/img/logo.svg';
import './../../assets/scss/layouts/header.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {isGettedUser} from "../../models/User";
import {logout} from "../../redux/users/users";

const Header = () => {
    const dispatch = useAppDispatch()

    const current = useSelector((state : RootState) => state.users.current)

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="site-header w-100 padding">
            <NavLink to="/">
                <img src={logo} className="logo" alt="logo"/>
            </NavLink>
            <ul className="site-navbar mx-5 w-100 navbar-nav align-items-center list-group gap-1">
                <HeaderNavLink to="/materials" text="Материалы" key="nvl-mat"/>
                {
                    isGettedUser(current) ?
                        <>
                            {
                                current.role === 'admin' &&
                                <>
                                    <HeaderNavLink to="/add-material" text="Добавить материал" key="nvl-add"/>
                                    <HeaderNavLink to="/questions" text="Вопросы от клиентов" key="nvl-ques"/>
                                </>
                            }
                            <button className="btn btn-outline-dark px-1 py-1 ms-auto " onClick={onLogout}>Выйти с аккаунта</button>
                        </>
                     :
                        <>
                            <HeaderNavLink to="/auth/login" text="Авторизироваться" className="ms-auto" key="nvl-auth"/>
                            <HeaderNavLink to="/auth/reg" text="Зарегистрироваться" key="nvl-reg"/>
                        </>
                }
            </ul>
        </header>
    )
}

export default Header