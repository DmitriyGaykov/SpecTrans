import IButton from "./IButton";
import {Style} from "util";
import {CSSProperties, useEffect, useRef, useState} from "react";
import {ReactComponent as Confirm} from 'bootstrap-icons/icons/check-lg.svg'
import {useAppDispatch} from "../../redux/store";
import {dellQuestion} from "../../redux/questions/actions";

const buttStyle : CSSProperties = {
    borderRadius: '1000px'
}

const ConfirmButton = ({ onClick } : IButton) => {
    const butt = useRef<HTMLButtonElement | null>(null)
    const [confirm, setConfirm] = useState(true)

    useEffect(() => {
        if(butt) {
            butt.current?.addEventListener('click', () => {
                setConfirm(false)
            })
        }
    }, [butt]);

    useEffect(() => {
        if(onClick)
            butt.current?.addEventListener('click', onClick)
    }, []);

    return (
        <button ref={butt} className={"btn d-flex p-2 justify-content-center align-items-center " + (confirm ? 'bg-success' : 'bg-danger')}  style={buttStyle} onClick={onClick}>
            <Confirm fill='white' className='bi-check bi-check-lg' viewBox='0 0 16 16' width='16' height='16'/>
        </button>
    )
}

export default ConfirmButton