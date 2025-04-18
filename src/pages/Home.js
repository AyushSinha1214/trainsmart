import React, { useState } from 'react'
import { Box } from '@mui/material';

import Excercises from '../components/Excercises';
import SearchExcercies from '../components/SearchExcercies';
import HeroBanner from '../components/HeroBanner';

const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return (
        <Box>
            <HeroBanner />
            <SearchExcercies
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Excercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
        </Box>
    )
}

export default Home