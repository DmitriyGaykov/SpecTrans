import star from './../../../assets/img/star.svg'
import './../../../assets/scss/homepage.scss'
const WayBlock = ({ text } : { text : string}) => {
    return (
        <div className="way-block d-flex align-items-center w-100 justify-content-start gap-3">
            <img src={star} alt="star"/>
            <span className="text text-black-50">{ text }</span>
        </div>
    )
}

export default WayBlock