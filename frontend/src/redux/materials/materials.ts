import Material, {materialMapper} from "../../models/Material";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getMaterials} from "./actions";

export interface MaterialState {
    list : Material[],
}

const initialState : MaterialState = {
    list : [],
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
                state.list = [...action.payload].map(el => materialMapper(el)) as Material[]
                console.log(state.list)
            })
            .addCase(getMaterials.rejected, (state) => {
                state.list = []
            })
    }
})

export const reducer = materialsSlice.reducer
