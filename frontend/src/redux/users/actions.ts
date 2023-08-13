import {createAsyncThunk} from "@reduxjs/toolkit";
import User, {userMapper, userToFormData} from "../../models/User";
import axios from "axios";

type SignUpArgs = {
    user: User,
    img: File
}

export const signUp = createAsyncThunk(
    '/redux/signUp',
    async ({ user, img } : SignUpArgs, {rejectWithValue} ) => {
        try {
            const fdata = userToFormData(user, img)
            const resp = await axios.post('/api/auth/reg', fdata)
            return resp.data.token as string
        } catch (e : any) {
            return rejectWithValue(e.response.data)
        }
    })

export const signIn = createAsyncThunk(
    '/redux/signIn',
    async (user : User, { rejectWithValue }) => {
        try {
            const resp = await axios.post('/api/auth/login', user)
            return resp.data.token as string
        } catch (e : any) {
            console.log(e)
            return rejectWithValue(e)
        }
    }
)

export const signInWithToken = createAsyncThunk(
    '/redux/signIn/token',
    async (token : string, { rejectWithValue }) => {
        try {
            const resp = await axios.post('/api/auth/token-login',{token})
            return userMapper(resp.data)
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)