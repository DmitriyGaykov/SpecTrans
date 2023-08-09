import IButton from "./IButton";

const ActionButton = ({text, onClick, className} : IButton) => {
    return (
        <button onClick={onClick} className={"btn btn-success px-lg-4 " + (className || "")}>
            {text}
        </button>
    )
}

export default ActionButton