import { configureStore } from "@reduxjs/toolkit";
import variablesReducer from './features/generalVariables';

export const store = configureStore({
    reducer: {
        variables: variablesReducer,
    },
});