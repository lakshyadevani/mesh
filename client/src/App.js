import { Box, styled } from '@mui/material';




//components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import Example from './components/Footer'
import Banner from './components/Banner';
import CustomColor from './components/CustomButton';
import Register from './pages/Register';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  backgroundColor : '#FFF',
  margin: '50px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {
  return (
    // <Box>
    //   <Header/>
    //   <Banner/>
    //   {/* <CustomColor/> */}
    //   <Container >
    //     <InfoHeader/>
    //     <Articles/>
    //   </Container>
    //   <Example/>
    // </Box>
    <Register/>
  );
}

export default App;
