import './../assets/scss/addMaterialPage.scss'
import FormInput from "./buttons/FormInput";
import {RootState, useAppDispatch} from "../redux/store";
import {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import User, {isGettedUser} from "../models/User";
import {signIn, signUp} from "../redux/users/actions";
import {useSelector} from "react-redux";
import {reset} from "../redux/users/users";
const AuthPage = () => {
    const navigator = useNavigate()

    const dispatch = useAppDispatch()

    const errors = useSelector((state : RootState) => state.users.errors)
    const current = useSelector((state : RootState) => state.users.current)

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event : FormEvent ) => {
        event.preventDefault()

        const user : User = {
            _id: "",
            name,
            password,
            img: "",
            role: ""
        }

        dispatch(signIn(user))
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
            <h2 className="h2 h2-subtitle">Авторизация</h2>
            <form
                method="post"
                onSubmit={onSubmit}
                className="add-material-form d-flex flex-column gap-4 w-50 ms-auto container px-4 py-3 rounded-1 bg-white">
                {
                    errors.has &&
                    <span className="container text-danger bg-danger bg-opacity-10">Неверное имя пользователя или пароль</span>
                }
                <FormInput
                    type="text"
                    id="name"
                    key="name-reg"
                    placeholder="Введите ваше имя..."
                    onChange={e => setName(e.target.value)}
                />

                <FormInput
                    type="password"
                    id="password"
                    key="pass-reg"
                    placeholder="Придумайте пароль..."
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-success">Войти</button>
            </form>
        </div>
    )
}

export default AuthPage