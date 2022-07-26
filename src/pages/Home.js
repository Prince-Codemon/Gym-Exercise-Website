import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import { HeroBanner } from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart ,setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
}

export default Home