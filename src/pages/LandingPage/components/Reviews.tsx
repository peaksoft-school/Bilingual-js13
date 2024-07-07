import { useState } from 'react'
import { Box, Rating, Typography, styled } from '@mui/material'
import Slider, { Settings } from 'react-slick'
import { REVIEWS } from '../../../shared/utils/constants'
import { NextArrowI, PrevArrowI } from '../../../assets/icons/Arrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Define ArrowProps interface for arrow components
interface ArrowProps {
   onClick?: React.MouseEventHandler<SVGSVGElement>
   className?: string
}

// Previous arrow component
const PrevArrow = ({ onClick, className }: ArrowProps) => (
   <PrevArrowI onClick={onClick} className={className} />
)

// Next arrow component
const NextArrow = ({ onClick, className }: ArrowProps) => (
   <NextArrowI onClick={onClick} className={className} />
)

const Feedbacks = () => {
   const [currentSlide, setCurrentSlide] = useState(0)

   // Settings object for the Slider component
   const settings: Settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: '0px', // Corrected centerPadding to a string
      infinite: true,
      slidesToShow: 3,
      speed: 250,
      autoplaySpeed: 3000,
      dots: true,
      rtl: false,
      autoplay: true,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (next) => setCurrentSlide(next), // Corrected beforeChange and afterChange callbacks
      afterChange: (current) => setCurrentSlide(current),
   }

   return (
      <StyledContainer>
         <Typography className="title">Why people love Bilingual</Typography>

         <Box className="slider-container">
            <StyledSlider {...settings}>
               {REVIEWS.map(
                  ({ id, name, description, rating, avatar }, reviewsIndex) => (
                     <StyledCard
                        key={id}
                        isActive={reviewsIndex === currentSlide}
                     >
                        <img src={avatar} alt={name} />
                        <Typography className='description'>{description}</Typography>
                        <Typography className='name'>{name}</Typography>
                        <Rating value={rating} readOnly />
                     </StyledCard>
                  )
               )}
            </StyledSlider>
         </Box>
      </StyledContainer>
   )
}

export default Feedbacks

// StyledContainer styles using styled from @mui/material
const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   backgroundColor: '#fef6e8',
   flexDirection: 'column',
   marginBottom: '120px',

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

// StyledSlider styles using styled from @mui/material
const StyledSlider = styled(Slider)(() => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(3, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',
   position: 'relative',
   padding: '0 70px',


   '& .slick-slide': {
      transition: 'transform 2s ease',
   },



   '& .name': {
      position: 'absolute',
      bottom: '100px',
      left: '50%',
    
      transform: 'translateX(-50%)',
      color: '#23212ACC',
      fontSize: '16px',
      fontWeight: 600,
      paddingTop: '24px',
   },

   '& .slick-center, .slick-center h4': {
    color: 'white',
 },

   '& .MuiRating-root': {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
   },

   '& .slick-slide:not(.slick-center)': {
      transform: 'scale(0.9)',
      opacity: '0.9',
   },

   '& .slick-slide.slick-center': {
      transform: 'scale(1)',
      opacity: '1',
   },

  //  '& .slick-track': {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'flex-start',
  //     paddingTop: '50px',
  //  },

   '& .slick-list': {
      width: '80%',
      height: '760px',
      overflow: 'hidden',
      padding: '50px',
   },

   '& .slick-arrow': {
      display: 'flex',
      alignItems: 'center',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },

   '& .slick-prev': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: '128px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
      top: '320px',

      '@media screen and (max-width: 1200px)': {
         top: '288px',
         width: '50px',
         height: '50px',
      },
   },

   '& .slick-next': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginRight: '128px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
      top: '320px',
   },

   '& .slick-dots': {
      bottom: '88px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '20px',

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

interface StyledSlideProps {
   isActive: boolean
}

const StyledCard = styled(Box)(({ isActive }: StyledSlideProps) => ({
   position: 'relative',
   width: '564px',

   textAlign: 'center',
   padding: '30px',
   height: '564px',
   maxHeight: '622px',
   maxWidth: '366px',
   cursor: 'pointer',
   background: isActive ? 'gray' : '#E5E5E5',
   transition: 'background 0.4s ease, transform 0.6s ease, filter 0.5s ease',
   borderRadius: '40px',

   '& img': {
    width: isActive ? '250px' : '180px',
    height: isActive ? '250px' : '180px',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: isActive ? '40px' : '70px',
    transition:
       'width 0.3s ease, height 0.3s ease, margin-top 0.3s ease, filter 0.7s ease',
 },

   '& .description': {
      width: '306px',
      margin: 'auto',
      paddingTop: '52px',
   },


}))
