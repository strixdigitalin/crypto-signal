import React from 'react'
import { Typography, Box, Container, Button, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    text: {
        [theme.breakpoints.down(700)]: {
            width: "100%",
        },
    },
}));

const spanStyle ={
    background: "-webkit-linear-gradient(185.98deg, #00BFF2 -13.45%, #8238D7 82.64%)",
    fontSize: { md: '80px', xs: '40px' }, lineHeight: { md: '98px', xs: '49px' }, fontWeight: '700'
   , WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",}
const h1 = {
    fontSize: { md: '80px', xs: '40px' }, lineHeight: { md: '98px', xs: '49px' }, fontWeight: '700'
}
const h2 = { fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '24px', xs: '20px' }, fontWeight: '600' }
const h3 = { fontSize: { md: '16px', xs: '16px' }, lineHeight: { md: '26px', xs: '24px' }, fontWeight: '500' }

const Hero = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px', fontWeight: '500',
        padding: { md: '36px', xs: '25px' }, color: "#fff",
        borderRadius: '0',
        marginTop: { md: '60px', xs: '20px' },
        background: 'linear-gradient(185.98deg, #00BFF2 -13.45%, #8238D7 82.64%)'
    }
    const containerStyle = {
        background: color == "light" ? "#E9E9E9" : "#343434", borderRadius: "12px",
        boxSizing: "border-box", padding: { md: '20px', xs: '20px' },
        display: 'flex', gap: '30px', flexWrap: { md: 'nowrap', xs: 'wrap' }
    }
    const cardStyle = {
        boxSizing: "border-box", padding: '30px 20px',
        width: '100%', border: "1px solid #6A6A6A", borderRadius: "8px",

    }
    return (
        <>
            {/* // background: " #171717", */}
            <Box sx={{ position: 'relative', paddingTop: { md: '0', xs: '50px' } }}>
                <Box sx={{ position: 'absolute', top: '0', left: '0', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </Box>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                >
                    <Grid item xl={6} md={6} xs={12} sx={{ padding: { md: '0', xs: '20px' }, }}>
                        <Fade left>
                            <Typography sx={h1} color="text.primary">
                                Single Destination for <span style={spanStyle}>Crypto </span> Serving Since 2017
                            </Typography>
                            {/* <img src={require("../assets/Crypto Express.svg").default} alt="" className={classes.text} /> */}
                            <Button href='https://t.me/TheCryptoExpress' variant="contained" color="primary" sx={btnStyle}>
                                Join us on Telegram
                            </Button>
                        </Fade>
                    </Grid>
                    <Grid item xl={5} md={5} xs={12}>
                        <Fade bottom>
                            <img src={require("../assets/hero-image.png")} alt="" style={{ width: '100%' }} />
                        </Fade>
                    </Grid>
                </Grid>
            </Box>
            <Container fixed sx={{ py: '50px', zIndex: '10', position: 'relative' }}>
                <Fade bottom>
                    <Box sx={containerStyle} position="relative">
                        <Box sx={{ position: 'absolute', top: '-150px', left: '0', display: { md: 'block', xs: 'none' }, zIndex: '-1' }}>
                            <img src={require("../assets/blurr.png")} alt="" />
                        </Box>
                        <Box sx={cardStyle}>
                            <img src={require("../assets/herocard1.png")} alt="" />
                            <br /> <br />
                            <Typography sx={h2} color="text.primary">
                            250K Members
                            </Typography>
                            <br />
                            <Typography sx={h3} color="text.primary">
                            Crypto express is one of the well reputed and largest community of telegram operating since 2017
                            </Typography>
                        </Box>
                        <Box sx={cardStyle}>
                            <img src={require("../assets/herocard2.png")} alt="" />
                            <br /> <br />
                            <Typography sx={h2} color="text.primary">
                            3400+ Signals Sent
                            </Typography>
                            <br />
                            <Typography sx={h3} color="text.primary">
                            Our traders have been sending signals consistently for a number of years our members are earning profit by following signals on daily basis
                            </Typography>
                        </Box>
                        <Box sx={cardStyle}>
                            <img src={require("../assets/herocard3.png")} alt="" />
                            <br /> <br />
                            <Typography mt="10px" sx={h2} color="text.primary">
                                83% Stay With US
                            </Typography>
                            <br />
                            <Typography sx={h3} color="text.primary">
                            90% of traders lose in this industry but 75%+ of our members stay with us 
                            </Typography>
                        </Box>
                        <Box sx={cardStyle}>
                            {color == "light" ?
                                <img src={require("../assets/herocard4b.png")} alt="" />
                                :
                                <img src={require("../assets/herocard4.png")} alt="" />
                            }
                            <br /> <br />
                            <Typography mt="10px" sx={h2} color="text.primary">
                                50k on Twitter
                            </Typography>
                            <br />
                            <Typography sx={h3} color="text.primary">
                            We have a large community of users on twitter where we share market insight on daily basis
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </>
    )
}

export default Hero