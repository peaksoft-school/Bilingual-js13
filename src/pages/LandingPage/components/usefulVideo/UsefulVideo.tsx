import {
  AnimatedCard,
    ContainerUsefulVideo,
    ContentUsefulVideo,
    TitleUsefulVideo,
  } from './StyleUsefulVideo';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import { CardActionArea } from '@mui/material';
  import { FC } from 'react';
  import { CARD_RENDER_DATA } from './usefulVideoData';
  
  
  
  
  const UsefulVideo: FC = () => {
    return (
      <>
        <ContainerUsefulVideo>
          <TitleUsefulVideo>Useful videos</TitleUsefulVideo>
          <ContentUsefulVideo>
            {CARD_RENDER_DATA.map((item, index) => (
              <AnimatedCard
                key={index}
              >
                <CardActionArea>
                <CardMedia component="div">
                    <iframe
                      width="370"
                      height="261"
                      src={item.url}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: 'rgba(58, 16, 229, 1)',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        fontFamily: 'Gilroy',
                        lineHeight: '1.5112rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        color: 'rgba(33, 38, 41, 1)',
                        fontWeight: '400',
                        fontSize: '1.125rem',
                        fontFamily: 'Gilroy',
                        lineHeight: '1.305rem',
                      }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </AnimatedCard>
            ))}
          </ContentUsefulVideo>
        </ContainerUsefulVideo>
      </>
    );
  };
  
  export default UsefulVideo;
  