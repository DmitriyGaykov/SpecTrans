import {memo, useEffect, useState} from "react";
import MaterialBlock from "./MaterialBlock";
import {RootState, useAppDispatch} from "../../../redux/store";
import {useSelector} from "react-redux";
import {getMaterials} from "../../../redux/materials/actions";

const Materials = memo(() => {
    const dispatch = useAppDispatch()

    const materials = useSelector((state : RootState) => state.materials.list)
    const category = useSelector((state : RootState) => state.categories.current)
    const editRes = useSelector((state : RootState) => state.materials.editResult)

    useEffect(() => {
        if(category != null)
            dispatch(getMaterials(category._id.toString()))
    }, [category]);

    return (
        <div className="materials d-flex w-100 flex-column gap-sm-5">
            {
                materials?.map(el => <MaterialBlock material={el} key={el._id}/>)
            }
        </div>
    )
})

export default Materials