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
}))

const ContentUsefulVideo = styled('div')`
   width: 100%;
   max-width: 90rem;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

const TitleUsefulVideo = styled('h2')(() => ({
   fontSize: '2.5rem',
   fontWeight: '700',
   fontFamily: 'Gilroy',
   color: 'rgba(55, 82, 180, 1)',
   textAlign: 'center',
   marginBottom: '3rem',
}))

const AnimatedCard = styled(Card)`
   width: 100%;
   max-width: 23.125rem;
   height: 100%;
   border-radius: 1rem;
   transition:
      transform 0.5s,
      box-shadow 0.5s;

   &:hover {
      transform: scale(1.1);
      box-shadow: 0.4375rem 7px 2.1875rem 0.4375rem rgba(0, 0, 0, 0.2);
   }
   iframe {
      width: 100%;
      height: 100%;
   }
`

const TitleUserfulVideo = styled('h2')(() => ({
   color: 'rgba(58, 16, 229, 1)',
   fontWeight: '700',
   fontSize: '1.25rem',
   fontFamily: 'Poppins',
   lineHeight: '1.5112rem',
}))

const SubTitleUserfulVideo = styled('p')(() => ({
   color: 'rgba(33, 38, 41, 1)',
   fontWeight: '400',
   fontSize: '1.125rem',
   fontFamily: 'Poppins',
   lineHeight: '1.305rem',
}))

const VideoWrapper = styled('div')`
   position: relative;
   width: 100%;
   height: 100%;
`
const StyleUsefulVideo = styled(DefaultPlayer)<{ poster: string }>`
   position: relative;
   width: 100%;
   height: 100%;
   .rh5v-Overlay_inner {
      width: 3.625rem;
      height: 3.625rem;
      border-radius: 50%;
      background: white;
   }

   .rh5v-Overlay_icon path {
      fill: rgba(58, 16, 229, 1);
   }
`
