import React from 'react'
import { Typography, Box, Container, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';


const h2 = { fontSize: { md: '64px', xs: '40px' }, lineHeight: { md: '79px', xs: '49px' }, fontWeight: '600' }
const h3 = { fontSize: { md: '24px', xs: '18px' }, lineHeight: { md: '34px', xs: '25px' }, fontWeight: '500' }

const WhyUs = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    return (
        <div>
            <Container fixed sx={{ py: '100px', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: '0', left: '0', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </Box>
                <Box sx={{ position: 'absolute', bottom: '0', right: '0', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </Box>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                >
                    <Grid item xl={6} md={6} xs={12}>
                        <Fade left>
                            <Typography sx={h2} color="text.primary">
                                Why Us
                            </Typography>
                            <img src={require("../assets/bottomline.png")} alt="" style={{ marginTop: '10px', marginBottom: '30px' }} />
                            <br />
                            <Box display="flex" alignItems="flex-start" gap="10px">
                                <img src={require("../assets/radio.png")} alt="" />
                                <Typography sx={h3} color="text.primary">
                                    We have skillful team of Crypto trading Analysts.We are providing the best performance with the legitimate updates since 2018.
                                </Typography>
                            </Box> <br />
                            <Box display="flex" alignItems="flex-start" gap="10px">
                                <img src={require("../assets/radio.png")} alt="" />
                                <Typography sx={h3} color="text.primary">
                                    We offer on demand analysis on daily basis to our community with  more valuable services like AMA pooling long term  investment advice
                                </Typography>
                            </Box> <br />
                            <Box display="flex" alignItems="flex-start" gap="10px">
                                <img src={require("../assets/radio.png")} alt="" />
                                <Typography sx={h3} color="text.primary">
                                    This is not a get rich quick scheme. You need to learn how to trade and you will be abl to do so with the help of our signals. we are here to help you make money from cryptocurrency trading.
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={6} md={6} xs={12}>
                        <Fade bottom>
                            {color == "dark" ?
                                <img src={require("../assets/whyus.png")} alt="" style={{ width: '100%' }} />
                                :
                                <img src={require("../assets/whyuslight.png")} alt="" style={{ width: '100%' }} />
                            }
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default WhyUs
