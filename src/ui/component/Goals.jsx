import React from 'react'
import { Typography, Box, Container, Grid } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        [theme.breakpoints.down(700)]: {
            width: "100%",
        },
    },
}));

const Goals = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;

    return (
        <>
            <Box sx={{ background: color == "light" ? '#E4DDCA' : '#1F1F1E' }}>
                <Container fixed sx={{ paddingTop: { md: '150px', xs: '50px' }, paddingBottom: { md: '150px', xs: '50px' } }}>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                    >
                        <Grid item xl="7" md="7" xs="12">
                            <Typography sx={{
                                fontSize: { md: '60px', xs: '40px' },
                                lineHeight: { md: '64px', xs: '50px' },
                                fontWeight: '600',
                            }} color='text.primary'>
                                Our Goals
                                <img src={require("../assets/trade.png")} alt="imf" style={{ margin: '0px 0px 0 20px' }} />
                            </Typography>
                            <br />
                            <Typography sx={{
                                fontSize: '24px',
                                lineHeight: '34px',
                                fontWeight: '500',
                            }} color='text.primary'>
                                <li>
                                    Our Goal is to help you to trade the right way by sharing our experience , knowledge and insights on how to make money trading cryptocurrency
                                </li>
                                <li>
                                    Main vision of CryptoExpress is to provide appropriate technical and fundamental analysis of Bitcoin and crypto market. We have a group of experts from different field such as finance,technology and business management to guide you in every steep of trading.
                                </li>
                                <li>
                                    We aim to provide day trading courses helps to generate stable profit from daily trading.
                                </li>
                                <li>
                                    Company intent to come up with real time crypto news updates for investors,traders and enthusiast.
                                </li>
                                <li>
                                    Provide a clear roadmap for the investors to monitor performance and see progress .
                                </li>
                                <li>
                                    We can guide you to make profit in any market shape.
                                </li>
                            </Typography>
                        </Grid>
                        <Grid item xl="4" md="4" xs="12">
                            <img src={require("../assets/goals.png")} alt="imf" className={classes.image} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Goals
