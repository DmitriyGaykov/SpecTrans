import {configureStore, PayloadAction} from "@reduxjs/toolkit";
import {reducer as categories} from './categories/categories'
import {reducer as materials} from './materials/materials'
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        categories: categories,
        materials: materials
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
