import PlusBlock from "./PlusBlock";
import time from "../../../assets/img/time.svg";
import client from "../../../assets/img/client.svg";
import price from "../../../assets/img/price.svg";
import quality from "../../../assets/img/quality.svg";
import operative from "../../../assets/img/operative.svg";
import React, {memo} from "react";

const WhyWe = memo(() => {
    return (
        <div className="why-we padding d-flex flex-column gap-3">
            <h2 className="h2 h2-subtitle">
                Почему выбирают нас
            </h2>
            <div className="pluses-wrapper w-100 d-flex justify-content-between gap-2">
                <PlusBlock svg={time} text="Мы работаем с 2000 года"/>
                <PlusBlock svg={client} text="Более 5000 счастливых клиентов"/>
                <PlusBlock svg={price} text="Лучшие цены"/>
                <PlusBlock svg={quality} text="Качественная продукция"/>
                <PlusBlock svg={operative} text="Оперативность"/>
            </div>
        </div>
    )
})

export default WhyWe