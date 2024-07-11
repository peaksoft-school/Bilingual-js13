import LeftBoxProvo from './LeftBoxProvo';
import RightBoxProvo from './RightBoxProvo';
import {
  ProvoContainer,
  ProvoBackroundUrl,
  ProvoContent,
  ProvoFlex,
} from './StyleProve';

const Prove = () => {
  return (
    <>
      <ProvoContainer>
        <ProvoBackroundUrl>
          <ProvoContent>
            <ProvoFlex>
              <LeftBoxProvo />
              <RightBoxProvo />
            </ProvoFlex>
          </ProvoContent>
        </ProvoBackroundUrl>
      </ProvoContainer>
    </>
  );
};

export default Prove;
