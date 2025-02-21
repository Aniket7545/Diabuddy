import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Button,
  styled
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: 'none',
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  }
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          <Link
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
          >
            DiaBuddy
          </Link>

          <Stack direction="row" spacing={1} alignItems="center">
            <NavLink onClick={() => navigate('/dashboard')}>Dashboard</NavLink>
            <NavLink onClick={() => navigate('/weeklyanalysis')}>WeeklyAnalysis</NavLink>
            <NavLink onClick={() => navigate('/community')}>Community</NavLink>
            <NavLink onClick={() => navigate('/education')}>Education</NavLink>
            <Button 
  variant="contained" 
  color="error"
  sx={{ 
    ml: 2,
    borderRadius: '8px',
    textTransform: 'none'
  }}
  onClick={() => navigate('/emergency')} // Add this line
>
  Emergency
</Button>
          </Stack>
        </Box>
      </Container>
    </StyledAppBar>
  );
};

export default Header;