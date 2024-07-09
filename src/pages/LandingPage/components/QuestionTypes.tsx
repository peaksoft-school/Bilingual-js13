import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Slider, { Settings } from 'react-slick'
import { QUESTION_TYPES } from '../../../shared/utils/constants'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const QuestionTypes = () => {
   const [currentSlide, setCurrentSlide] = useState(0)

   const settings: Settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: '0px',
      infinite: true,
      slidesToShow: 3,
      speed: 250,
      autoplaySpeed: 3000,
      dots: true,
      rtl: false,
      autoplay: true,
      swipeToSlide: true,
      beforeChange: (next) => setCurrentSlide(next),
      afterChange: (current) => setCurrentSlide(current),
   }

   return (
      <StyledContainer>
         <Typography className="title">Check out each question type</Typography>

         <Box className="slider-container">
            <StyledSlider {...settings}>
               {QUESTION_TYPES.map(({ id, title, image }, dataIndex) => (
                  <StyledCard
                     key={id}
                     // isActive={dataIndex === currentSlide}
                  >
                     <Typography>{title}</Typography>
                     <img src={image} alt={title} />
                  </StyledCard>
               ))}
            </StyledSlider>
         </Box>
      </StyledContainer>
   )
}

export default QuestionTypes

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   backgroundColor: '#fef6e8',
   flexDirection: 'column',
   '& > .title': {
      color: '#3752B4',
      fontFamily: 'Gilroy',
      fontSize: '40px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '60px',
   },
   '& .slider-container': {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      margin: '0 auto',
   },
}))

const StyledSlider = styled(Slider)(() => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(3, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',
   position: 'relative',
   padding: '0 70px',
}))

const StyledCard = styled(Box)(() => ({
   textAlign: 'center',
   width: '100px',

   height: '100px',
   padding: '20px',
   backgroundColor: '#fff',
   borderRadius: '10px',
}))
