import { useState } from 'react'
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Box,
   styled,
} from '@mui/material'
import OpenIcon from '../../../assets/icons/svgs/Open.svg'
import CloseIcon from '../../../assets/icons/svgs/Close.svg'
import IconsBilingual from '../../../assets/icons/svgs/Icons.svg'
import IconsYouTube from '../../../assets/icons/svgs/YouTube.svg'
import IconsFacebook from '../../../assets/icons/svgs/Facebook.svg'
import IconsInstagram from '../../../assets/icons/svgs/Instagram.svg'

const Footer: React.FC = () => {
   const [expanded, setExpanded] = useState<string | false>(false)

   const handleChange =
      (panel: string) =>
      (_event: React.SyntheticEvent, isExpanded: boolean) => {
         setExpanded(isExpanded ? panel : false)
      }

   return (
      <div>
         <StyledContainer>
            {/* Accordion №1 */}
            <TypographyTitle>FAQ:</TypographyTitle>
            <StyledAccordion
               expanded={expanded === 'panel1'}
               onChange={handleChange('panel1')}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === 'panel1' ? (
                        <>
                           <img src={CloseIcon} alt="Close" />
                        </>
                     ) : (
                        <>
                           <img src={OpenIcon} alt="Open" />
                        </>
                     )
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <StyledTypography>What is Bilingual? </StyledTypography>
               </AccordionSummary>
               <AccordionDetails>
                  <StyledTypographySecond>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </StyledTypographySecond>
               </AccordionDetails>
            </StyledAccordion>

            {/* Accordion №2 */}
            <StyledAccordion
               expanded={expanded === 'panel2'}
               onChange={handleChange('panel2')}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === 'panel2' ? (
                        <>
                           <img src={CloseIcon} alt="Close" />
                        </>
                     ) : (
                        <>
                           <img src={OpenIcon} alt="Open" />
                        </>
                     )
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <StyledTypography>
                     How can I show what I am typing during the test?{' '}
                  </StyledTypography>
               </AccordionSummary>
               <AccordionDetails>
                  <StyledTypographySecond>
                     Please take the test in a separate, quiet room. Close all
                     other windows and close all other programs before starting
                     the test. <br />
                     An external USB keyboard or mouse can be used during the
                     test. However, when answering test questions, you should
                     only type on one keyboard and use one mouse. Don't switch
                     between multiple keyboards or mice.
                  </StyledTypographySecond>
               </AccordionDetails>
            </StyledAccordion>

            {/* Accordion №3 */}
            <StyledAccordion
               expanded={expanded === 'panel3'}
               onChange={handleChange('panel3')}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === 'panel3' ? (
                        <>
                           <img src={CloseIcon} alt="Close" />
                        </>
                     ) : (
                        <>
                           <img src={OpenIcon} alt="Open" />
                        </>
                     )
                  }
                  aria-controls="panel3a-content"
                  id="panel3a-header"
               >
                  <StyledTypography>
                     Why should I take the Bilingual English Test?{' '}
                  </StyledTypography>
               </AccordionSummary>
               <AccordionDetails>
                  <StyledTypographySecond>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </StyledTypographySecond>
               </AccordionDetails>
            </StyledAccordion>

            {/* Accordion №4 */}
            <StyledAccordion
               expanded={expanded === 'panel4'}
               onChange={handleChange('panel4')}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === 'panel4' ? (
                        <>
                           <img src={CloseIcon} alt="Close" />
                        </>
                     ) : (
                        <>
                           <img src={OpenIcon} alt="Open" />
                        </>
                     )
                  }
                  aria-controls="panel4a-content"
                  id="panel4a-header"
               >
                  <StyledTypography>
                     How can I make sure my microphone picks up my voice
                     clearly?{' '}
                  </StyledTypography>
               </AccordionSummary>
               <AccordionDetails>
                  <StyledTypographySecond>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </StyledTypographySecond>
               </AccordionDetails>
            </StyledAccordion>

            {/* Accordion №5 */}
            <StyledAccordions
               expanded={expanded === 'panel5'}
               onChange={handleChange('panel5')}
            >
               <AccordionSummary
                  expandIcon={
                     expanded === 'panel5' ? (
                        <>
                           <img src={CloseIcon} alt="Close" />
                        </>
                     ) : (
                        <>
                           <img src={OpenIcon} alt="Open" />
                        </>
                     )
                  }
                  aria-controls="panel4a-content"
                  id="panel5a-header"
               >
                  <StyledTypography>
                     How can I allow a test to record my computer's screen?{' '}
                  </StyledTypography>
               </AccordionSummary>
               <AccordionDetails>
                  <StyledTypographySecond>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse malesuada lacus ex, sit amet blandit leo
                     lobortis eget.
                  </StyledTypographySecond>
               </AccordionDetails>
            </StyledAccordions>
            <StyledIndentation>
               <img src={IconsBilingual} alt="Icons-Bilingual" />
               <StyledSocialIcons>
                  <a href="https://youtube.com/@peaksofthouse?si=0GFR3PW5QAyV3QnM">
                     <img src={IconsYouTube} alt="YouTube" />
                  </a>
                  <a href="https://www.facebook.com/">
                     <img src={IconsFacebook} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/peaksoft.house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                     <img src={IconsInstagram} alt="Instagram" />
                  </a>
               </StyledSocialIcons>
            </StyledIndentation>
            <Typography sx={{ color: '#98A2B3', textAlign: 'center' }}>
               © Copyright PeakSoft. All Rights Reserved
            </Typography>
         </StyledContainer>
      </div>
   )
}

export default Footer

const StyledContainer = styled(Box)({
   width: '100%',
   height: '100%',
   minHeight: '870px',
   backgroundColor: '#262626',
   padding: '120px 109px 12px 110px',
})

const TypographyTitle = styled(Typography)({
   color: 'white',
   fontSize: '40px',
   marginBottom: '38px',
   fontWeight: 'bold',
})

const StyledAccordion = styled(Accordion)({
   backgroundColor: '#262626',
   boxShadow: 'none',
   borderTop: '1px solid gray',
   padding: '10px 0',
})

const StyledAccordions = styled(Accordion)({
   backgroundColor: '#262626',
   boxShadow: 'none',
   borderTop: '1px solid gray',
   borderBottom: '1px solid gray',
   padding: '10px 0',
})

const StyledTypography = styled(Typography)({
   color: 'white',
   fontSize: '20px',
})

const StyledTypographySecond = styled(Typography)({
   color: 'white',
   fontSize: '18px',
})

const StyledIndentation = styled(Box)({
   marginTop: '140px',
})

const StyledSocialIcons = styled(Box)({
   display: 'flex',
   justifyContent: 'end',
   gap: '15px',
   position: 'relative',
   top: '-40px',
})
