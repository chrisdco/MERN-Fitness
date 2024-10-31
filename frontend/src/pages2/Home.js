import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components2/Exercises';
import SearchExercises from '../components2/SearchExercises';
import HeroBanner from '../components2/HeroBanner';
// import '../css/Home.css'
import '../css/App.css'

const SearchHome = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default SearchHome;
