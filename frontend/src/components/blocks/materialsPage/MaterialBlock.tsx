import Material, {materialToFormData} from "../../../models/Material";
import {useEffect, useState} from "react";
import User, {equalsUser} from "../../../models/User";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../redux/store";
import edit from './../../../assets/img/edit.svg'
import del from './../../../assets/img/delete.svg'
import save from 'bootstrap-icons/icons/box-arrow-down.svg'
import cancel from 'bootstrap-icons/icons/x-lg.svg'
import ImgButton from "../../buttons/ImgButton";
import JoditEditor from "jodit-react";
import {isThisOrNull} from "../../../scripts/equalsScripts";
import {dellMaterial, editMaterial} from "../../../redux/materials/actions";
import {reset} from "../../../redux/materials/materials";

export type MaterialBlockType = {
    material : Material
}

const MaterialBlock = ({ material } : MaterialBlockType ) => {
    const dispatch = useAppDispatch()

    const current = useSelector((state : RootState) => state.users.current)
    const editResult = useSelector((state : RootState) => state.materials.editResult)

    const [user, setUser] = useState<User>()
    const [editMode, setEditMode] = useState(false)

    const [img, setImg] = useState<File | undefined | null>()
    const [name, setName] = useState<string>()
    const [desc, setDesc] = useState<string>()
    const [price, setPrice] = useState<number>()

    useEffect(() => {
        setUser(material.user)
    }, [material]);

    useEffect(() => {
        if(editResult) {
            getOutFromEditMode()
        }

        if(editResult !== undefined) {
            setTimeout(() => {
                if(editResult !== undefined) {
                    dispatch(reset())
                }
            }, 3000)
        }
    }, [editResult]);

    const onEdit = () => {
        setEditMode(true)
    }

    const onSave = () => {
        const obj = {
            _id: material._id
        }

        if(!isThisOrNull(name, material.name)) {
            Object.assign(obj, {
                name
            })
        }

        if(!isThisOrNull(desc, material.description)) {
            Object.assign(obj, {
                description: desc
            })
        }

        if(!isThisOrNull(price, material.price)) {
            Object.assign(obj, {
                price
            })
        }

        const mat = obj as Material
        dispatch(editMaterial({
            material: {...mat},
            img: img as File
        }))
        clearEditData()
    }

    const onRemove = () => dispatch(dellMaterial(material._id))

    const clearEditData = () => {
        setName(undefined)
        setPrice(undefined)
        setImg(undefined)
        setDesc(undefined)
    }
    const getOutFromEditMode = () => {
        setEditMode(false)
        clearEditData()
    }

    return (
        <div className="material w-100 d-flex flex-column align-items-start justify-content-start gap-2">
            <div className="d-flex w-100 justify-content-between">
                <div className="position-relative">
                    <img src={(img && editMode) ? URL.createObjectURL(img as Blob) :  material.img} alt="" className="material-img"/>

                    {
                        editMode &&
                        <div className="dark-bg position-absolute w-100 h-100 top-0 ">
                            <input type="file" className="form-control w-75 form-check-input" onChange={e => setImg(e.target.files?.item(0))}/>
                        </div>
                    }
                </div>
                {
                    equalsUser(user as User, current) &&
                    <div className="d-flex gap-3 align-items-start">
                        {
                            editResult === true ?
                                <span className="text-success">Все изменения сохранены</span>
                            :   (editResult === false &&
                                <span className="text-danger">Измения не сохранены</span>)
                        }

                        {
                            editMode ?
                            <>
                                <ImgButton img={save} key="save-btn" onClick={onSave}/>
                                <ImgButton img={cancel} key="cancel-btn" onClick={getOutFromEditMode}/>
                            </> : <>
                                <ImgButton img={edit} key="edit-btn" onClick={onEdit}/>
                                <ImgButton img={del} key="del-btn" onClick={onRemove}/>
                            </>
                        }
                    </div>
                }
            </div>
            <div className="container d-flex flex-column gap-4">
                <div className="name-and-date d-flex justify-content-between">
                    {
                        !editMode ?
                            <h1 className="h1 name"> {material.name} </h1>
                            :
                            <input
                                defaultValue={ material.name }
                                className="h1 form-control w-50 form-text"
                                onChange={e => setName(e.target.value)}
                            />
                    }

                    <span>{ material.datePublish.toLocaleDateString() }</span>
                </div>
                {
                    !editMode ?
                    <div className="desc w-100 text-break" dangerouslySetInnerHTML={{__html: material.description }}/>
                        :
                    <JoditEditor value={material.description} onChange={setDesc}/>
                }
            </div>
            <div className="d-flex gap-lg-5 w-100 container align-items-center justify-content-between">
                <span className="text-black-50">Цена: { editMode ? <input type='number' defaultValue={material.price} className="text-success fw-bold form-control" onChange={e => setPrice(Number(e.target.value))}/> : <span className="text-success fw-bold" >{ material.price }</span> } руб.</span>
                <button className="btn btn-success">Заказать</button>
                <span className="text-success text-opacity-25 ms-auto">Добавил { material.user?.name }</span>
            </div>
            <hr className="w-100"/>
        </div>
    )
}

export default MaterialBlock