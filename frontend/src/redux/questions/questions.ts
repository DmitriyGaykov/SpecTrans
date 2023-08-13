import Question from "../../models/Question";
import {createSlice} from "@reduxjs/toolkit";
import {addQuestion} from "./actions";

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
            .addCase(addQuestion.fulfilled, state => {
                state.success = true
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.errors = {...action.payload as QuestionErrors}
                state.success = false
            })
    }
})

export const reducer = questionSlice.reducer
export const {reset} = questionSlice.actions