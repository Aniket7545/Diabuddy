import React from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Stack,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Mail,
  LocationOn
} from '@mui/icons-material';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: theme.spacing(6, 0, 4),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              DiaBuddy
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.9,
                mb: 3,
                maxWidth: '300px'
              }}
            >
              Your AI-powered companion for optimal diabetes management
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton aria-label="facebook">
                <Facebook />
              </SocialButton>
              <SocialButton aria-label="twitter">
                <Twitter />
              </SocialButton>
              <SocialButton aria-label="instagram">
                <Instagram />
              </SocialButton>
              <SocialButton aria-label="linkedin">
                <LinkedIn />
              </SocialButton>
            </Stack>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink href="/dashboard">Dashboard</FooterLink>
              <FooterLink href="/monitoring">Real-time Monitoring</FooterLink>
              <FooterLink href="/education">Education Hub</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/support">Support Center</FooterLink>
            </Stack>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Emergency Contact
            </Typography>
            <Box sx={{ mb: 3 }}>
              <InfoBox>
                <Phone />
                <Typography variant="body1">
                  24/7 Support: 1-800-DIABETES
                </Typography>
              </InfoBox>
              <InfoBox>
                <Mail />
                <Typography variant="body1">
                  support@diabuddy.com
                </Typography>
              </InfoBox>
              <InfoBox>
                <LocationOn />
                <Typography variant="body1">
                  123 Health Street, Medical Center
                </Typography>
              </InfoBox>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} DiaBuddy. All rights reserved.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            alignItems="center"
          >
            <FooterLink href="/privacy" variant="body2">
              Privacy Policy
            </FooterLink>
            <FooterLink href="/terms" variant="body2">
              Terms of Service
            </FooterLink>
            <FooterLink href="/cookies" variant="body2">
              Cookie Policy
            </FooterLink>
          </Stack>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;