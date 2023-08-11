import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Material, {materialMapper, materialToFormData} from "../../models/Material";

export const getMaterials = createAsyncThunk(
    '/material/getMaterials',
    async (categoryId : string, { rejectWithValue }) => {
        try {
            const resp = await axios.get(`/api/category/${categoryId}/materials`)
            return resp.data as Material[]
        } catch (e) {
            console.warn(e)
            return rejectWithValue(e)
        }
    }
)

export type editMaterialParams = {
    material: Material,
    img?: File
}
export const editMaterial = createAsyncThunk(
    '/material/editMaterial',
    async ({material, img }: editMaterialParams, {rejectWithValue}) => {
        try {
            const fdata = materialToFormData(material, img)
            const resp = await axios.put(`/api/materials/edit/${material._id}`, fdata)
            return materialMapper(resp.data)
        } catch (e) {
            return rejectWithValue('')
        }
    }
)

export const dellMaterial = createAsyncThunk(
    '/material/dellMaterial',
    async (id : string, { rejectWithValue })=> {
        try {
            await axios.delete('/api/materials/dell/' + id)
            return id
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)