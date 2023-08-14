import {createAsyncThunk} from "@reduxjs/toolkit";
import Question, {questionToFormData} from "../../models/Question";
import axios from "axios";
import Category from "../../models/Category";

export const addQuestion = createAsyncThunk(
    '/add-question',
    async (question : Question, {rejectWithValue}) => {
        try {
            const formData = questionToFormData(question)
            const resp = await axios.post('/api/add-question', formData)
            return resp.data as Question;
        } catch (e : any) {
            return rejectWithValue(e.response.data)
        }
    }
)


export const getQuestions = createAsyncThunk(
    '/get-questions',
    async () => {
        try {
            const res = await axios.get('/api/questions')
            return res.data as Question[]
        } catch (e) {
            return [] as Question[]
        }
    }
)

export const dellQuestion = createAsyncThunk(
    '/dell-question',
    async (_id : string, {rejectWithValue})=> {
        try {
            await axios.delete('api/questions/dell/' + _id)
            return _id
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)