import { FC } from 'react'
import 'react-html5video/dist/styles.css'

import {
   Card,
   CardActionArea,
   CardContent,
   CardMedia,
   styled,
} from '@mui/material'
import { CARD_RENDER_DATA } from '../model/usefulVideoData'
import { DefaultPlayer } from 'react-html5video'

const UsefulVideo: FC = () => (
   <>
      <ContainerUsefulVideo>
         <StyledBoxUsefulVideo>
            <TitleUsefulVideo>Useful videos</TitleUsefulVideo>
            <ContentUsefulVideo>
               {CARD_RENDER_DATA.map(({ id, poster, video, title, text }) => (
                  <AnimatedCard key={id}>
                     <CardActionArea>
                        <CardMedia component="div">
                           <VideoWrapper>
                              <StyleUsefulVideo
                                 poster={poster}
                                 controls={[
                                    'PlayPause',
                                    'Seek',
                                    'Time',
                                    'Volume',
                                    'FullScreen',
                                 ]}
                              >
                                 <source src={video} type="video/webm" />
                              </StyleUsefulVideo>
                           </VideoWrapper>
                        </CardMedia>
                        <CardContent>
                           <TitleUserfulVideo>{title}</TitleUserfulVideo>
                           <SubTitleUserfulVideo>{text}</SubTitleUserfulVideo>
                        </CardContent>
                     </CardActionArea>
                  </AnimatedCard>
               ))}
            </ContentUsefulVideo>
         </StyledBoxUsefulVideo>
      </ContainerUsefulVideo>
   </>
)

export default UsefulVideo

const ContainerUsefulVideo = styled('div')(() => ({
   width: '100%',
   padding: '0rem 5.9375rem 7.5rem 5.9375rem',
   backgroundColor: '#fef5e8',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   '@media (max-width: 1024px)': {
      padding: '0rem 3rem 5rem 3rem',
   },
   '@media (max-width: 768px)': {
      padding: '0rem 1.5rem 3rem 1.5rem',
   },
}))

const StyledBoxUsefulVideo = styled('div')(() => ({
   width: '100%',
   maxWidth: '90rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center'
}))

const ContentUsefulVideo = styled('div')(() => ({
   width: '100%',
   maxWidth: '1250px',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
   gap: '40px',
   '@media (max-width: 1024px)': {
      justifyContent: 'center',
      gap: '40px',
   },
}))

const TitleUsefulVideo = styled('h2')(() => ({
   fontSize: '2.5rem',
   fontWeight: '700',
   fontFamily: 'Gilroy',
   color: 'rgba(55, 82, 180, 1)',
   textAlign: 'center',
   marginBottom: '3rem',
   '@media (max-width: 768px)': {
      fontSize: '2rem',
      marginBottom: '2rem',
   },
}))

const AnimatedCard = styled(Card)(() => ({
   width: '100%',
   maxWidth: '23.125rem',
   height: 'auto',
   borderRadius: '1rem',
   transition: 'transform 0.5s, box-shadow 0.5s',
   '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0.4375rem 7px 2.1875rem 0.4375rem rgba(0, 0, 0, 0.2)',
   },
   '@media (max-width: 768px)': {
      maxWidth: '100%',
      marginBottom: '2rem',
   },
}))

const TitleUserfulVideo = styled('h2')(() => ({
   color: 'rgba(58, 16, 229, 1)',
   fontWeight: '700',
   fontSize: '1.25rem',
   fontFamily: 'Poppins',
   lineHeight: '1.5112rem',
   '@media (max-width: 768px)': {
      fontSize: '1.125rem',
   },
}))

const SubTitleUserfulVideo = styled('p')(() => ({
   color: 'rgba(33, 38, 41, 1)',
   fontWeight: '400',
   fontSize: '1.125rem',
   fontFamily: 'Poppins',
   lineHeight: '1.305rem',
   '@media (max-width: 768px)': {
      fontSize: '1rem',
   },
}))

const VideoWrapper = styled('div')(() => ({
   position: 'relative',
   width: '100%',
   paddingTop: '56.25%',
   overflow: 'hidden',
}))

const StyleUsefulVideo = styled(DefaultPlayer)<{ poster: string }>(() => ({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   '.rh5v-Overlay_inner': {
      width: '3.625rem',
      height: '3.625rem',
      borderRadius: '50%',
      background: 'white',
   },
   '.rh5v-Overlay_icon path': {
      fill: 'rgba(58, 16, 229, 1)',
   },
}))
