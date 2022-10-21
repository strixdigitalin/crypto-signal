import React from 'react'
import { Typography, Box, Container, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';


const h2 = { fontSize: { md: '64px', xs: '40px' }, lineHeight: { md: '79px', xs: '49px' }, fontWeight: '600' }
const h3 = { fontSize: { md: '24px', xs: '18px' }, lineHeight: { md: '34px', xs: '26px' }, fontWeight: '500' }

const CeGoals = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    return (
        <>
            <Box position='relative' height="auto" sx={{ zIndex: '1' }}>
                <Box sx={{ position: 'absolute', top: '0', left: '0', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </Box>
                <Box sx={{ position: 'absolute', bottom: '0', right: '0', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </Box>
                <Box sx={{ position: 'absolute', top: "30%", zIndex: '-1',width:'100%'}}>
                    {color == "dark" ?
                        <img src={require("../assets/blob2.png")} alt="" style={{ width: '100%', }} />
                        :
                        <img src={require("../assets/bloblight2.png")} alt="" style={{ width: '100%', }} />
                    }
                </Box>
                <Box >
                    <Container fixed sx={{ py: '100px', }}>
                        <Grid
                            container
                            spacing={0}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"
                        >
                            <Grid item xl={4} md={4} xs={12}>
                                <Box sx={{ zIndex: '-10', position: 'relative' }}>
                                    <Fade left>
                                        <img src={require("../assets/mockup.png")} alt="" style={{ width: '100%' }} />
                                    </Fade>
                                </Box>
                            </Grid>
                            <Grid item xl={5} md={5} xs={12} >
                                <Fade bottom>
                                    <Box sx={{ zIndex: '1', position: 'relative' }}>
                                        <Typography sx={h2} color="text.primary">
                                            What is CE?
                                        </Typography>
                                        <img src={require("../assets/bottomline.png")} alt="" style={{ marginBottom: '30px' }} />
                                        <br />
                                        <Typography sx={h3} color="text.primary">
                                            Crypto Express are based on our highly advanced and sophisticated trading algorithms . Our team of expert analysts have been working together for years, providing the most accurate signals in the industry.
                                        </Typography>
                                        <br />
                                        <Typography sx={h3} color="text.primary">
                                            We focus on specific coins and we only provide signals for those coins which we believe will give a great return on your investment.In our Premium channel, we had traded more than 1,000 Binance altcoins trades in (October 2018) alone.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container fixed sx={{ py: { md: '100px', xs: '50px' } }}>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            alignContent="center"
                            flexWrap="wrap-reverse"
                        >
                            <Grid item xl={7} md={7} xs={12}>
                                <Fade bottom>
                                    <Typography sx={h2} color="text.primary">
                                        Our Goals
                                    </Typography>
                                    <img src={require("../assets/bottomline.png")} alt="" style={{ marginBottom: '30px' }} />
                                    <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Our Goal is to help you to trade the right way by sharing our experience , knowledge and insights on how to make money trading cryptocurrency
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            We aim to provide day trading courses helps to generate stable profit from daily trading.
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Company intent to come up with real time crypto news updates for investors,traders and enthusiast.
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Provide a clear roadmap for the investors to monitor performance and see progress .
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            We can guide you to make profit in any market shape.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Grid>
                            <Grid item xl={5} md={5} xs={12}>
                                <Fade top>
                                    <img src={require("../assets/goals.png")} alt="" style={{ width: '100%' }} />
                                </Fade>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default CeGoals