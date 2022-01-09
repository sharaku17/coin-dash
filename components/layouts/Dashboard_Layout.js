import React from 'react'
import {signOut} from 'next-auth/client'
import Link from 'next/link'
import  Dashboard_nav  from '../Dashboard_nav'
import  Dashboard_sideNav from '../Dashboard_sideNav'

 const Dashboard_Layout = ({children, user,visible,toggle}) => {
    return (
        <>
        
        <div className='relative flex h-screen w-screen h-full bg-gray-100'>
        
        <aside className='fixed left-0 z-40 flex-col invisible md:visible   flex-shrink-0 h-full overflow-hidden transition-all ' >
        
        
        <Dashboard_sideNav className=""  visible={visible} toggle={toggle} >

        </Dashboard_sideNav>
        </aside>
        <div className= 'fixed top-0 z-40  md:hidden    transition-all ' >
        
        
        <Dashboard_nav visible={visible} toggle={toggle}></Dashboard_nav>
        </div>



        <div className=" h-full w-full max-h-full pt-20 md:ml-24  md:pr-12  overflow-y-scroll">
        {children}

       
        {/* <div className=' sticky top-0 flex items-center  w-full h-full max-w-14 z-10'>
        <Dashboard_nav user={user} >
        </Dashboard_nav>
        </div> */}
        
       
        
        </div>
        

        

       
     
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
