import React from 'react'
import { Typography, Box, Container, Divider } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Service = () => {
    const theme = useTheme();
    const color = theme.palette.mode;

    return (
        <>
            <Box sx={{ background: color == "light" ? '#7E64FF' : '#000' }}>
                <Container fixed sx={{ paddingTop: { md: '100px', xs: '50px' }, paddingBottom: { md: '100px', xs: '50px' }, }}>
                    <Fade bottom>
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='#fff'>
                            Our Services
                        </Typography>
                        <br /><br /><br />
                        {data.map((item, i) => (<>
                            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={
                                        <img src={require("../assets/Group 18.png")} alt="imf" />
                                    }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: { md: '32px', xs: '24px' }, lineHeight: '39px', fontWeight: '500',  }} color='#fff'>
                                        {item.item}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { md: '22px', xs: '18px' }, lineHeight: '30px', fontWeight: '400',  }} color='#fff'>
                                        {item.desc}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <br/>
                            <Divider/>
                            <br/>
                        </>))}
                    </Fade>
                </Container>
            </Box>
        </>
    )
}

export default Service

const data = [
    {
        item: `Market  Analysis`,
        desc: `Crypto Express’s goal is to provide traders with a complete analytical view of the market and help them make good decisions. With our analysits you can stay on the top of the latest development in the crypto world and take advantage of this knowledge to increase your profit.`
    },
    {
        item: `Trades on most of exchange`,
        desc: ` We provide cryptocurrency trading signals, technical analysis and news related to Bitcoin(BTC), Ethereum(ETH), Ripple(XRP) and other altcoins. We also cover Bitcoin technical analysis, short term & long term predictions for BTC price based on volume & price data. `
    },
    {
        item: `Personal Support `,
        desc: `We have a dedicated team of experts to help you with any queries related to cryptocurrencies. You can contact us at [email protected]`
    },
    {
        item: `Trading Signals 
        `,
        desc: `Crypto Express’s  service is designed to help you maximize profits in both rising and falling markets, while avoiding the risk of a single position.Crypto Express also offer daily signals on individual stocks, options, futures and ETFs as well as weekly trading plans with specific setups and entry points to maximize your profits in any market condition.
        `
    },
    {
        item: `Robitization `,
        desc: `This is not a get-rich-quick scheme. You need to learn how to trade, and you will be able to do so with the help of our signals. We are here to help you make money from cryptocurrency trading.
        `
    },
    {
        item: `Subscription `,
        desc: `Our team releases frequent market analyses to offer you an overall picture of Bitcoin, altcoins and the market sentiment. We also provide a daily round-up of the latest news and events that are impacting the market. Our analysts are constantly monitoring the developments in the cryptocurrency industry, so you don’t have to worry about missing out on anything important.  We are here to do the everyday research and analysis for you so that you can spend your time on other things. We will find out which is the best project to invest in right now. 
        `
    },
    {
        item: `Advice On Trade 
        `,
        desc: `We have a dedicated team of experts who can provide insight on how to trade in volatile market like bitcoin. We regularly update our subscribers on the latest developments in the crypto space and help them decide what’s worth investing their hard earned money.`
    },
]