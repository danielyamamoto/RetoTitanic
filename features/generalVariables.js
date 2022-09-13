import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    index: 2,
}

export const generalVariables = createSlice({
    name: 'variables',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.index = state.index;
        },
    },
})

export const { changeValue } = generalVariables.actions;

export const indexValue = state => state.variables.index;

export default generalVariables.reducer;