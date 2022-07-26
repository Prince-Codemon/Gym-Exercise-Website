import { Box,Stack, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
export const HeroBanner = () => {
  return (
    <Box
    sx={{mt:{lg:'212px' , xs:'70px'}, ml:{sm:'50px'}}}
     position='relative' p='20px'
    >
        <Typography color='#FF2625' fontWeight='600' fontSize='24px'>
            Fitness Club
        </Typography>
        <Typography fontWeight='700' sx={{
            fontSize:{lg:'44px', xs:'40px'}
        }} mb='23px' mt='30px'>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out the most effective exerciese
        </Typography>
        <Button variant='contained'  color='error' href='#exercises' sx={{background:'#ff2625', padding:"10px"}}  >
            Explore Exercises
        </Button>
        <Typography fontWeight={600} color='#ff2625' sx={{opacity:.1, display:{lg:'block', xs:'none'}}}
        fontSize='200px'>
            Exercise
        </Typography>
<img src={HeroBannerImage} alt="banner" className='hero-banner-img' />

    </Box>
  )
}
