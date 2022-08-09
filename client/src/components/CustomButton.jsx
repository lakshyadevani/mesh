import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Container,styled,Box } from '@mui/material';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#247881',
      contrastText: '#fff',
    },
  },
});

const Contain = styled(Box)(({ theme }) => ({
  background: 'FFF',
  color: '#FFFFFF',
  display: 'flex',
  // flexDirection: 'column',
  alignItems: 'center',
  height: 65,
  marginBottom: 30,
  [theme.breakpoints.down()]: {
      display: 'none'
  }
}));

export default function CustomColor() {
  return (
    <Contain>
    <ThemeProvider theme={theme}>
      <Button href="http://productdevelopment.herokuapp.com/" color="neutral" variant="contained">
        Click here to know the research being conducted in the Institute!
      </Button>
    </ThemeProvider>
    </Contain>
  );
  }
