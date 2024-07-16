import { FC, ReactNode } from 'react'
import Primary from './Primary'
import Secondary from './Secondary'

export interface ModalType {
   children?: ReactNode
   customVariant?: 'primary' | 'secondary'
   open: boolean
   onClose?: () => void
   onClick?: () => void
   buttonChange?: 'true' | 'false'
   boxContent?: ReactNode
}

export const Modal: FC<ModalType> = ({
   children,
   customVariant = 'primary',
   open,
   onClose,
   onClick,
   boxContent,
   ...rest
}) => {
   return (
      <div>
         {customVariant === 'primary' && (
            <Primary
               customVariant={customVariant}
               open={open}
               children={children}
               onClose={onClose}
               {...rest}
            />
         )}

         {customVariant === 'secondary' && (
            <Secondary
               onClick={onClick}
               open={open}
               children={children}
               onClose={onClose}
               {...rest}
               boxContent={boxContent}
            />
         )}
      </div>
   )
}
export default Modal
