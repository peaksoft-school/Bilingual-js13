import { styled } from '@mui/material'
import LeftBoxProvo from './LeftBoxProvo'
import RightBoxProvo from './RightBoxProvo'
import ProveBackground from '../../../assets/icons/svgs/ProveBackground.svg'
import BacgkroundSecond from '../../../assets/icons/svgs/BacgkroundSecond.svg'

const Prove = () => (
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
)

export default Prove

const ProvoContainer = styled('div')(() => {
   return {
      width: '100%',
      maxWidth: '90rem',
      height: '100%',
      minHeight: '40.625rem',
      // margin: '0 auto',
      background: `no-repeat center center url(${ProveBackground})`,
      backgroundSize: 'cover',
   }
})
const ProvoBackroundUrl = styled('div')(() => ({
   width: '100%',
   maxWidth: '90rem',
   height: '100%',
   minHeight: '41.25rem',
   // margin: '0 auto',

   background: `no-repeat center center url(${BacgkroundSecond})`,
   position: 'relative',
   backgroundSize: 'cover',
}))

const ProvoContent = styled('div')(() => ({
   margin: '0 5rem',
   height: '660px',
}))

const ProvoFlex = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))
