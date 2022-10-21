import React from 'react'
import { Typography, Box, Container, } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.down(700)]: {
            width: "100%",
        },
    },
}));

const CE = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;
    return (
        <>
            <Box sx={{ background: color == "light" ? '#fff' : '#1F1F1E' }}>
                <Container fixed sx={{ paddingTop: { md: 'auto', xs: '50px' } }}>
                    <Box display="flex" flexWrap="wrap" gap="20px" alignItems="center" justifyContent="space-between">
                        <Box sx={{ width: '320px', textAlign: 'center' }}>
                            <img src={require("../assets/ce0.png")} alt="" />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: '32px', lineHeight: '24px', fontWeight: '600', color: '#614CC9' }} color='text.primary'>
                                50K Members
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: '22px', lineHeight: '26px', fontWeight: '500',  }}color='text.primary' >
                                We have a large community of users following our signals every day
                            </Typography>
                        </Box>
                        <Box sx={{ width: '320px', textAlign: 'center' }}>
                            <img src={require("../assets/ce1.png")} alt="" />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: '32px', lineHeight: '24px', fontWeight: '600',}} color='text.primary'>
                            3782+ Signals Sent
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: '22px', lineHeight: '26px', fontWeight: '500',  }} color='text.primary'>
                            Our traders have been sending signals consistently for a number of years
                            </Typography>
                        </Box>
                        <Box sx={{ width: '320px', textAlign: 'center' }}>
                            <img src={require("../assets/ce2.png")} alt="" />
                            <br />
                            <br />
                            <Typography sx={{ fontSize: '32px', lineHeight: '24px', fontWeight: '600', color: '#21B88B' }} >
                            75% Stay With US
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: '22px', lineHeight: '26px', fontWeight: '500', }} color='text.primary'>
                                We have a large community of users following our signals every day
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{marginTop:{md:'150px', xs: '50px' }}}/>
                    <Fade bottom>
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            What is CE?
                        </Typography>
                        <br /> <br />
                        <Typography sx={{ fontSize: '24px', lineHeight: '34px', fontWeight: '500', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Crypto Express are based on our highly advanced and sophisticated trading algorithms . Our team of expert analysts have been working together for years, providing the most accurate signals in the industry. We focus on specific coins and we only provide signals for those coins which we believe will give a great return on your investment.In our Premium channel, we had traded more than 1,000 Binance altcoins trades in (October 2018) alone. Our overall accuracy in Binance altcoins trading is still above 97% inspired and encouraged with this result, we started our Margin/Leveraged premium in (October 2018.)We provide much educational content for our users. Our specialty includes Gem calls which give our users a very good profit in midterm holding.The analysis we do is based on technical and fundamental aspects of the market, we have tried to make it as simple as possible for all our readers to understand it easily and precisely.
                        </Typography>
                        <br />
                        <br />
                        <Box textAlign="center">
                            <img src={require("../assets/Bitcoin-blockchain 1.png")} alt="imf" className={classes.image} />
                        </Box>
                    </Fade>
                </Container>
            </Box>
        </>
    )
}

export default CE
