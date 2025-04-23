import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter
  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
>
  {/* your routes here */}
</BrowserRouter>


const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App