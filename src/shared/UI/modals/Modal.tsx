import { FC, ReactNode } from 'react'
import { styled } from '@mui/material'
import Primary from './Primary'
import Secondary from './Secondary'
import Tertiary from './Tertiary'
import Quaternary from './Quaternary'

export interface ModalType {
   children?: ReactNode
   customVariant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
   open: boolean
   onCloseCancel?: () => void
   onCloseYes?: () => void
}

export const BasicModal: FC<ModalType> = ({
   children,
   customVariant = 'primary',
   open,
   onCloseCancel,
   onCloseYes,
   ...rest
}) => {
   return (
      <div>
         {customVariant === 'primary' && (
            <Primary
               customVariant={customVariant}
               open={open}
               children={children}
               onCloseCancel={onCloseCancel}
               {...rest}
            />
         )}

         {customVariant === 'secondary' && (
            <Secondary
               onCloseYes={onCloseYes}
               open={open}
               children={children}
               onCloseCancel={onCloseCancel}
               {...rest}
            />
         )}

         {customVariant === 'tertiary' && (
            <Tertiary
               onCloseYes={onCloseYes}
               open={open}
               children={children}
               onCloseCancel={onCloseCancel}
               {...rest}
            />
         )}
         {customVariant === 'quaternary' && (
            <Quaternary
               onCloseYes={onCloseYes}
               open={open}
               children={children}
               onCloseCancel={onCloseCancel}
               {...rest}
            />
         )}
      </div>
   )
}
export default BasicModal

export const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 407,
   minHeight: '9.875rem',
   bgcolor: 'background.paper',
   border: 'none',
   borderRadius: '.625rem',
   boxShadow: 24,
   p: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
}

export const ImageModalX = styled('div')(() => ({
   alignSelf: 'end',
   marginTop: '22px',
   marginRight: '22px',
   cursor: 'pointer',
}))

export const ModalButtonDelete = styled('div')(() => ({
   position: 'relative',
   width: '100%',
   height: '100%',
   minHeight: '5.875rem',
   backgroundColor: 'rgba(240, 241, 241, 1)',
   borderRadius: '.625rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

export const StyleTertiaryTypography = {
   margin: '-32px 24px 24px',
}
