import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import logo from '../../../assets/logo/bilingual.png';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ isSticky }) => ({
  transition: 'background-color 0.3s ease', // Smooth transition for background color
  backgroundColor: isSticky ? '#ffffff' : 'transparent', // Change background color when sticky
  boxShadow: isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between', // Adjust alignment as needed
  margin: '24px 80px 0 80px', // Adjust margins as needed
});

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const LogoImg = styled('img')({
  width: '14.67925rem',
  height: '3rem',
  cursor: 'pointer',
});

const ButtonsBox = styled(Box)({
  display: "flex",
  gap: "22px"
});

const LandingHeader: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <StyledAppBar position="fixed" isSticky={isSticky}>
      <StyledToolbar className="toolbar">
        <LogoBox className="logo-box">
          <LogoImg src={logo} alt="Logo" />
        </LogoBox>
        <ButtonsBox className="buttons-box">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonsBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default LandingHeader;
