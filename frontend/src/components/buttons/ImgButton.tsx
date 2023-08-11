import IImgButton from "./IImgButton";
import edit from "../../assets/img/edit.svg";

const ImgButton = ({ img, className, onClick } : IImgButton) => {
    return (
        <button className={"img-button border-0 p-2  " + className } onClick={onClick}>
            <img src={img} alt="" className="img-button"/>
        </button>
    )
}

export default ImgButton