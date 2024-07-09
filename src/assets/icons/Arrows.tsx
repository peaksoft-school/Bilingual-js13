import { styled } from '@mui/material/styles'

export interface ArrowProps {
   onClick?: React.MouseEventHandler<SVGSVGElement>
   className?: string
   style?: React.CSSProperties
}

const StyledSVG = styled('svg')(() => ({
   cursor: 'pointer',
   transition: 'background-color 0.3s ease',

   '&:hover circle': {
      fill: '#3a11e5',
      transition: 'fill 0.5s ease',
   },
   '&:hover path': {
      fill: '#ffff',
      transition: 'fill 0.1s ease',
   },

   '&:active circle': {
      fill: '#3a11e5',
   },
}))

export const PrevArrowI = ({ onClick, style }: ArrowProps) => (
   <StyledSVG
      style={style}
      onClick={onClick}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <circle cx="30" cy="30" r="29.5" stroke="#3A10E5" />
      <g clipPath="url(#clip0_948_15040)">
         <path
            d="M37.5411 28.7966C37.4709 28.7852 37.3999 28.78 37.3289 28.7809H25.235L25.4987 28.6582C25.7564 28.5362 25.9909 28.3702 26.1917 28.1676L29.5831 24.7761C30.0298 24.3498 30.1048 23.6638 29.761 23.1509C29.3608 22.6044 28.5933 22.4857 28.0467 22.8859C28.0025 22.9183 27.9606 22.9535 27.9211 22.9915L21.7883 29.1243C21.309 29.6031 21.3086 30.3797 21.7874 30.8589C21.7877 30.8592 21.788 30.8596 21.7883 30.8599L27.9211 36.9927C28.4008 37.471 29.1774 37.47 29.6558 36.9903C29.6934 36.9525 29.7285 36.9124 29.761 36.8701C30.1048 36.3572 30.0298 35.6712 29.5831 35.2449L26.1978 31.8473C26.0179 31.6671 25.811 31.5161 25.5845 31.3996L25.2166 31.234H37.2614C37.888 31.2573 38.4377 30.8196 38.5554 30.2037C38.6639 29.535 38.2097 28.9051 37.5411 28.7966Z"
            fill="#3A10E5"
         />
      </g>
      <defs>
         <clipPath id="clip0_948_15040">
            <rect
               width="17.1429"
               height="17.1429"
               fill="white"
               transform="translate(21.4286 21.4285)"
            />
         </clipPath>
      </defs>
   </StyledSVG>
)

export const NextArrowI = ({ onClick, style }: ArrowProps) => (
   <StyledSVG
      style={style}
      onClick={onClick}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <circle cx="30" cy="30" r="29.5" stroke="#3A10E5" />
      <path
         d="M20.2675 28.0506C20.3538 28.0375 20.4411 28.0315 20.5285 28.0326H35.4057L35.0813 27.8919C34.7642 27.752 34.4757 27.5615 34.2288 27.3292L30.0569 23.4397C29.5074 22.9506 29.4151 22.164 29.8381 21.5758C30.3304 20.9489 31.2745 20.8128 31.9469 21.2718C32.0012 21.3089 32.0528 21.3494 32.1014 21.3929L39.6455 28.4265C40.2351 28.9755 40.2356 29.8662 39.6467 30.4159C39.6463 30.4162 39.6459 30.4166 39.6455 30.417L32.1014 37.4505C31.5113 37.9991 30.556 37.9979 29.9675 37.4478C29.9212 37.4045 29.878 37.3584 29.8381 37.3099C29.4151 36.7216 29.5074 35.935 30.0569 35.446L34.2213 31.5494C34.4426 31.3427 34.6972 31.1695 34.9757 31.0359L35.4283 30.846H20.6115C19.8408 30.8727 19.1645 30.3707 19.0197 29.6644C18.8863 28.8975 19.445 28.175 20.2675 28.0506Z"
         fill="#3A10E5"
      />
   </StyledSVG>
)

export default { PrevArrowI, NextArrowI }
