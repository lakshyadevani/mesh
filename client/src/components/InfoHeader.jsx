
import { Box, styled, Typography } from '@mui/material'


const Container = styled(Box)(({ theme }) => ({
    background: '#40514E',
    color: '#FFFFFF',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    height: 65,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 44,
    '&:last-child': {
        margin: '0 20px 0 20px'
    }
});

const Text = styled(Typography)`
        font-size: 14px;
        font-weight: 300;
        margin-left: 50px;
        font-family: 'Roboto',sans-serif;
    `;

const InfoHeader = () => {
    const instagram = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png';
    const linkedin = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png';

    return (
        <Container>
            <Box>
            <Text>
                For more experiences and snapshots of past sessions visit our Instagram and LinkedIn pages!
            </Text>
            </Box>
            <Box style={{ marginLeft: 'auto', display: 'flex' }}>
                <a target="_blank" href="https://www.instagram.com/mesh_iitjmu/">
                <Image src={instagram} alt="Instagram" />
                </a>
                <a target="_blank" href = "https://in.linkedin.com/company/meshiitjammu?original_referer=https%3A%2F%2Fwww.google.com%2F">
                <Image src={linkedin} alt="LinkedIn" />
                </a>
                
            </Box>
        </Container>
    )
}

export default InfoHeader;