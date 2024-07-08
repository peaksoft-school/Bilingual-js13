import { styled } from '@mui/material';

export const ContainerUsefulVideo = styled('div')(() => {
  return {
    width: '100%',
    maxWidth: '90rem',
    padding: '0rem 5.9375rem 7.5rem 5.9375rem ',
    backgroundColor: '#fef5e8',
    margin: '0 auto',
  };
});

export const TitleUsefulVideo = styled('h2')(() => {
  return {
    fontSize: '2.5rem',
    fontWeight: '700',
    fontFamily: 'Gilroy',
    color: 'rgba(55, 82, 180, 1)',
    textAlign: 'center',
    marginBottom: '3rem',
  };
});

export const ContentUsefulVideo = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };
});

