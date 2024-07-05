import { Box, styled } from '@mui/material';
import Rodonit from '../../assets/Rodonit.svg';
import Lidea from '../../assets/Lidea.svg';
import DEKALB from '../../assets/DEKALB.svg';
import BasfHalf from '../../assets/BasfHalf.svg';
import BASF from '../../assets/BASF.svg';
import Adama from '../../assets/Adama.svg';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const PARTNERS = [
  { name: 'Rodonit', src: Rodonit },
  { name: 'BASF', src: BASF },
  { name: 'Lidea', src: Lidea },
  { name: 'Adama', src: Adama },
  { name: 'DEKALB', src: DEKALB },
  { name: 'BasfHalf', src: BasfHalf },
];

const animation = { duration: 20000, easing: (t: number) => t };

const Partners = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 5,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <MuiBox>
        <PartnersText>Partners</PartnersText>
        <LogoBox>
          <div ref={sliderRef} className="keen-slider">
            {PARTNERS.map((partner) => (
              <ContainerBox key={partner.name} className="keen-slider__slide">
                <img
                  style={{ width: '10.9375rem', height: '5.375rem' }}
                  src={partner.src}
                  alt={partner.name}
                />
              </ContainerBox>
            ))}
          </div>
        </LogoBox>
      </MuiBox>
    </>
  );
};

export default Partners;

const MuiBox = styled(Box)(() => {
  return {
    width: '90rem',
    height: '20.875rem',
    backgroundColor: '#fef5e8',
    overflow: 'hidden',
  };
});

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
  };
});

const LogoBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.25rem',
}));

const PartnersText = styled('h3')(() => {
  return {
    fontWeight: '43.75rem',
    fontSize: '2.5rem',
    color: 'rgba(55, 82, 180, 1)',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: '2.5rem',
  };
});
