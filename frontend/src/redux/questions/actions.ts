import {createAsyncThunk} from "@reduxjs/toolkit";
import Question, {questionToFormData} from "../../models/Question";
import axios from "axios";

export const addQuestion = createAsyncThunk(
    '/add-question',
    async (question : Question, {rejectWithValue}) => {
        try {
            const formData = questionToFormData(question)
            const resp = await axios.post('/api/add-question', formData)
            return;
        } catch (e : any) {
            return rejectWithValue(e.response.data)
        }
    }
)