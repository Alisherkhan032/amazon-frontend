import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,  // format-> currentUser: { username: 'user-name' }
    },
    reducers: {
        setCurrentUser: (state, action) => {
            const user = action.payload;
            state.currentUser = user;
        },
        removeCurrentUser: (state, action) => {
            state.currentUser = null;
        },
    }
});

export const { setCurrentUser, removeCurrentUser } = authSlice.actions;

export default authSlice.reducer;
