const InfoBlock = ({ num, text } : { num: number, text: string }) => {
    return (
        <div className="info-block w-50 align-items-center justify-content-center d-flex flex-column gap-2">
            <span className="text-black num">{num}</span>
            <span className="text-black-50 text">{text}</span>
        </div>
    )
}

export default InfoBlock