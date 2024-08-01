import { Box, styled, Typography } from '@mui/material'
import alice from '../../../assets/images/alice.png'
import mia from '../../../assets/images/mia.png'
import oscar from '../../../assets/images/oscar.png'
import jack from '../../../assets/images/jack.png'
import rose from '../../../assets/images/rose.png'
import albert from '../../../assets/images/albert.png'
import Marquee from 'react-fast-marquee'

const teamMembers = [
   { src: alice, name: 'Alice Archie', role: 'Founder Bilingual' },
   { src: mia, name: 'Mia George', role: 'Marketer' },
   { src: oscar, name: 'Oscar Ryan', role: 'Developer' },
   { src: jack, name: 'Jack William', role: 'UX/UI Designer' },
   { src: rose, name: 'Rose Thomas', role: 'Chief Editor' },
   { src: albert, name: 'Albert Stanley', role: 'Chief Editor' },
]

const OurTeam = () => {
   return (
      <MainContainer>
         <BoxContainer>
            <StyledContainers>
               <StyledTitle>Our Team</StyledTitle>
               <Marquee
                  direction="left"
                  speed={50}
                  style={{
                     display: 'flex',
                     justifyContent: 'space-around',
                     alignItems: 'center',
                  }}
               >
                  {teamMembers.map((member, index) => (
                     <StyledFlexBox key={index}>
                        <StyledImg src={member.src} alt={member.name} />
                        <StyledTypographySecond variant="h6">
                           {member.name}
                        </StyledTypographySecond>
                        <Typography>{member.role}</Typography>
                     </StyledFlexBox>
                  ))}
               </Marquee>
            </StyledContainers>
         </BoxContainer>
      </MainContainer>
   )
}

export default OurTeam

const MainContainer = styled(Box)({
   width: '100%',
   backgroundColor: '#fef5e8',
   display: 'flex',
   justifyContent: 'center',
   paddingBottom: '120px',
})

const BoxContainer = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledContainers = styled(Box)({
   width: '100%',
   maxWidth: '1330px',
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
})

const StyledFlexBox = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginX: '10px',
})

const StyledImg = styled('img')({
   width: '100%',
   maxWidth: '200px',
   height: 'auto',
   margin: '20px',
})
