import Question from "../../../models/Question";
import dell from 'bootstrap-icons/icons/check-lg.svg'
import ConfirmButton from "../../buttons/ConfirmButton";
import {useAppDispatch} from "../../../redux/store";
import {dellQuestion} from "../../../redux/questions/actions";
import {memo} from "react";

const QuestionBlock = memo(({ question } : { question: Question }) => {
    const dispatch = useAppDispatch()

    return (
        <div className="question-block d-flex gap-xl-5 p-2 align-items-center border border-1 bi-border-center rounded-2 w-50">
            <div className="w-75 d-flex flex-column gap-2">
                <div className="w-100 d-flex">
                    <span className='text-black d-block w-25 fw-bold'>Имя:</span>
                    <span className='text-black d-block w-75'>{ question.name }</span>
                </div>
                <div className="w-100 d-flex">
                    <span className='text-black d-block w-25 fw-bold'>Номер телефона:</span>
                    <span className='text-black d-block w-75'>{ question.phone }</span>
                </div>
                <div className="w-100 d-flex flex-column">
                    <span className='text-black d-block w-100 fw-bold'>Комментарий:</span>
                    <span className='text-black d-block w-100 text-break'>{ question.comment }</span>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center w-25'>
                <ConfirmButton onClick={() => dispatch(dellQuestion(question._id))}/>
            </div>
        </div>
    )
})

export default QuestionBlock