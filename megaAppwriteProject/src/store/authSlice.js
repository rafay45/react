import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logOut: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logOut} = slice.actions;

export default slice.reducer;