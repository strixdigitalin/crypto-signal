import React from 'react'
import { Typography, Box, Container, } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    const cardStyle = {
        boxSizing: "border-box",
        background: color == "light" ? "#E9E9E9" : "#1F1F1E",
        // border: color == "light" ? "1px solid #000000" : "1px solid #fff",
        width: { md: '400px', xs: '100%' },
        height: { md: '300px', xs: 'auto' },
        padding: '20px',
    }
    const settings = {
        dots: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        centerPadding: 50,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Fade bottom>
                <Box position="relative">
                    <Box sx={{ position: 'absolute', bottom: '0', right: '0', display: { md: 'block', xs: 'none' } }}>
                        <img src={require("../../new-ui/assets/blurr.png")} alt="" />
                    </Box>
                    <Container fixed sx={{ paddingTop: { md: '150px', xs: '50px' }, paddingBottom: { md: '150px', xs: '50px' } }}>
                        <Typography sx={{ fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '64px', xs: '50px' }, fontWeight: '600', textAlign: { md: 'center', xs: 'center' } }} color='text.primary'>
                            Testimonials
                        </Typography>
                        <br /><br /><br />
                        <Slider {...settings}>
                            {[{
                                name: "Almin Jospeh",
                                title: "“ Love your  Saviour, not only your signals. ”"
                                , role: "Business Associate "
                            }, {
                                name: "Shady Sibai",
                                title: "“ I am really satisfied with your signals and market updates especially your unique cryptomarketcap analysis. From the first hour, your deliver great accurate signals. Thanks. ”"
                                , role: "Student"
                            }, {
                                name: "Morris Gary",
                                title: "“ I am really satisfied with your signals and market updates especially your unique cryptomarketcap analysis. ”"
                                , role: "Business Manager"
                            },
                            {
                                name: "Trivu Semp",
                                title: "“ I am really satisfied with your signals and market updates , Thanks  ”"
                                , role: "Trader"
                            },
                            {
                                name: "Adam Kriston",
                                title: "“ Love your  Saviour, not only your signals. ”"
                                , role: "Business Associate "
                            }, {
                                name: "Ilva Mater",
                                title: "“ I am really satisfied with your signals and market updates especially your unique cryptomarketcap analysis. From the first hour, your deliver great accurate signals. Thanks. ”"
                                , role: "Student"
                            }, {
                                name: "Azalot Bisp",
                                title: "“ I am really satisfied with your signals and market updates especially your unique cryptomarketcap analysis. ”"
                                , role: "Business Manager"
                            },
                            {
                                name: "Josephine Riveria",
                                title: "“ I am really satisfied with your signals and market updates , Thanks  ”"
                                , role: "Trader"
                            },].map((item, i) => (
                                <Box >
                                    <Box sx={cardStyle} position="relative">
                                        <Typography gutterBottom sx={{ fontSize: '80px', position: 'absolute', left: '10px', top: '-30px' }} color='text.primary'>
                                            "
                                        </Typography>
                                        <Box display="flex" gap="20px" alignItems="center">
                                            <img src={require(`../assets/testimonial${i + 1}.png`)} alt="" />
                                            <div>
                                                <Typography gutterBottom sx={{ fontSize: { md: '35px', xs: '30px' }, lineHeight: '30px', fontWeight: '600', }} color='text.primary'>
                                                    {item.name}
                                                </Typography>
                                                <Typography sx={{ fontSize: '20px', lineHeight: '24px', fontWeight: '500', }} color='text.primary'>
                                                    {item.role}
                                                </Typography>
                                            </div>
                                        </Box>
                                        <br />
                                        <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', }} color='text.primary'>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Container>
                </Box>
            </Fade>
        </div>
    )
}

export default Testimonials
