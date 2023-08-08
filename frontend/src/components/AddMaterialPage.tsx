import './../assets/scss/addMaterialPage.scss'
import FormInput from "./buttons/FormInput";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../redux/store";
import {FormEvent, useEffect, useState} from "react";
import {getCategories} from "../redux/categories/actions";
import JoditEditor from "jodit-react";
import {addMaterial} from "../scripts/addMaterial";
import {useNavigate} from "react-router";
const AddMaterialPage = () => {
    const categories = useSelector((state : RootState) => state.categories).list

    const navigator = useNavigate()

    const dispatch = useAppDispatch()

    const [desc, setDesc] = useState("")
    const [img, setImg] = useState<File | null>()
    const [errors, setErrors] = useState<Map<string, string>>()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    const onSubmit = async (event : FormEvent ) => {
        event.preventDefault()

        const formData = new FormData()
        // @ts-ignore
        formData.set('name', event.target.name.value )
        // @ts-ignore
        formData.set('price', event.target.price.value)
        // @ts-ignore
        formData.set('categoryId', categories.find(el => el.name === event.target.category.value)?._id)
        // @ts-ignore
        formData.set('description', desc)
        // @ts-ignore
        formData.set('img', img)

        const errors = await addMaterial(formData)

        if(errors) {
            setErrors(errors)
        } else {
            navigator('/')
        }
    }

    return (
        <div className="add-material-page d-flex flex-column gap-3 padding w-100">
            <h2 className="h2 h2-subtitle">Добавить материал</h2>
            <form
                method="post"
                onSubmit={onSubmit}
                className="add-material-form d-flex flex-column gap-4 w-75 ms-auto container px-4 py-3 rounded-1 bg-white">
                <FormInput
                    type="text"
                    id="name"
                    placeholder="Введите название товара..."
                    error={ [errors?.get('name') as string] }
                />

                <FormInput
                    type="number"
                    id="price"
                    placeholder="Введите цену на товар..."
                    error={ [ errors?.get('price') as string ]}
                />

                <div className="d-flex flex-column w-100 gap-2">
                    <span className="text-black">Категория:</span>
                    <select name="category" className="form-select" id="category">
                        {
                           categories.map(cat => <option key={cat._id}>{cat.name}</option>)
                        }
                    </select>
                </div>

                <div className="d-flex flex-column w-100 gap-2">
                    <span>Введите описание товара:</span>
                    <JoditEditor
                        value=""
                        className="desc"
                        onChange={setDesc}

                    />
                    {
                        errors?.get('description') &&
                        <span className="text-danger error-message bg-danger bg-opacity-10 container">{errors.get('description')}</span>
                    }
                </div>

                <FormInput
                    type="file"
                    id="img"
                    className="img form-control"
                    onChange={e => setImg(e.target.files?.item(0))}
                    error={ [errors?.get('img') as string ] }
                />

                <button type="submit" className="btn btn-success">Добавить</button>
            </form>
        </div>
    )
}

export default AddMaterialPage