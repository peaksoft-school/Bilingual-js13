import { Box, styled, Typography } from '@mui/material'
import alice from './assets/alice.png'
import mia from './assets/mia.png'
import oscar from './assets/oscar.png'
import jack from './assets/jack.png'
import rose from './assets/rose.png'
import albert from './assets/albert.png'
import Marquee from 'react-fast-marquee'

const teamMembers = [
   { src: alice, name: 'Alice Archie', role: 'Founder Bilingual' },
   { src: mia, name: 'Mia George', role: 'Marketer' },
   { src: oscar, name: 'Oscar Ryan', role: 'Developer' },
   { src: jack, name: 'Jack William', role: 'UX/UI Designer' },
   { src: rose, name: 'Rose Thomas', role: 'Chief Editor' },
   { src: albert, name: 'Albert Stanley', role: 'Chief Editor' },
]

const Slider = () => {
   return (
      <StyledContainer>
         <StyledContainers>
            <StyledTitle>Our Team</StyledTitle>
            <Marquee
               direction="left"
               speed={100}
               style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
               }}
            >
               {teamMembers.map((member, index) => (
                  <StyledFlexBox key={index}>
                     <img
                        style={{
                           width: '100%',
                           maxWidth: '200px',
                           height: 'auto',
                           margin: '20px',
                        }}
                        src={member.src}
                        alt={member.name}
                     />
                     <StyledTypographySecond variant="h6">
                        {member.name}
                     </StyledTypographySecond>
                     <Typography sx={{ textAlign: 'center' }}>
                        {member.role}
                     </Typography>
                  </StyledFlexBox>
               ))}
            </Marquee>
         </StyledContainers>
      </StyledContainer>
   )
}

export default Slider

const StyledContainer = styled(Box)({
   width: '100%',
   height: '100vh',
   backgroundColor: '#fef5e8',
   display: 'flex',
   justifyContent: 'center',
})

const StyledContainers = styled(Box)({
   width: '80%',
   maxWidth: '1200px',
   textAlign: 'center',
})

const StyledTitle = styled(Typography)({
   textAlign: 'center',
   color: '#3752b4',
   fontSize: '40px',
   marginBottom: '20px',
   fontWeight: 'bold',
})

const StyledTypographySecond = styled(Typography)({
   fontWeight: 'bold',
   color: '#3A10E5',
   textAlign: 'center',
   marginBottom: '10px',
})

const StyledFlexBox = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginX: '10px',
})
