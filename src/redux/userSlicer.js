import { createSlice } from '@reduxjs/toolkit';


const initialState = { user: null, active: false }

const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action) {
            state.user = action.payload;
        },
        removeUser(state) {
            state.user = null;
        },
        isAdminLogin(state, action){
            state.active = action.payload;
        }
    },
})

export const { saveUser, removeUser, isAdminLogin } = userSlicer.actions
export default userSlicer.reducer