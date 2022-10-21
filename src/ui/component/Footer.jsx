import React from 'react'
import { Typography, Box, Container, Grid, Divider } from '@mui/material'
import { useTheme, } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    return (
        <>
            <Box sx={{ background: color == "light" ? '#1F1F1E' : '#1F1F1E' }}>
                <Container fixed sx={{ paddingTop: { md: '100px', xs: '50px' }, paddingBottom: { md: '50px', xs: '50px' }, }}>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                    >
                        <Grid item xl="5" md="5" xs="12">
                            <img src={require("../../new-ui/assets/logonewdark.png")} alt="" style={{ width: '250px' }} />
                            {/* <img src={require("../../new-ui/assets/logobg.png")} alt="imf" /> */}
                            <br /><br />
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                                Our team releases frequent market analyses to offer you an overall picture of Bitcoin, altcoins and the market sentiment.
                            </Typography>
                        </Grid>
                        <Grid item xl="3" md="3" xs="12">
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                                Privacy policy
                            </Typography>
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                                Terms & Condition
                            </Typography>
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                                Telegram Support
                            </Typography>
                        </Grid>
                        <Grid item xl="3" md="3" xs="12">
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                                Cryptoexpress@gmail.com
                            </Typography><br />
                            {color == "light" ?
                                <Box display="flex" alignItems="center" gap="40px">
                                    <img src={require("../assets/twl.png")} alt="imf" />
                                    <img src={require("../assets/tgl.png")} alt="imf" />
                                </Box>
                                :
                                <Box display="flex" alignItems="center" gap="40px">
                                    <img src={require("../assets/twl.png")} alt="imf" />
                                    <img src={require("../assets/tgl.png")} alt="imf" />
                                </Box>
                            }
                        </Grid>
                    </Grid>
                </Container>
                <Divider sx={{ background: '#fff' }} />
                <Container fixed sx={{ py: { md: '50px', xs: '50px' }, }}>
                    <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: '34px', fontWeight: '500' }} color='#fff'>
                        Disclaimer : All the information provided by Crypto express is for informational purposes only and should not be considered as investment advice. We do not give investment advice. Your investments are your responsibility and we won't accept any liability for any losses you may incur by following or not following our opinions or any contents. You are subscribing to follow our trades that we provide is for educational purposes only
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
