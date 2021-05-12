import React from 'react'
import {signOut} from 'next-auth/client'
import Link from 'next/link'
import  Dashboard_nav  from '../Dashboard_nav'
import  Dashboard_sideNav from '../Dashboard_sideNav'

 const Dashboard_Layout = ({children, user,visible,toggle}) => {
    return (
        <>
        <Dashboard_nav user={user} >
        </Dashboard_nav>

        
        <div className='flex min-h-screen min-w-screen bg-gray-100  text-center  justify-between'>
        <Dashboard_sideNav  visible={visible} toggle={toggle} >

        </Dashboard_sideNav>
        
        {children}
        </div>

       
   {/* <div className='flex min-h-screen min-w-screen bg-gray-100  text-center  justify-between'>
            <div className='m-auto '>
            <h1 className='item-center text-center  font-bold text-5xl'><span className=' text-7xl '>{user.name}</span><br></br> all your crypto data in one single place</h1>
            <span className='font-semibold  text-lg'>
                <p className='mb-20 mt-10 '>
                    Dem Crypto Dashboard der Zukunft. Managen und vergleichen sie ihre favorisierten Cryptowährungen wie noch nie zuvor!
                </p>
                <div onClick={()=> signOut()} className="  rounded-full py-2 px-4 uppercase font-semibold cursor-pointer tracking-wider text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white transition ease-out duration-700">Log out</div>
            </span>

            </div>

        </div> */}     
        </>
    )
}


export default Dashboard_Layout
