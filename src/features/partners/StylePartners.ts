import { Box, styled } from "@mui/material";

export const MuiBox = styled(Box)(() => {
    return {
      width: '90rem',
      height: '20.875rem',
      backgroundColor: '#fef5e8',
      overflow: 'hidden',
    };
  });
  
  export const ContainerBox = styled(Box)(() => {
    return {
      width: '15.9375rem',
      height: '7.875rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      border: '0.0625rem solid rgba(228, 228, 228, 1)',
      borderRadius: '1.25rem',
    };
  });
  
  export const LogoBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
  }));
  
  export const PartnersText = styled('h2')(() => {
    return {
      fontWeight: '700',
      fontSize: '2.5rem',
      color: 'rgba(55, 82, 180, 1)',
      fontFamily: 'Gilroy',
      textAlign: 'center',
      marginBottom: '2.5rem',
    };
  });
  