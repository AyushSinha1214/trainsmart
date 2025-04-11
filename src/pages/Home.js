import React, { useState } from 'react'
import { Box } from '@mui/material';

import Excercises from '../components/Excercises';
import SearchExcercies from '../components/SearchExcercies';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExcercies />
            <Excercises />
        </Box>
    )
}

export default Home