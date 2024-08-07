import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'In',
    history:[],
};

const whereaboutSlice = createSlice({
    name: 'whereabout',
    initialState,
    reducers: {
        setWhereabout: (state, action) => {
            state.status = 'Out';
            state.history.push(action.payload);
        },

        setBack: (state) => {
            state.status = 'In';
        },
    },
});

export const {setWhereabout, setBack} = whereaboutSlice.actions;
export default whereaboutSlice.reducer;
