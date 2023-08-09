import './../../assets/scss/layouts/footer.scss'
import logo from './../../assets/img/logolight.svg';
import HeaderNavLink from "../links/HeaderNavLink";
import ImageLink from "../links/ImageLink";
import vk from './../../assets/img/vk.svg'
import fb from './../../assets/img/facebook.svg'
import viber from './../../assets/img/viber.svg'

const Footer = () => {
    return (
        <footer className="site-footer w-100 padding py-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="politics d-flex gap-3 align-items-center">
                <img src={logo} alt="logo" className="logo"/>
                <span className="text-white-50">Политика конфиденциальности © спец-транс, 2023</span>
            </div>
            <nav className="d-flex justify-content-center align-items-center">
                <ul className="d-flex gap-3 mx-2 list-group navbar-nav align-items-center">
                    <HeaderNavLink to="/materials" color="white" text="Материалы"/>
                </ul>
            </nav>

            <div className="contacts d-flex gap-3 align-items-center" id="contacts">
                <div className="social-networks d-flex align-items-center gap-0">
                    <ImageLink to='#' img={vk}/>
                    <ImageLink to='#' img={fb}/>
                    <ImageLink to='#' img={viber}/>
                </div>
                <div className="number px-3 py-2 border-1 border-white border text-white">
                    +7 928 245 15 20
                </div>
            </div>
        </footer>
    )
}

export default Footer