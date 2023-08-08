import Material from "../../models/Material";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getMaterials} from "./actions";

export interface MaterialState {
    list : Material[],
    errors?: string[]
}

const initialState : MaterialState = {
    list : [],
    errors : undefined
}

export const materialsSlice = createSlice({
    name: 'materials',
    initialState,
    reducers : {

    },
    extraReducers: builder => {
        builder
            .addCase(getMaterials.pending, (state : MaterialState) => {
                state.list = []
            })
            .addCase(getMaterials.fulfilled, (state : MaterialState, action : PayloadAction<Material[]>) => {
                state.list = [...action.payload]
                state.list.forEach(el => {
                    el.datePublish = new Date(el.datePublish)
                })
            })
            .addCase(getMaterials.rejected, (state) => {
                state.list = []
            })
    }
})

export const reducer = materialsSlice.reducer