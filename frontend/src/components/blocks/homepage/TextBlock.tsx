import './../../../assets/scss/homepage.scss'

export type TextBlockType = {
    title: string,
    subtitle: string
}

const TextBlock = ({ title, subtitle } : TextBlockType) => {
    return (
        <div className="text-block py-3 align-items-center container d-flex flex-column gap-xl-0">
            <p className="title text-black fw-bold">{ title }</p>
            <p className="subtitle text-black-50">{ subtitle }</p>
        </div>
    )
}

export default TextBlock