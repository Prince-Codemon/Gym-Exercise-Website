import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
const ExerciseVideos = ({name, exerciseVideos}) => {
    if(!exerciseVideos.length){
        return 'Loading...'
    }
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch <span style={{color:"#ff2625", textTransform:'capitalize'}} > {name}</span> exercise
      </Typography>
      <Stack justifyContent="flex-start" flexWrap='wrap' alignItems='center' sx={{flexDirection:{lg:"row"},
    gap:{lg:"110px", xs:'0'}}}>
{exerciseVideos?.slice(0,3).map((item,index)=>(
    <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} key={index} className='exercise-video' target='_blank' rel="noreferrer">
        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
        <Box>
            <Typography variant='h5' color='#000'>
                {item.video.title}
            </Typography>
            <Typography variant='h6' color='#000'>
                {item.video.channelName}
            </Typography>
        </Box>
    </a>
)

)}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos