import React from 'react'
import Testimonials from '../ui/component/Testimonials'
import Contact from '../ui/component/Contact'
import CeGoals from './components/CeGoals'
import Hero from './components/Hero'
import PrimePackage from './components/PrimePackage'
import WhyUs from './components/WhyUs'
import Footer from '../ui/component/Footer'
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material'
import Learn from './components/Learn'

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    React.useEffect(() => {
        setOpen(true)
    }, [])
    return (
        <>
            <Dialog
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        background: 'transparent',
                        boxShadow: 'none',
                        cursor: 'pointer',
                    }
                }}
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box textAlign="center" sx={{ width: { md: '80%', xs: '100%' },margin:'auto' }}>
                    <img src={require("./assets/dialog.png")} alt="" style={{ width: '100%' }} />
                </Box>
            </Dialog>
            <Hero />
            <CeGoals />
            <Testimonials />
            <WhyUs />
            <PrimePackage />
            <Learn/>
            <Contact />
            <Footer />
        </>
    )
}

export default Home