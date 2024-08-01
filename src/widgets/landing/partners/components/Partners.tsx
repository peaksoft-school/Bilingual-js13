import { FC } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Box, styled } from '@mui/material'
import { PARTNERS } from '../model/data'

const animation = { duration: 20000, easing: (t: number) => t }

const Partners: FC = () => {
   const [sliderRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      renderMode: 'performance',
      drag: false,
      slides: {
         perView: 5,
         spacing: 15,
      },
      created(s: any) {
         s.moveToIdx(5, true, animation)
      },
      updated(s: any) {
         s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s: any) {
         s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
   })

   return (
      <>
         <PartnersContainer>
            <MuiBox>
               <PartnersText>Partners</PartnersText>
               <LogoBox>
                  <div ref={sliderRef} className="keen-slider">
                     {PARTNERS.map((partner) => (
                        <ContainerBox
                           key={partner.name}
                           className="keen-slider__slide"
                        >
                           <img
                              style={{
                                 width: '10.9375rem',
                                 height: '5.375rem',
                              }}
                              src={partner.src}
                              alt={partner.name}
                           />
                        </ContainerBox>
                     ))}
                  </div>
               </LogoBox>
            </MuiBox>
         </PartnersContainer>
      </>
   )
}

export default Partners

const PartnersContainer = styled(Box)(() => ({
   width: '100%',
   backgroundColor: '#fef5e8',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const MuiBox = styled(Box)(() => {
   return {
      width: '100%',
      maxWidth: '90rem',
      height: '20.875rem',
      overflow: 'hidden',
   }
})

const ContainerBox = styled(Box)(() => {
   return {
      width: '15.9375rem',
      height: '7.875rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      border: '0.0625rem solid rgba(228, 228, 228, 1)',
      borderRadius: '1.25rem',
   }
})

const LogoBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '1.25rem',
}))

const PartnersText = styled('h2')(() => {
   return {
      fontWeight: '700',
      fontSize: '2.5rem',
      color: 'rgba(55, 82, 180, 1)',
      fontFamily: 'Gilroy',
      textAlign: 'center',
      marginBottom: '2.5rem',
   }
})
