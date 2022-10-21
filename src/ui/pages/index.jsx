import React from 'react'
import Hero from '../component/Hero'
import CE from '../component/CE'
import Testimonials from '../component/Testimonials'
import Trade from '../component/Trade'
import Service from '../component/Service'
import Subscriptions from '../component/Subscriptions'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import { useTheme, useMediaQuery } from '@mui/material'
import Goals from '../component/Goals'
import CryptoExp from '../component/CryptoExp'
import FooterTop from '../component/FooterTop'

const Index = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  return (
    <div>
      <Hero />
        <>
          <CE />
          <Goals/>
          {/* <Trade /> */}
          <CryptoExp/>
          <Subscriptions />
          <Service />
          <Testimonials/>
          <Contact />
          <FooterTop/>
          <Footer />
        </>
    </div>
  )
}

export default Index
