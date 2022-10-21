import React from 'react'
import { Typography, Box, Container, AppBar } from '@mui/material'
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

const Trade = () => {
    const classes = useStyles();
    const theme = useTheme();
    const color = theme.palette.mode;
    const semiCricle = {
        height: "90vh",
        borderRadius: "0 0 50vw 50vw ",
        backgroundColor: color == "light" ? '#fff' : '#1F1F1E',
        marginTop: '-500px'
    }
    return (
        <>
            <Box sx={{ background: color == "light" ? '#fff' : '#1F1F1E' }}>
            <Container fixed maxWidth="md" sx={{paddingTop:{md:'auto',xs:'50px'}}}>
                    <Fade bottom>
                    <Typography sx={{ fontSize:{md:'60px',xs:'40px'}, lineHeight:{md:'64px',xs:'50px'}, fontWeight: '600', textAlign:{md:'center',xs:'center'} }} color='text.primary'>
                            Learn and Trade
                            <img src={require("../assets/trade.png")} alt="imf" style={{ margin: '0px 0px 0 20px' }} />
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: '24px', lineHeight: '34px', fontWeight: '500', textAlign:{md:'center',xs:'center'} }} color='text.primary'>
                            The first Blockchain resources for real-time crypto news, market analyses, education & portfolio research entities actively publishing content across Telegram, YouTube, Twitter, Instagram, and LinkedIn to a community of 500k+ active crypto traders
                            and subscribers across all social media platforms combined.
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

export default Trade
