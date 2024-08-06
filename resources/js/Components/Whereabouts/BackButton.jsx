import React from 'react';
import { useDispatch } from 'react-redux';
import { setBack } from '@/slices/whereaboutSlice';
import axios from 'axios';

const BackButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        axios.post('/back').then(() => {
            dispatch(setBack());
        });
    };

    return <button onClick={handleClick}>I'm Back</button>
};
export default BackButton;
