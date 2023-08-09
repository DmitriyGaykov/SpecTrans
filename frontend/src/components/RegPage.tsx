import './../assets/scss/addMaterialPage.scss'
import FormInput from "./buttons/FormInput";
import {RootState, useAppDispatch} from "../redux/store";
import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import User, {isGettedUser} from "../models/User";
import {signUp} from "../redux/users/actions";
import {useSelector} from "react-redux";
import {reset} from "../redux/users/users";
const RegPage = () => {
    const navigator = useNavigate()

    const dispatch = useAppDispatch()

    const errors = useSelector((state : RootState) => state.users.errors)
    const current = useSelector((state : RootState) => state.users.current)

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [img, setImg] = useState<File | null>()

    const onSubmit = (event : FormEvent ) => {
        event.preventDefault()

        const user : User = {
            _id: "",
            name,
            password,
            img: ""
        }

        dispatch(signUp({
            user,
            img: img as File
        }))
    }

    useEffect(() => {
        return () => {
            dispatch(reset())
        }
    }, []);

    useEffect(() => {
        if(isGettedUser(current)) {
           navigator('/')
        }
    }, [current]);

    return (
        <div className="add-material-page d-flex flex-column gap-3 padding w-100">
            <h2 className="h2 h2-subtitle">Зарегистрируйтесь</h2>
            <form
                method="post"
                onSubmit={onSubmit}
                className="add-material-form d-flex flex-column gap-4 w-50 ms-auto container px-4 py-3 rounded-1 bg-white">
                <FormInput
                    type="text"
                    id="name"
                    key="name-reg"
                    placeholder="Введите ваше имя..."
                    error={ [errors.name as string] }
                    onChange={e => setName(e.target.value)}
                />

                <FormInput
                    type="password"
                    id="password"
                    key="pass-reg"
                    placeholder="Придумайте пароль..."
                    error={ [ errors.password as string ]}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="d-flex flex-column w-100 gap-2">
                    <span className="text-black-50 container">Фаша фотография:</span>
                    <FormInput
                        type="file"
                        id="img"
                        className="img form-control"
                        onChange={e => setImg(e.target.files?.item(0))}
                        error={ [errors.img as string ] }
                    />
                </div>

                <button type="submit" className="btn btn-success">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default RegPage