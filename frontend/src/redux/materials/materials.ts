import Material, {materialMapper} from "../../models/Material";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {dellMaterial, editMaterial, getMaterials} from "./actions";
import {UserState} from "../users/users";
import {stat} from "fs";

export interface MaterialState {
    list : Material[],
    editResult?: boolean
}

const initialState : MaterialState = {
    list : [],
    editResult: undefined
}

export const materialsSlice = createSlice({
    name: 'materials',
    initialState,
    reducers : {
        reset(state : MaterialState) {
            state.editResult = undefined
        }
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
            .addCase(editMaterial.pending, state => {
                state.editResult = undefined;
            })
            .addCase(editMaterial.fulfilled, (state, action) => {
                state.editResult = true
                const newMat = action.payload
                state.list = state.list.map(el => el._id === newMat?._id ? {...newMat} : el)
            })
            .addCase(editMaterial.rejected, state => {
                state.editResult = false
            })
            .addCase(dellMaterial.fulfilled, (state, action) => {
                state.list = state.list.filter(el => el._id !== action.payload)
            })
    }
})

export const reducer = materialsSlice.reducer

export const { reset } = materialsSlice.actions
