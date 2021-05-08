import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HeroData from './HeroData'


const Layout_landingpage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero>{children} </Hero>
        </div>
    )
}

export default Layout_landingpage