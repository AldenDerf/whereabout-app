import  {configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../slices/userSlice";
import whereaboutReducer from '../slices/whereaboutSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        whereabout: whereaboutReducer
    },
});
