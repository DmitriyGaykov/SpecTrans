import Category from "../../../models/Category";
import {useEffect, useState} from "react";

export type CategoryBlockType =  {
    cat: Category,
    highlight: boolean,
    onClick?: () => void
}

const CategoryBlock = ({ cat, highlight, onClick } : CategoryBlockType) => {
    const [category, setCategory] = useState(cat)

    useEffect(() => {
        setCategory(cat)
    }, [cat])

    return (
        <div className={`category w-100 d-flex justify-content-center p-1 border-bottom ${highlight ? "border-success text-success highlight" : "border-black text-black"}`}
        onClick={onClick}>
            {category.name}
        </div>
    )
}

// @ts-ignore
export default CategoryBlock