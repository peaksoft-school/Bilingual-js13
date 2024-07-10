import { Box, Typography } from '@mui/material'
import alice from '../../assets/images/alice.png'
import mia from '../../assets/images/mia.png'
import oscar from '../../assets/images/oscar.png'
import jack from '../../assets/images/jack.png'
import rose from '../../assets/images/rose.png'
import albert from '../../assets/images/albert.png'
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
      <Box
         sx={{
            maxWidth: '1440px',
            width: '100%',
            height: '100vh',
            backgroundColor: '#fef5e8',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
         }}
      >
         <Box sx={{ width: '80%', maxWidth: '1200px', textAlign: 'center' }}>
            <Typography
               sx={{
                  textAlign: 'center',
                  color: '#3752b4',
                  fontSize: '40px',
                  marginBottom: '20px',
                  fontWeight: 'bold',
               }}
            >
               Our Team
            </Typography>
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
                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginX: '10px',
                     }}
                     key={index}
                  >
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
                     <Typography
                        sx={{
                           fontWeight: 'bold',
                           color: '#3A10E5',
                           textAlign: 'center',
                           marginBottom: '10px',
                        }}
                        variant="h6"
                     >
                        {member.name}
                     </Typography>
                     <Typography sx={{ textAlign: 'center' }}>
                        {member.role}
                     </Typography>
                  </Box>
               ))}
            </Marquee>
         </Box>
      </Box>
   )
}

export default Slider
