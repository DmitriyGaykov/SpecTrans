import WayBlock from "./WayBlock";
import TextBlock from "./TextBlock";
import ImageWithText from "./ImageWithText";
import map from './../../../assets/img/map.png'
import {memo} from "react";

const DeliveryBlockInfo = memo(() => {
    return (
        <div className="delivery-block-info d-flex w-100 flex-wrap padding">
            <div className="delivery-text py-4 pe-3 w-50 d-flex flex-column gap-3 justify-content-between">
                <div className="text d-flex flex-column gap-3">
                    <h2 className="h2 h2-subtitle text-black">Доставка</h2>
                    <p className="descr text-black">Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для корпоративных клиентов и частных лиц. Мы осуществлем доставку по Санкт-Петербургу и Ленинградской области.
                    </p>
                    <WayBlock text="Вы оставляете заявку через сайт или по телефону"/>
                    <WayBlock text="Мы производим точный расчет стоимости"/>
                    <WayBlock text="Осуществляем поставку заказанного вами материала точно в срок"/>
                    <WayBlock text="Соблюдаем своевременный документооборот"/>
                </div>
                <div className="block d-flex justify-content-center gap-2">
                    <TextBlock title="г.Санкт-Петербург" subtitle="Невский проспект, д. 12/2" />
                    <TextBlock title="+7 812 545 44 53" subtitle="Ежедневно с 08:00 до 24:00" />
                </div>
            </div>
            <ImageWithText img={map} text="Зона доставки" className="w-50"/>
        </div>
    )
})

export default DeliveryBlockInfo