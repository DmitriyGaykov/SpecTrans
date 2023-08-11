import ActionButton from "../buttons/ActionButton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {memo} from "react";

const QuestionFormWrapper = memo(() => {
    const current = useSelector((state : RootState) => state.users.current)

    return (
        <div className="question-form-wrapper padding w-100  d-flex justify-content-between">
            <div className="d-flex w-50 flex-wrap flex-column gap-1 justify-content-center align-items-start">
                <h2 className="h2 h2-subtitle">Остались вопросы?</h2>
                <p className="text-success">Закажите обратный звонок и узнайте больше о наших услугах!</p>
                <p className="text-black">Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут</p>
                <ActionButton text="Заказать звонок" className="form-submit" />
            </div>
            <div className="form-wrapper container w-50 d-flex flex-column align-items-center">
                <div className="green-block bg-success"></div>
                <form method="post" className="question-form container border-0 bg-white p-4 form-control w-75 d-flex flex-column gap-xl-1">
                    <input name="name" id="name" className="name form-text container form-control border-1 border-end" placeholder="Имя" defaultValue={current ? current.name : ""}/>
                    <input name="phonenumber" id="phonenumber" className="phonenumber form-text container form-control  border-1 border-end" placeholder="Телефон"/>
                    <textarea name="comment" id="comment" className="comment container form-text  border-1 border-end form-control" placeholder="Комментарий"/>
                    <span className="text-black agreement-text">Соглашение о персональных данных</span>
                </form>
                <div className="green-block bg-success"></div>
            </div>
        </div>
    )
})

export default  QuestionFormWrapper