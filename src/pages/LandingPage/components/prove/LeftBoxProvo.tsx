
import {
  SubTitleProvo,
  TitleProvo,
  LeftBoxProvoAnotherName,
  AnimateBox,
} from './StyleProve';
import { LeftBoxProvoAnimateButton } from './AnimationProvo';
import { styled } from '@mui/material';
import Button from '../../../../shared/UI/Button';

const AnimatedButton = styled(Button)`
  animation: ${LeftBoxProvoAnimateButton} 1s forwards;
`;


export const LeftBoxProvo = () => {
  return (
    <>
      <LeftBoxProvoAnotherName>
        <AnimateBox>
          <TitleProvo>
            Prove your English proficiency today with <br />
            <span>BILINGUAL</span>
          </TitleProvo>
          <SubTitleProvo>
            For nearly 30 years, learners have turned to Rosetta Stone to build
            the fluency and confidence they need to speak new languages.
          </SubTitleProvo>
        </AnimateBox>
        <AnimatedButton customVariant="Undenary">TO BEGIN</AnimatedButton>
      </LeftBoxProvoAnotherName>
    </>
  );
};

export default LeftBoxProvo;
