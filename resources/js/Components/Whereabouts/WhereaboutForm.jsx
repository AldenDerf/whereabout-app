import React
, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setWhereabout } from '@/slices/whereaboutSlice';
import { setWhereabout } from '@/slices/whereaboutSlice';
import axios from 'axios';

const WhereaboutForm = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const whereaboutData = {location, time: new Date().toISOStrung() };

        axios.post('/whereabouts', whereaboutData).then(() => {
            dispatch(setWhereabout(whereaboutData));
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder='Where are you?'
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default WhereaboutForm;
