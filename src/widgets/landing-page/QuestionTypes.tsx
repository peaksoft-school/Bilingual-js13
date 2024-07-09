import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NextArrowI, PrevArrowI } from '../../assets/icons/Arrows'
import { QUESTION_TYPES } from '../../shared/utils/constants'

export interface ArrowProps {
   onClick?: React.MouseEventHandler<SVGSVGElement>
   className?: string
   style?: object
}

interface StyledSlideProps {
   isActive: boolean
}

const PrevArrow = ({ onClick, className, style }: ArrowProps) => (
   <PrevArrowI
      onClick={onClick}
      style={{ ...style, position: 'absolute', bottom: '140px', left: '40%', }}
      className={className}
   />
)

const NextArrow = ({ onClick, className, style }: ArrowProps) => (
   <NextArrowI
      onClick={onClick}
      style={{ ...style, position: 'absolute', bottom: '140px', right: '40%' }}
      className={className}
   />
)

const QuestionTypes = () => {
   const [currentSlide, setCurrentSlide] = useState(0)

   const settings: Settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: '0px',
      infinite: true,
      slidesToShow: 1,
      speed: 250,
      autoplaySpeed: 3000,
      dots: true,
      rtl: false,
      autoplay: true,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (next) => setCurrentSlide(next),
      afterChange: (current) => setCurrentSlide(current),
   }

   return (
      <StyledContainer>
         <Typography className="title">Check out each question type</Typography>

         <Box className="slider-container">
            <StyledSlider {...settings}>
               {QUESTION_TYPES.map(({ id, title, image }, reviewsIndex) => (
                  <StyledCard key={id} isActive={reviewsIndex === currentSlide}>
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
   margin: '0 auto',
   width: '100%',
   justifyContent: 'center',
   alignItems: 'center',

   '& > .title': {
      color: '#3752B4',
      fontFamily: 'Gilroy',
      fontSize: '40px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '40px',
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
   gridTemplateColumns: 'repeat(1, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',

   position: 'relative',
   padding: '0 19%',

   '& .slick-slide': {
      transition: 'transform 4s ease',
   },

   '& .slick-list': {
      width: '80%',
      height: '760px',
      overflow: 'hidden',
      padding: '0px',
   },

   '& .slick-dots': {
      bottom: '160px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

      '& li': {
         width: '5px',
         transition: 'all 300ms',

         '& > button': {
            height: '20px',
            background: '#d7c7e8',
            borderRadius: '10px',
            width: '100%',
            transition: 'all 1s',

            '&:before': {
               color: 'transparent',
            },
         },
      },

      '& .slick-active': {
         height: '45px',
         marginBottom: '-20px',

         '& > button': {
            background: 'blue',
            height: '30px',
            marginBottom: '-30px',
         },
      },
   },
}))

const StyledCard = styled(Box)(({ isActive }: StyledSlideProps) => ({
   position: 'relative',
   width: '500px',
   textAlign: 'center',
   height: '500px',
   maxHeight: '450px',
   maxWidth: '650px',
   cursor: 'pointer',
   background: isActive ? '#666CA7' : '#E5E5E5',
   transition: 'background 0.6s ease,  filter 0.5s ease',
   borderRadius: '10px',
   margin: ' auto',

   '& .MuiTypography-root': {
      color: 'white',
      fontSize: '24px',
      paddingTop: '20px',
   },

   '& img': {
      width: '720px',
      height: '450px',
      margin: 'auto',
   },
}))
