import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    status: false,
}

const slice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
    
        logOut: (state) => {
            state.status = false
        }
    }
})

export const {login, logOut} =  slice.actions

export default slice.reducer