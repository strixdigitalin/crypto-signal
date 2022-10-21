import React from 'react'
import { Typography, Box, Container, Button } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    globeImage: {
        marginLeft:'-100px',
        [theme.breakpoints.down(700)]: {
            width: "100%",
        marginLeft:'-70px',
    },
    },
}));

const btnStyle = {
    fontSize: '24px', lineHeight: '24px', fontWeight: '500',
    textAlign: 'center', background: "#32E7B1", padding: '35px', cursor: 'pointer',
    border: " 1px solid #000000", margin: '10px auto',
    color: "#020202", borderRadius: '0'
}

const Hero = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;
    const semiCricle = {
        height: {md:"90vh",xs:'20vh'},
        borderRadius: "50vw 50vw 0 0",
        backgroundColor: color == "light" ? '#fff' : '#1F1F1E',
        marginTop: {md:'-500px',xs:'-250px'}
    }
    return (
        <>
            <Box sx={{ background: color == "light" ? '#7E64FF' : '#000' }}>
                <Container fixed sx={{ padding: {md:'100px 1px 0 1px',xs:'50px 1px 0 1px'} }}>
                    <Fade bottom>
                        <Typography sx={{ fontSize: {md:'80px',xs:'40px'}, lineHeight:{md: '98px',xs:'49px'}, fontWeight: '600', textAlign: 'center' }} color="#fff">
                            Trade with Crypto <br />Signals
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: '24px', lineHeight: '34px', fontWeight: '500', textAlign: 'center' }} color="#fff">
                        Welcome to CryptoCoinsCoach, the #1 Telegram Crypto Trading<br/> Community since 2017
                        </Typography>
                        <br />
                        <Box textAlign="center">
                            <Button sx={btnStyle} >
                                Join us on Telegram
                            </Button>
                        </Box>
                        <Box textAlign="center">
                            <img src={require("../assets/globe.png")} alt="imf" className={classes.globeImage} />
                        </Box>
                    </Fade>
                </Container>
                <Box sx={semiCricle}></Box>
            </Box>
        </>
    )
}

export default Hero
