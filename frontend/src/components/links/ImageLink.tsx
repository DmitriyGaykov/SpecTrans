import {NavLink} from "react-router-dom";
import './../../assets/scss/links/imagelink.scss'

export type ImageLinkType = {
    to: string,
    img: string,
    className?: string
}

const ImageLink = ({to, img, className} : ImageLinkType) => {
    return (
        <NavLink to={to} className={`nav-link image-link ${className}`}>
            <img src={img} alt="img"/>
        </NavLink>
    )
}

export default ImageLink