import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Category from "../../models/Category";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const response = await axios.get('/api/categories')
        return response.data as Category[]
    })