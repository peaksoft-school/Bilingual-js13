import airplane from '../../assets/icons/svgs/airplane.svg'
import earth from '../../assets/icons/svgs/earth.svg'
import pig from '../../assets/icons/svgs/pig.svg'
import { Box, styled, Typography } from '@mui/material'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'

const StatisticsDisplay: React.FC = () => {
   const [startFirst, setStartFirst] = useState<boolean>(false)
   const [startSecond, setStartSecond] = useState<boolean>(false)
   const countFirstRef = useRef<HTMLDivElement | null>(null)
   const countSecondRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      let observerFirst: IntersectionObserver
      let observerSecond: IntersectionObserver

      if (countFirstRef.current) {
         observerFirst = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
               setStartFirst(true)
               observerFirst.disconnect()
            }
         })
         observerFirst.observe(countFirstRef.current)
      }

      if (countSecondRef.current) {
         observerSecond = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
               setStartSecond(true)
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
                     <StyledNumbers>
                        <CountUp
                           start={0}
                           end={10000}
                           duration={2}
                           separator=","
                           redraw={startFirst}
                        />
                     </StyledNumbers>
                  </StyledCounter>
               </StyledBox>
               <StyledBox>
                  <img src={earth} alt="second" />
                  <StyledCounter ref={countSecondRef}>
                     <StyledNumbers sx={{ marginTop: '-10px' }}>
                        <CountUp
                           start={0}
                           end={200}
                           duration={2}
                           redraw={startSecond}
                        />
                     </StyledNumbers>
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

export default StatisticsDisplay

const StyledBackgroundContainers = styled(Box)`
   width: 100%;
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
`

const StyledNumbers = styled(Typography)`
   font-size: 45px;
   font-weight: bold;
   background-color: white;
`
