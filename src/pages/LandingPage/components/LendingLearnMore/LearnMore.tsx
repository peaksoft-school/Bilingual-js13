import LineLearnMore from '../../../../assets/icons/svgs/LineLearnMore.svg';
import Built from './Built';
import Convenient from './Convenient';
import ExpandBox from './ExpandBox';
import Innovative from './Innovative';
import SecureDesign from './SecureDesign';
import { ButtonLearnMore, ContainerBox } from './StyleLearnMore';
import { MuiBox } from './StyleLearnMore';
import { Title } from './StyleLearnMore';
import { LineSvg } from './StyleLearnMore';
import Button from '../../../../shared/UI/Button';

const LearnMore = () => {
  return (
    <ContainerBox>
      <MuiBox>
        <Title>Learn more</Title>
        
        <LineSvg>
          <img src={LineLearnMore} alt="LinerLearnMore" />
        </LineSvg>

        <ExpandBox />

        <Built />

        <Innovative />

        <Convenient/>

        <SecureDesign/>

        <ButtonLearnMore>
          <Button className='learn-more-button' customVariant='Undenary'>GET STARTED</Button>
        </ButtonLearnMore>

      </MuiBox>
    </ContainerBox>
  );
};

export default LearnMore;
