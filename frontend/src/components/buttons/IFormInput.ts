import {ChangeEvent} from "react";

export default interface IFormInput {
    type: string,
    id?: string,
    className?: string,
    name?: string,
    placeholder?: string
    error?: string[]
    onChange?: (e : ChangeEvent<HTMLInputElement>) => void
}