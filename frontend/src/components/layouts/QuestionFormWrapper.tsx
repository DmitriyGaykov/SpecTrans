import ActionButton from "../buttons/ActionButton";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {memo, useEffect, useRef, useState} from "react";
import Question from "../../models/Question";
import {addQuestion} from "../../redux/questions/actions";
import {reset} from "../../redux/questions/questions";

const QuestionFormWrapper = memo(() => {
    const current = useSelector((state : RootState) => state.users.current)
    const success = useSelector((state : RootState) => state.questions.success)
    const errors = useSelector((state: RootState) => state.questions.errors)

    const dispatch = useAppDispatch()

    const iname = useRef<HTMLInputElement>(null)
    const iphone = useRef<HTMLInputElement>(null)
    const tacomment = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if(success !== undefined) {
            const _success = success

            if(success) {
                dispatch(reset())
                clearValues()
            } else {
                setTimeout(() => {
                    if (success == _success) {
                        dispatch(reset())
                    }
                }, 5000)
            }
        }
    }, [success]);

    const onSubmit = () => {
        const name = iname.current?.value
        const phone = iphone.current?.value
        const comment = tacomment.current?.value

        const question= {
            name,
            phone,
            comment
        } as Question

        dispatch(addQuestion(question))
    }

    const clearValues = () => {
        if(iname && iname.current) {
            iname.current.value = ""
        }

        if(iphone && iphone.current) {
            iphone.current.value = ""
        }

        if(tacomment && tacomment.current) {
            tacomment.current.value = ""
        }
    }

    return (
        <div className="question-form-wrapper padding w-100  d-flex justify-content-between">
            <div className="d-flex w-50 flex-wrap flex-column gap-1 justify-content-center align-items-start">
                <h2 className="h2 h2-subtitle">Остались вопросы?</h2>
                <p className="text-success">Закажите обратный звонок и узнайте больше о наших услугах!</p>
                <p className="text-black">Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут</p>
                <ActionButton text="Заказать звонок" onClick={onSubmit} className="form-submit" />
            </div>
            <div className="form-wrapper container w-50 d-flex flex-column align-items-center">
                <div className={"green-block " + (success === false ? 'bg-danger' : 'bg-success')}></div>
                <form className="question-form container border-0 bg-white p-4 form-control w-75 d-flex flex-column gap-xl-1">
                    <input
                        name="name"
                        id="name"
                        ref={iname}
                        className="name form-text container form-control border-1 border-end"
                        placeholder="Имя"
                        defaultValue={current ? current.name : ""}
                    />

                    <input
                        name="phonenumber"
                        id="phonenumber"
                        ref={iphone}
                        className="phonenumber form-text container form-control  border-1 border-end"
                        placeholder="Телефон"
                    />

                    <textarea
                        name="comment"
                        id="comment"
                        ref={tacomment}
                        className="comment container form-text  border-1 border-end form-control"
                        placeholder="Комментарий"
                    />

                    {
                        errors &&
                        <div className="errors d-flex w-100 flex-column gap-2">
                            {
                                Object.values(errors as any).map(val =>
                                    <span className='text-danger bg-danger p-1 w-100 bg-opacity-10'>{ (val as any)?.message as string }</span>
                                )
                            }
                        </div>
                    }
                    <span className="text-black agreement-text">Соглашение о персональных данных</span>
                </form>
                <div className={"green-block " + (success === false ? 'bg-danger' : 'bg-success')}></div>
            </div>
        </div>
    )
})

export default  QuestionFormWrapper