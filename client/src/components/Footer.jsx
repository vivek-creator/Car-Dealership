import React from 'react';
import { Box, Container, Grid, Link, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, bottom: 0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Your dealership's motto or description.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="#" color="textSecondary">Home</Link></li>
              <li><Link href="#" color="textSecondary">About Us</Link></li>
              <li><Link href="#" color="textSecondary">Cars</Link></li>
              <li><Link href="#" color="textSecondary">Services</Link></li>
              <li><Link href="#" color="textSecondary">Contact</Link></li>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              123 Car Street<br />
              Auto City, AC 12345<br />
              Email: contact@dealership.com<br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;


