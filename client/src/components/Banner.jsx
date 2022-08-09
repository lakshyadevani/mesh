import { styled, Box, Typography } from '@mui/material';
import Drawer from './Drawer';
import Button from '@mui/material/Button';
import CustomColor from './CustomButton';

const Image = styled(Box)`
    width: 100%;
    background: url(https://pbs.twimg.com/profile_banners/1502255395032940554/1647003526/1500x500) center/65% repeat-x #000;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color : #FFFFFF;
    margin-down : 40px;
`;

const But = styled(Box)`
    margin-up  : 10px;
    display : flex;
    
`

const Imag = styled('img')({
    height: 0,
    // marginTop : 20,
    // marginLeft : 'auto',
    // marginRight : 'auto',
    margin : 'auto',
    // marginBottom : 0,
    opacity : 0.3
})

const Banner = () => {
    
    const url = 'https://i.ibb.co/Zh8k7MX/logo-1-3.png';
    return (
        
        <Image>
            {/* <Drawer marginLeft = 'none' style={{ fill: '#0072ea' }}/>l */}
            {/* <Heading>MESH</Heading> */}
            {/* <Button variant="contained" >
                Click here to know the Research going on in the Institute!
            </Button> */}
            <But>
            <CustomColor/>
            </But>
            <Imag src={url} alt="logo" />
            {/* <SubHeading>Diversify Knowledge!</SubHeading> */}
        </Image>
    )
}

export default Banner;