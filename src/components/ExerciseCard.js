import { Button , Stack, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
    <Stack direction='row'>
<Button sx={{
    ml:"21px", color:'#fff', background:"#ffa9a9",
    fontSize:'14px', borderRadius:"20px", textTransform:"capitalize"
}}>
{exercise.bodyPart}
</Button>
<Button sx={{
    ml:"21px", color:'#fff', background:"#fcc757",
    fontSize:'14px', borderRadius:"20px", textTransform:"capitalize"
}}>
{exercise.target}
</Button>
    </Stack>
    <Typography ml="21px" color='#000' fontSize='22px' fontWeight='bold' mt='11px' pb="10px" textTransform='capitalize'>
        {exercise.name}
    </Typography>
    </Link>
  )
}

export default ExerciseCard