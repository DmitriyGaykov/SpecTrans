import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../redux/store";
import {useEffect} from "react";
import {getQuestions} from "../../../redux/questions/actions";
import QuestionBlock from "./QuestionBlock";

const QuestionsWrapper = () => {
    const questions = useSelector((state : RootState) => state.questions.list)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getQuestions())
    }, []);

    return (
        <div className="question-wrapper d-flex flex-column gap-sm-3">
            {
                questions?.map(q => <QuestionBlock question={q} key={q._id}/>)
            }
        </div>
    )
}

export default QuestionsWrapper