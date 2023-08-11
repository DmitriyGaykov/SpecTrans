import './../../../assets/scss/homepage.scss'
import {memo} from "react";

export type ImageWithTextType = {
    img: string,
    text?: string,
    className?: string
}

const ImageWithText = memo(({img, text, className } : ImageWithTextType) => {
    return (
    <div className={"map-wrapper container " + (className || "")}>
        <img src={ img } alt="" className="map"/>
        {text && <span className="text text-white  px-3 py-2 fw-bold bg-success">{ text }</span>}
    </div>
    )
})

export default ImageWithText
