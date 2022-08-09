// import { AppBar, Toolbar, styled, Typography, Box, autocompleteClasses } from '@mui/material';


// const StyledApp = styled(AppBar)`
//         background: #212121;
//         height: 100px;
//         flexDirection: 'column'
// `;

// // const Title = styled(Typography)`
// //     color: #000;
// // `
// const Title = styled(Typography)(({ theme }) => ({
//     color: '#FFF',
//     // display: 'flex',
//     alignItems: 'center',
//     height: 58,
//     marginTop: 30,
//     marginLeft : 'auto',
//     marginRight : 'auto',
//     // [theme.breakpoints.down('sm')]: {
//     //     display: 'none'
//     // }
// }));

// const MESH = styled(Typography)`
//     color: #FFF;
//     display: 'flex';
//     margin: 'auto';
// `
    
// // const Image = styled('img')({
// //         height: 80,
// //         margin: 'auto',
// // })

// const Footer = () => {
//     return (
//         <StyledApp position='static'>
//             <Toolbar>
//                 {/* <Box>
//                 <MESH variant = 'h5'>MESH </MESH>
//                 </Box> */}
//                 {/* <Box> */}
//                 <Title>MESH of Engineering, Science and Humanities, 2022</Title>
//                 {/* </Box> */}
//                 {/* <MESH variant = 'h5'>MESH </MESH> */}
//             </Toolbar>
            
//         </StyledApp>
//     )
// }

// export default Footer;
import { Container, Grid, Box, Link, Typography, styled } from '@mui/material';
// import InstagramIcon from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Lin = styled(Link)`
  textDecoration : 'none'
`
const Imag = styled('img')({
  height: 70,
  // marginTop : 20,
  // marginLeft : 'auto',
  // marginRight : 'auto',
  margin : 'auto',
  // marginBottom : 0,
})

export default function Footer() {
  const url = 'https://i.ibb.co/5sjJQsQ/MESH.png" alt="MESH';
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#212121"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>
              <Typography variant = 'h6'>About</Typography>
              </Box>
              <Typography>MESH is an interdisciplinary forum which holds talks every weekend on topics across all domains. In addition to the weekly sessions, MESH holds guests talks to inspire the young minds and National Level Competitions to promote innovation. If you want to hold a MESH session or have any queries, contact our team. </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box borderBottom={1}>
              <Typography variant = 'h6'>Team</Typography>
              </Box>
              <Box>
                <Lin style={{ textDecoration: 'none' }} target="_blank" href="https://www.linkedin.com/in/lakshya-devani-6ab0991a6/" color="inherit">
                &bull; Lakshya Devani, Co-founder and Convenor
                </Lin>
              </Box>
              <Box>
                <Link style={{ textDecoration: 'none' }} target="_blank"  href="https://www.linkedin.com/in/premveersingh/" color="inherit">
                  &bull; Premveer Singh, Co-Convenor
                </Link>
              </Box>
              <Box>
                <Link style={{ textDecoration: 'none' }} target="_blank" href="https://www.linkedin.com/in/rajnishrajnish/" color="inherit">
                  &bull; Rajnish Yadav, Management Head
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box borderBottom={1}>
                <Typography variant = 'h6'>Follow us at</Typography>
              </Box>
              <Box>
                <Link style={{ textDecoration: 'none' }} target="_blank" href="https://in.linkedin.com/company/meshiitjammu?original_referer=https%3A%2F%2Fwww.google.com%2F" color="inherit">
                <LinkedInIcon/> LinkedIn
                </Link>
              </Box>
              <Box>
                <Link style={{ textDecoration: 'none' }} target="_blank" href="https://www.instagram.com/mesh_iitjmu/" color="inherit">
                <InstagramIcon/>Instagram
                </Link>
              </Box>
              <Box>
                <Link style={{ textDecoration: 'none' }} target="_blank" href="https://twitter.com/mesh_iitjammu" color="inherit">
                <TwitterIcon/>Twitter
                </Link>
              </Box>
            </Grid>
            
          </Grid>
          
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <Imag src={url} alt="logo" />
            MESH, IIT Jammu &reg; {new Date().getFullYear()}
          </Box>

        </Container>
      </Box>
    </footer>
  );
}