import React, {useEffect} from "react";
import './../assets/scss/homepage.scss'
import HomeHeader from "./blocks/homepage/HomeHeader";
import WhyWe from "./blocks/homepage/WhyWe";
import AboutCompany from "./blocks/homepage/AboutCompany";
import QuestionFormWrapper from "./layouts/QuestionFormWrapper";
import DeliveryBlockInfo from "./blocks/homepage/DeliveryBlockInfo";

const HomePage = () => {
    useEffect(() => {
        const header = document.querySelector('.site-header') as HTMLElement
        header.style.position = 'absolute'

        return () => {
            header.style.position = 'static'
        }
    }, [])

    return (
        <div className="homepage d-flex gap-sm-5">
            <HomeHeader />
            <WhyWe/>
            <AboutCompany/>
            <DeliveryBlockInfo/>
        </div>
    )
}

export default HomePage