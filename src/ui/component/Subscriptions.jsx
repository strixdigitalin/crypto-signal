import React from 'react'
import { Typography, Box, Container, Button, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        [theme.breakpoints.down(700)]: {
            width: "100%",
        },
    },
}));

const Subscriptions = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px',
        fontWeight: '500', background: '#32E7B1', color: '#000', padding: '24px',
        cursor: 'pointer',
        width: '309px', textAlign: 'center', border: '1px solid #000',
        gap: '20px', borderRadius: '0', "&:hover": { background: '#32E7B1', color: '#000' }
    }
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Box sx={{ background: color == "light" ? '#F6F2E8' : '#000' }}>
                <Container fixed sx={{ paddingTop: { md: '100px', xs: '50px' }, paddingBottom: { md: '100px', xs: '50px' }, }}>
                    <Fade bottom>
                        <Typography sx={{ fontSize: { md: '64px', xs: '40px' }, lineHeight: { md: '78px', xs: '49px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Our Prime Service
                        </Typography>
                        <br /><br />
                        <Box sx={{ textAlign: 'center' }}>
                            <Slider {...settings}>
                                <Card />
                                <Card />
                                <Card />
                            </Slider>
                        </Box>
                        {/* <Box sx={{ display:{md:'flex',xs:'none'}, justifyContent: { md: 'space-between', xs: 'center' }, gap: '10px', }}>
                            <Card />
                            <Card />
                            <Card />
                        </Box> */}
                    </Fade>
                </Container>
            </Box>
            <Box className="banner1" sx={{ height: 'auto', background: color == "light" ? '#F6F2E8' : '#000' }}>
                <Container fixed sx={{ paddingTop: { md: '100px', xs: '50px' }, paddingBottom: { md: '100px', xs: '50px' }, }}>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                    >
                        <Grid item xl="6" md="6" xs="12">
                            <Typography sx={{
                                fontSize: { md: '60px', xs: '40px' },
                                lineHeight: { md: '64px', xs: '50px' },
                                fontWeight: '600',
                            }} color='text.primary'>
                                Why Us
                            </Typography>
                            <br />
                            <Typography sx={{
                                fontSize: '24px',
                                lineHeight: '34px',
                                fontWeight: '500',
                            }} color='text.primary'>
                                <li>
                                    We have skillful team of Crypto trading Analysts.We are providing the best performance with the legitimate updates since 2018.
                                </li>
                                <li>
                                    The bot is designed to give a better understanding of candlestick chart and how it can be used to make better trading desicions
                                </li>
                                <li>
                                    Every signal comes with the understandable setup of entries, targets and stop loss price. We use multiple frames to confirm the trades.Only trade when we are sure about the price and traget level.
                                </li>
                                <li>
                                    This is not a get rich quick scheme. You need to learn how to trade and you will be abl to do so with the help of our signals. we are here to help you make money from cryptocurrency trading.
                                </li>
                                <li>
                                    We send accurate Bitcoin Analysis with support and resistance points using our unique strategy. We are well known for our unique CryptoMarketCap Analysis.
                                </li>
                            </Typography>
                        </Grid>
                        <Grid item xl="5" md="5" xs="12">
                            <img src={require("../assets/whyus.png")} alt="imf" className={classes.image} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Subscriptions

const Card = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    const cardStyle = {
        boxSizing: "border-box",
        background: color == "light" ? "#FFFFFF" : "#1F1F1E",
        border: color == "light" ? "1px solid #000000" : "1px solid #fff",
        width: '350px',
        height: 'auto',
        padding: '20px',
        textAlign: 'center'
    }
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px',
        fontWeight: '500', background: '#32E7B1', color: '#fff', padding: '24px',
        cursor: 'pointer', width: '100%', borderRadius: '0', "&:hover": {
            background: '#32E7B1', color: '#fff'
        }
    }
    return (
        <>
            <Box >
                <Box display="flex" gap="0px" alignItems="flex-start" sx={{ width: { md: '400px', xs: '100%' } }} margin="10px auto">
                    <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                        <img src={require("../assets/Group 36.png")} alt="imf" style={{ marginTop: '20px' }} />
                    </Box>
                    <Box sx={cardStyle}>
                        <Typography sx={{ fontSize: '56px', lineHeight: '69px', fontWeight: '600', }} color='text.primary'>
                            4.99 $
                        </Typography>
                        <br />
                        <img src={require("../assets/ett.png")} alt="imf" style={{ display: 'block', margin: '1px auto' }} />
                        <br /> <br />
                        <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', }} color='text.primary'>
                            Our team releases frequent market analyses to offer you an overall picture of Bitcoin, altcoins and the market sentiment.
                        </Typography>
                        <br /><br />
                        <Button sx={btnStyle} >
                            BUY
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
