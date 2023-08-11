import {memo, useEffect, useState} from "react";
import CategoryBlock from "./CategoryBlock";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../redux/store";
import { setCurrent} from "../../../redux/categories/categories";
import {getCategories} from "../../../redux/categories/actions";

const Categories = memo(() => {
    const dispatch = useAppDispatch()
    const categories = useSelector((state : RootState) => state.categories.list)
    const current = useSelector((state : RootState) => state.categories.current)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <nav className="categories d-flex w-100">
            {
                categories &&
                categories.map(cat => <CategoryBlock
                                                 cat={cat}
                                                 highlight={cat === current}
                                                 onClick={() => dispatch(setCurrent(cat))}
                                                 key={cat._id}/>)
            }
        </nav>
    )
})

export default Categories