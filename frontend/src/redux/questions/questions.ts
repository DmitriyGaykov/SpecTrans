import Question from "../../models/Question";
import {createSlice} from "@reduxjs/toolkit";
import {addQuestion, dellQuestion, getQuestions} from "./actions";

export interface QuestionState {
    list: Question[],
    errors?: QuestionErrors,
    success?: boolean
}

const initialState : QuestionState = {
    list: [],
}

export type QuestionErrors = Question

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        reset(state) {
            state.errors = state.success = undefined
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addQuestion.pending, state => {
                state.errors = state.success = undefined
            })
            .addCase(addQuestion.fulfilled, (state, action) => {
                state.success = true
                state.list.push(action.payload)
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.errors = {...action.payload as QuestionErrors}
                state.success = false
            })
            .addCase(getQuestions.pending, state => {
                state.list = []
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(dellQuestion.fulfilled, (state, action) => {
                state.list = state.list.filter(el => el._id !== action.payload)
            })
    }
})

export const reducer = questionSlice.reducer
export const {reset} = questionSlice.actions