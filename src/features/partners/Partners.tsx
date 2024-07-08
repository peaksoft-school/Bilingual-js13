import Rodonit from '../../assets/Rodonit.svg';
import Lidea from '../../assets/Lidea.svg';
import DEKALB from '../../assets/DEKALB.svg';
import BasfHalf from '../../assets/BasfHalf.svg';
import BASF from '../../assets/BASF.svg';
import Adama from '../../assets/Adama.svg';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ContainerBox, LogoBox, MuiBox, PartnersText } from './StylePartners';
import { FC } from 'react';

const PARTNERS = [
  { name: 'Rodonit', src: Rodonit },
  { name: 'BASF', src: BASF },
  { name: 'Lidea', src: Lidea },
  { name: 'Adama', src: Adama },
  { name: 'DEKALB', src: DEKALB },
  { name: 'BasfHalf', src: BasfHalf },
];

const animation = { duration: 20000, easing: (t: number) => t };

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
      s.moveToIdx(5, true, animation);
    },
    updated(s: any) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s: any) {
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
