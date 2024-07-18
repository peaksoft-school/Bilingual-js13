import { TextField, TextFieldProps, styled } from '@mui/material';
import { ChangeEvent, forwardRef, Ref } from 'react';

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(
  (props: InputProps, ref?: Ref<HTMLInputElement>) => {
    const { label = '',variant='outlined', value, disabled, error,placeholder, onChange, ...rest } = props;
    return (
      <StyledInput
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        {...rest}
        inputRef={ref}
      />
    );
  }
);

const StyledInput = styled(TextField)`
   width: 100%;

  .MuiOutlinedInput-root {
    background-color: #ffffff;
    height: 3.25rem;
    padding: 0;

    &.Mui-focused {
      color: #3a10e5;
    }

    .MuiOutlinedInput-notchedOutline {
      border: .125rem solid #d6d6d6;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #3a10e5;

    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #3a10e5;
    }

    input {
      border: none;
      outline: none;
      color: #23212a;
      padding: .8125rem ;
    }

    &.Mui-disabled {
      background-color: #f7f7f7;
      .MuiOutlinedInput-notchedOutline {
        border-color: #d6d6d6;
      }

      input {
        color: #a0a0a0;
      }
    }
  }

  .MuiInputLabel-root {
    color: #d6d6d6;
    &.Mui-error {
      color: #d6d6d6;
    }

    &.Mui-disabled {
      color: #a0a0a0;
    }
  }
  .Mui-error {
    .MuiOutlinedInput-notchedOutline {
      border-color: #f44336;
    }

    input {
      color: #23212a;
    }
  }
`;

export default Input;
