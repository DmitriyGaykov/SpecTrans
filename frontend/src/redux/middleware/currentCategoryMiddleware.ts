import {CategoriesState, setCurrent} from "../categories/categories";
import {AppMiddleware} from "./index";
import {addCookie, addDay} from "../../scripts/cookieScripts";
import {category_cookie_name} from "../../config";
import Category from "../../models/Category";

const currentCategoryMiddleware : AppMiddleware = store => next=> action => {
    if(action.type === setCurrent.type) {
        const category = action.payload as Category

        addCookie(category_cookie_name, category._id, {
            expires: addDay(new Date(), 1)
        })
    }

    return next(action)
}

export default currentCategoryMiddleware