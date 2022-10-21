import React from 'react'
import { Typography, Box, Container, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';


const h2 = { fontSize: { md: '64px', xs: '40px' }, lineHeight: { md: '79px', xs: '49px' }, fontWeight: '600' }
const h3 = { fontSize: { md: '24px', xs: '18px' }, lineHeight: { md: '34px', xs: '26px' }, fontWeight: '500' }

const Learn = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    return (
        <>
            <Box id="learn" position='relative' height="auto">
                <Box >
                    <Container fixed sx={{ py: { md: '100px', xs: '50px' } }}>
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            alignContent="center"
                            flexWrap="wrap"
                        >
                            <Grid item xl={7} md={7} xs={12}>
                                <Fade bottom>
                                    <Typography sx={h2} color="text.primary">
                                        Learn
                                    </Typography>
                                    <img src={require("../assets/bottomline.png")} alt="" style={{ marginBottom: '30px' }} />
                                    <br />
                                    <Typography sx={h3} color="text.primary">
                                        Follow our guides to learn how to trade cryptocurrencies and make money from home. We cover everything from beginner strategies all the way up to advanced trading techniques that can help you earn consistent profits.
                                    </Typography>
                                </Fade>
                            </Grid>
                            <Grid item xl={5} md={5} xs={12}>
                                <Fade top>
                                    <img src={require("../assets/ce.png")} alt="" style={{ width: '100%' }} />
                                </Fade>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Learn