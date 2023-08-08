import Category from "../../models/Category";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCategories} from "./actions";

export interface CategoriesState {
    current?: Category,
    list: Category[]
}

const initialState : CategoriesState = {
    current: {
        _id: "",
        name: "",
        description: ""
    },
    list: []
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCurrent: (state : CategoriesState, action : PayloadAction<Category>) => {
            state.current = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCategories.pending, state => {
                state.list = []
                state.current = undefined
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.list = [...action.payload]
                state.current = state.list.at(0) as Category
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.current = undefined
                state.list = []
            })
    }
})

export const reducer = categoriesSlice.reducer
export const { setCurrent } = categoriesSlice.actions