import User from "../../models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {signIn, signInWithToken, signUp} from "./actions";
import {removeCookie} from "../../scripts/cookieScripts";
import {token_name} from "../../config";

export interface UserState {
    current: User;
    token?: string;
    errors: UserStateError;
}

export interface UserStateError {
    name?: string
    password?: string
    img?: string
    has?: boolean
}

const DEFAULT : User = {
    _id: "",
    name: "",
    password: "",
    img: ""
}

const initialState : UserState = {
    current: DEFAULT,
    errors: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset(state) {
            state.errors = {}
        },
        logout(state) {
            state.current = DEFAULT
            state.token = undefined
            removeCookie(token_name)
        },
        setTokenValue(state, action : PayloadAction<string | undefined>) {
            state.token = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(signUp.pending, (state : UserState) => {
                state.current = DEFAULT
                state.errors = {}
            })
            .addCase(signUp.fulfilled, (state : UserState, action : PayloadAction<string | undefined>) => {
                state.token = action.payload
            })
            .addCase(signUp.rejected, (state : UserState, action) => {
                const errors : any = action.payload
                Object.keys(errors as any).forEach(key => (state.errors as any)[key] = errors[key].message)
            })
            .addCase(signIn.pending, state => {
                state.current = DEFAULT
                state.errors = {}
            })
            .addCase(signIn.fulfilled, (state: UserState, action : PayloadAction<string | undefined>) => {
                state.token = action.payload
            })
            .addCase(signIn.rejected, (state : UserState) => {
                state.errors['has'] = true
            })
            .addCase(signInWithToken.pending, (state : UserState) => {
                state.current = DEFAULT
            })
            .addCase(signInWithToken.fulfilled, (state : UserState, action : PayloadAction<User | undefined>) => {
                state.current = action.payload as User
            })
    }
})

export const reducer = userSlice.reducer

export const {reset, logout, setTokenValue} = userSlice.actions