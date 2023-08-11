import InfoBlock from "./InfoBlock";
import {memo} from "react";

const AboutCompany = memo(() => {
    return (
        <div className="about padding d-flex flex-wrap w-100">
            <div className="about-text d-flex w-50 flex-column gap-3">
                <h2 className="h2-subtitle h2">О компании СПЕЦ-ТРАНС</h2>
                <p className="text-black-50">
                    Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг как надежного и ответственного партнера. В число наших клиентов вошли крупнейшие организации. При этом стоит отметить, что на индивидуальный подход при заказе наших услуг могут рассчитывать как крупные компании, так и частные лица.
                </p>
            </div>
            <div className="info w-50 d-flex">
                <InfoBlock num={60} text="Единиц техники"/>
                <InfoBlock num={15} text="Карьеров"/>
            </div>
        </div>
    )
})

export default AboutCompany