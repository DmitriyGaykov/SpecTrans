import axios, {AxiosError} from "axios";
import Material from "../models/Material";

export const addMaterial = async (formData : FormData) => {
    try {
        const resp = await axios.post('/api/add-material', formData)
    } catch (e : any) {
        const data = e?.response?.data
        const errors = new Map<string, string>()

        console.log(data)
        Object.keys(data).map(key => errors.set(key, data[key].message))

        return errors
    }
}