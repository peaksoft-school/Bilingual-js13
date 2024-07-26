import { FC, ReactNode } from 'react'
import Primary from './Primary'
import Secondary from './Secondary'
import { Box } from '@mui/material'

export interface ModalType {
   children?: ReactNode
   variant?: 'primary' | 'secondary'
   open: boolean
   onClose?: () => void
   onClick?: () => void
   buttonChange?: 'true' | 'false'
   boxContent?: ReactNode
}

export const Modal: FC<ModalType> = ({
   children,
   variant = 'primary',
   open,
   onClose,
   onClick,
   boxContent,
   ...rest
}) => {
   return (
      <Box>
         {variant === 'primary' && (
            <Primary
            variant={variant}
               open={open}
               children={children}
               onClose={onClose}
               {...rest}
            />
         )}

         {variant === 'secondary' && (
            <Secondary
               onClick={onClick}
               open={open}
               children={children}
               onClose={onClose}
               {...rest}
               boxContent={boxContent}
            />
         )}
      </Box>
   )
}
export default Modal
