import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Material from "../../models/Material";

export const getMaterials = createAsyncThunk(
    '/material/getMaterials',
    async (categoryId : string, { rejectWithValue }) => {
        try {
            const resp = await axios.get(`/api/category/${categoryId}/materials`)
            return resp.data
        } catch (e) {
            console.warn(e)
            return rejectWithValue(e)
        }
    }
)