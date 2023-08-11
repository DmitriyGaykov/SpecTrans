import {createListenerMiddleware} from "@reduxjs/toolkit";
import {getCategories} from "../categories/actions";
import {getCookie} from "../../scripts/cookieScripts";
import {category_cookie_name} from "../../config";
import {setCurrent} from "../categories/categories";
import Category from "../../models/Category";

const getCategoriesFullMiddleware = createListenerMiddleware()

getCategoriesFullMiddleware.startListening({
    actionCreator: getCategories.fulfilled,
    effect: (action, store) => {
        const categories = action.payload as Category[]
        const cookie = getCookie(category_cookie_name)

        if(cookie) {
            store.dispatch(setCurrent(categories.find(el => el?._id === cookie) as Category))
        } else {
            store.dispatch(setCurrent(categories.at(0) as Category))
        }
    }
})

export default getCategoriesFullMiddleware