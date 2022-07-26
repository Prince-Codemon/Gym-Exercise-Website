import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from '../components/HorizontalScrollBar'
import Loader from './Loader'
const SimilarExercises = ({equipmentExercises, targetMuscleExercises}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercise that <span style={{ color: "#ff2625", textTransform: "capitalize" }}> target</span> the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:"2", position:'relative'}}>
{targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> :<Loader/>}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercise that <span style={{ color: "#ff2625", textTransform: "capitalize" }}> use</span> the same equipment
      </Typography>
      <Stack direction='row' sx={{p:"2", position:'relative'}}>
{equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> :<Loader/>}
      </Stack>
    </Box>
  );
}

export default SimilarExercises