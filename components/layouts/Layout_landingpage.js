import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'


const Layout_landingpage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero>{children} </Hero>
        </div>
    )
}

export default Layout_landingpage