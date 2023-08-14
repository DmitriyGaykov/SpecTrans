import QuestionsWrapper from "./blocks/questionsPage/QuestionsWrapper";

const QuestionsPage = () => {
    return (
        <div className="d-flex flex-column gap-sm-5 padding w-100">
            <h2 className="h2 h2-subtitle">Вопросы от клиентов</h2>
            <QuestionsWrapper />
        </div>
    )
}

export default QuestionsPage