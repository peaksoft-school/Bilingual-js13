import airplane from '../../../assets/icons/svgs/airplane.svg'
import earth from '../../../assets/icons/svgs/earth.svg'
import pig from '../../../assets/icons/svgs/pig.svg'
import { Box, styled, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const formatNumber = (num: number): string => {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Animation: React.FC = () => {
   const [countFirst, setCountFirst] = useState<number>(0)
   const [countSecond, setCountSecond] = useState<number>(0)
   const countFirstRef = useRef<HTMLDivElement | null>(null)
   const countSecondRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      let observerFirst: IntersectionObserver
      let observerSecond: IntersectionObserver

      const startCountingFirst = () => {
         const intervalFirst = setInterval(() => {
            setCountFirst((prevCount) => {
               if (prevCount < 10000) {
                  return prevCount + 100
               } else {
                  clearInterval(intervalFirst)
                  return prevCount
               }
            })
         }, 1)
      }

      const startCountingSecond = () => {
         const intervalSecond = setInterval(() => {
            setCountSecond((prevCount) => {
               if (prevCount < 200) {
                  return prevCount + 1
               } else {
                  clearInterval(intervalSecond)
                  return prevCount
               }
            })
         }, 1)
      }

      if (countFirstRef.current) {
         observerFirst = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
               startCountingFirst()
               observerFirst.disconnect()
            }
         })
         observerFirst.observe(countFirstRef.current)
      }

      if (countSecondRef.current) {
         observerSecond = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
               startCountingSecond()
               observerSecond.disconnect()
            }
         })
         observerSecond.observe(countSecondRef.current)
      }

      return () => {
         if (observerFirst) observerFirst.disconnect()
         if (observerSecond) observerSecond.disconnect()
      }
   }, [])

   return (
      <div>
         <StyledBackgroundContainers>
            <StyledContainers>
               <StyledBox>
                  <img src={airplane} alt="first" />
                  <StyledCounter ref={countFirstRef}>
                     <Typography>{formatNumber(countFirst)}</Typography>
                  </StyledCounter>
               </StyledBox>
               <StyledBox>
                  <img src={earth} alt="second" />
                  <StyledCounter ref={countSecondRef}>
                     <Typography sx={{ marginTop: '-10px' }}>
                        {countSecond}
                     </Typography>
                  </StyledCounter>
               </StyledBox>
               <StyledBox>
                  <img src={pig} alt="third" />
               </StyledBox>
            </StyledContainers>
         </StyledBackgroundContainers>
      </div>
   )
}

export default Animation

const StyledBackgroundContainers = styled(Box)`
   width: 100%;
   height: 100vh;
   background-color: #fef5e8;
`

const StyledContainers = styled(Box)`
   display: flex;
   justify-content: space-around;
`

const StyledBox = styled(Box)`
   position: relative;
`

const StyledCounter = styled(Box)`
   position: absolute;
   top: 48%;
   left: 46%;
   transform: translate(-50%, -50%);
   color: #4c4c4c;

   & .MuiTypography-root {
      font-size: 50px;
      font-weight: bold;
      background-color: white;
   }
`
