import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import { FC } from 'react';
import tertiaryIcon from '../../../assets/svgs/tertiaryIcon.svg';
import QuaternaryIcon from '../../../assets/svgs/QuaternaryIcon.svg';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: '2.625rem',
  height: '1.625rem',
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '0.125rem',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(1rem)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '.375rem solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: '1.375rem',
    height: '1.375rem',
  },
  '& .MuiSwitch-track': {
    borderRadius: '0.8125rem',
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CustomCheckbox = styled(Checkbox)(() => ({
  '& .MuiSvgIcon-root': {
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    border: '0.125rem solid #9A9A9A',
    color: '#ffffff',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'green',
    backgroundColor: '#ffffff',
    border: '0.125rem solid #9A9A9A',
  },
}));

const IconWrapper = styled('div')({
  width: '1rem',
  height: '1rem',
  borderRadius: '0.125rem',
  border: '0.0625rem solid #9A9A9A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HiddenIcon = styled('img')({
  display: 'none',
});

const IconWrapperQuaternary = styled('div')({
  width: '1.1375rem',
  height: '1.1375rem',
  borderRadius: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(42, 185, 48, 1)',
});

const IconWrapperQuaternaryChecked = styled('div')({
  width: '1.1375rem',
  height: '1.1375rem',
  borderRadius: '0.25rem',
  border: '0.125rem solid #9A9A9A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HiddenIconQuaternary = styled('img')({
  display: 'none',
});

interface VariantType {
  variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Quaternary';
}

interface CustomizedSwitchesProps {
  variant?: VariantType['variant'];
}

export const CustomizedSwitches: FC<CustomizedSwitchesProps> = ({
  variant = 'Primary',
}) => {
  return (
    <FormGroup>
      {variant === 'Primary' && (
        <FormControlLabel
          label=""
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        />
      )}

      {variant === 'Secondary' && (
        <FormControlLabel label="" value="female" control={<Radio />} />
      )}

      {variant === 'Tertiary' && (
        <CustomCheckbox
          icon={
            <IconWrapper>
              <img src={tertiaryIcon} alt="tertiary icon" />
            </IconWrapper>
          }
          checkedIcon={
            <IconWrapper>
              <HiddenIcon src={tertiaryIcon} alt="tertiary icon" />
            </IconWrapper>
          }
          defaultChecked
          sx={{ width: '2.1875rem', height: '2.1875rem' }}
        />
      )}

      {variant === 'Quaternary' && (
        <FormControlLabel
          label=""
          control={
            <Checkbox
              icon={
                <IconWrapperQuaternary>
                  <img src={QuaternaryIcon} alt="tertiary icon" />
                </IconWrapperQuaternary>
              }
              checkedIcon={
                <IconWrapperQuaternaryChecked>
                  <HiddenIconQuaternary
                    src={QuaternaryIcon}
                    alt="tertiary icon"
                  />
                </IconWrapperQuaternaryChecked>
              }
              defaultChecked
            />
          }
        />
      )}
    </FormGroup>
  );
};
