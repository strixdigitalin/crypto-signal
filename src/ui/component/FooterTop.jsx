import React from 'react'
import { Typography, Box, Container, Button, Divider } from '@mui/material'
import { useTheme, } from '@mui/material/styles';

const FooterTop = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px',
        fontWeight: '500', background: '#32E7B1', color: '#2D2D2D', padding: '24px',
        cursor: 'pointer', width: { md: '309px', xs: '100%' }, textAlign: 'center',
        border: '1px solid #000000', borderRadius: '0', "&:hover": {
            background: '#32E7B1', color: '#2D2D2D'
        },
        gap: '10px'
    }
    return (
        <div>
            <Box sx={{ background: color == "light" ? '#fff' : '#1F1F1E' }}>
                <Container fixed maxWidth="md" sx={{ paddingTop: { md: '150px', xs: '50px' }, paddingBottom: { md: '150px', xs: '50px' } }}>
                    <Box>
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Telegram
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '25px' }, fontWeight: '500', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Contact us on telegram
                        </Typography>
                        <br />
                        <Container maxWidth="xs" sx={{ background: color == "light" ? '#D9D9D9' : '#000', padding: '50px' }}>
                            <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '25px' }, fontWeight: '500', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                                Telegram Msg’s
                            </Typography>
                        </Container>
                        <br />
                        <br />
                        <Box sx={{ textAlign: 'center' }}>
                            <Button sx={btnStyle} >
                                Join Now
                                {color == "light" ?
                                    <img src={require("../assets/tg.png")} alt="imf" />
                                    :
                                    <img src={require("../assets/tgl.png")} alt="imf" />
                                }
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: { md: '100px', xs: '50px' } }} />
                    <Box textAlign="center" >
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Learn
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '25px' }, fontWeight: '500', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Follow our guides to learn how to trade stocks and make money <br />from home. We cover everything from beginner strategies all the way up to advanced trading techniques that can help you earn consistent profits.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: { md: '100px', xs: '50px' } }} />
                    <Box textAlign="center" >
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            AMA’s
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '25px' }, fontWeight: '500', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            We’re launching the Cryptotrader podcast, a weekly show featuring interviews with CEOs and Founders of the top crypto projects in the industry. Join us as we explore how these leaders are building their companies, what challenges they face along the way, and where they see themselves heading in recent times.
                        </Typography>
                        <br />
                        <br />
                        <Button sx={btnStyle} >
                            Request Ama’s
                            {color == "light" ?
                                <img src={require("../assets/tg.png")} alt="imf" />
                                :
                                <img src={require("../assets/tgl.png")} alt="imf" />
                            }
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Divider sx={{ background: color == "light" ? '#000' : '#fff', }} />
        </div>
    )
}


export default FooterTop