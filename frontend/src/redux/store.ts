    import {configureStore} from "@reduxjs/toolkit";
    import {reducer as categories} from './categories/categories'
    import {reducer as materials} from './materials/materials'
    import {reducer as users} from './users/users'
    import {reducer as questions} from './questions/questions'
    import {useDispatch} from "react-redux";
    import currentCategoryMiddleware from "./middleware/currentCategoryMiddleware";
    import getCategoriesFullMiddleware from "./middleware/getCategoriesFullMiddleware";

    export const store = configureStore({
        reducer: {
            categories,
            materials,
            users,
            questions
        },
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware()
                .concat(currentCategoryMiddleware).concat(getCategoriesFullMiddleware.middleware);
        },
        devTools: true
    })

    export type AppDispatch = typeof store.dispatch
    export type RootState = ReturnType<typeof store.getState>

    export const useAppDispatch = () => useDispatch<AppDispatch>()
