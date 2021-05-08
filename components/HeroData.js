import React from 'react'
import {signIn,signOut} from 'next-auth/client'

 const Hero = ({username}) => {
    return (
        <div className='flex min-h-screen min-w-screen bg-gray-100  text-center  justify-between'>

            <div>




</div>
<div className='m-auto max-w-3xl'>
            <h1 className='item-center text-center  font-bold text-5xl'><span className=' text-7xl '>{username}</span><br></br> all your crypto data in one single place</h1>
            <span className='font-semibold  text-lg'>
                <p className='mb-20 mt-10 '>
                    Dem Crypto Dashboard der Zukunft. Managen und vergleichen sie ihre favorisierten Cryptowährungen wie noch nie zuvor!
                </p>
                <button onClick={()=>signOut()} className="  rounded-full py-2 px-4 uppercase font-semibold cursor-pointer tracking-wider text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white transition ease-out duration-700">Log out</button>
            </span>

            </div>

        </div>
    )
}
export default Hero