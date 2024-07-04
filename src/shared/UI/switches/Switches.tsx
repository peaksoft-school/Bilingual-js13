import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
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
      border: '6px solid #fff',
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
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CustomCheckbox = styled(Checkbox)(() => ({
  '& .MuiSvgIcon-root': {
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: '2px solid #9A9A9A',
    color: '#ffffff',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'green',
    backgroundColor: '#ffffff',
    border: '2px solid #9A9A9A',
  },
}));

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
        <FormControlLabel value="female" control={<Radio />} label="" />
      )}
      {variant === 'Tertiary' && (
        <CustomCheckbox
          icon={<CheckIcon />}
          checkedIcon={<CheckIcon />}
          defaultChecked
          size="small"
          sx={{ width: 40, height: 40 }}
        />
      )}
      {variant === 'Quaternary' && (
        <FormControlLabel
          label=""
          control={
            <Checkbox
              defaultChecked
              sx={{
                '&.Mui-checked': {
                  color: 'rgba(42, 185, 48, 1)',
                },
              }}
              size="medium"
            />
          }
        />
      )}
    </FormGroup>
  );
};
