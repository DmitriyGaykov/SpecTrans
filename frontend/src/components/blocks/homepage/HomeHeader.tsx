import ActionButton from "../../buttons/ActionButton";
import React from "react";
import back from './../../../assets/img/header_background.png'
const HomeHeader = () => {
    const toForm = () => {
        document.querySelector('.question-form')?.scrollIntoView({ behavior: "smooth" })
    }

    return (
    <div className="header-site-container w-100">
        <img src={back} alt="" className="back"/>
        <div className="dark-bg bg-dark bg-opacity-25 position-absolute w-100 h-100 top-0"></div>
        <article className="padding">
            <h1 className="title h1 text-white mb-lg-4">Продажа и доставка нерудных метоллов</h1>
            <h2 className="subtitle h2 text-white mb-lg-4">У нас вы можете заказать материалы премиального качества.
                Индивидуальный подход и качественная продукция – ключевые преимущества
                нашей компании.</h2>
            <ActionButton text="Заказать звонок" onClick={toForm} className="mb-lg-4"/>
        </article>
    </div>
    )
}

export default HomeHeader