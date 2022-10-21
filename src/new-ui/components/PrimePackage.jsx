import React from 'react'
import { Typography, Box, Container, Grid, Button, useTheme } from '@mui/material'
import Fade from 'react-reveal/Fade';

const h2 = { fontSize: { md: '64px', xs: '40px' }, lineHeight: { md: '79px', xs: '49px' }, fontWeight: '600' }
const h3 = { fontSize: { md: '24px', xs: '18px' }, lineHeight: { md: '34px', xs: '26px' }, fontWeight: '500' }
const h4 = { fontSize: { md: '16px', xs: '16px' }, lineHeight: { md: '24px', xs: '24px' }, fontWeight: '500' }

const PrimePackage = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    const cardStyle = {
        background: "#343434",
        border: "1px solid #9C9C9C",
        borderRadius: "8px",
        boxSizing: 'border-box',
        padding: "40px",
    }
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px', fontWeight: '500',
        padding: '18px', color: "#fff",
        borderRadius: '0',
        width: '100%',
        marginTop: '50px',
        background: 'linear-gradient(185.98deg, #00BFF2 -13.45%, #8238D7 82.64%)'
    }
    return (
        <div>
            <Box position='relative' height="auto">
                <div style={{ position: 'absolute', bottom: '0', right: '0', zIndex: '-2', display: { md: 'block', xs: 'none' } }}>
                    <img src={require("../assets/blurr.png")} alt="" />
                </div>
                <Box sx={{ position: 'absolute', top: "30%",width:'100%' }}>
                    {color == "dark" ?
                        <img src={require("../assets/blob.png")} alt="" style={{ width: '100%' }} />
                        :
                        <img src={require("../assets/bloblight.png")} alt="" style={{ width: '100%' }} />
                    }
                </Box>
                <Box sx={{ position: 'relative', zIndex: '1' }}>
                    <Container fixed sx={{ py: '100px' }}>
                        <Box sx={{ textAlign: { md: 'center', xs: 'left' } }}>
                            <Typography sx={h2} color="text.primary" >
                                Our Prime Package
                            </Typography>
                            <img src={require("../assets/bottomline.png")} alt="" style={{ marginBottom: '30px' }} />
                        </Box>
                        <Grid
                            container
                            spacing={5}
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            alignContent="center"
                            flexWrap="wrap-reverse"
                            sx={{ marginTop: { md: '100px', xs: '-10px' } }}
                        >
                            <Grid item xl={4} md={4} xs={12}>
                                <Fade left>
                                    <Box sx={cardStyle} textAlign="center">
                                        <Typography sx={h2} color="#fff" textAlign="center">
                                            300 $
                                        </Typography>
                                        <br />
                                        <Typography sx={h4} color="#fff">
                                            It’s one time fee for getting access to oceans of opportunity no need to pay on monthly basis.
                                        </Typography>

                                        <Button variant="contained" color="primary" sx={btnStyle}>
                                            Buy
                                        </Button>
                                    </Box>
                                </Fade>
                            </Grid>
                            <Grid item xl={5} md={5} xs={12}>
                                <Fade bottom>
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            HQ Signals
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Access to private pooling group
                                        </Typography>
                                    </Box> <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Highly Accurate
                                        </Typography>
                                    </Box>
                                    <br />
                                    <Box display="flex" alignItems="flex-start" gap="10px">
                                        <img src={require("../assets/radio.png")} alt="" />
                                        <Typography sx={h3} color="text.primary">
                                            Access to Dashboard Soon
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </div>
    )
}

export default PrimePackage
