import IFormInput from "./IFormInput";
import './../../assets/scss/buttons/formInput.scss'

const FormInput = (props : IFormInput) => {
    return (
        <div className="input-wrapper d-flex flex-column gap-1">
            <input
                type={props.type}
                id={props.id}
                className={`${props.className || props.id} text-black w-100 form-control`}
                placeholder={ props.placeholder || "" }
                name={ props.name || props.id }
                onChange={ props.onChange}
            />
            {
                props.error &&
                <span className="text-danger error-message bg-danger bg-opacity-10 container">{props.error }</span>
            }
        </div>
    )
}

export default FormInput