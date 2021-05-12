import React from 'react'
import {signOut} from 'next-auth/client'
import Link from 'next/link'
import {useRouter} from 'next/router'

 const Hero = ({user,visible,toggle}) => {
    return (
        <>
        <div className='flex justify-between  w-auto bg-gradient-to-r from-indigo-700 to-indigo-800 z-20 h-16 shadow-md'>
           <div className='flex items-center'> 
           <svg className='w-14 h-14 ml-6 mr-6 ' width="140" height="58" viewBox="0 0 112 58" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.224 2.28C35.136 2.28 40.68 4.632 44.856 9.336C49.032 14.088 51.12 20.736 51.12 29.28C51.12 37.776 49.128 44.4 45.144 49.152C41.112 53.904 35.544 56.28 28.44 56.28C24.696 56.28 21.36 55.92 18.432 55.2C17.712 55.008 17.136 54.6 16.704 53.976C16.224 53.352 15.984 52.656 15.984 51.888C15.984 51.264 16.248 50.76 16.776 50.376C17.256 50.04 17.808 49.968 18.432 50.16C21.264 51.024 24.432 51.456 27.936 51.456C33.36 51.456 37.608 49.512 40.68 45.624C43.752 41.736 45.288 36.288 45.288 29.28C45.288 22.32 43.704 16.872 40.536 12.936C37.32 9.048 33.048 7.104 27.72 7.104C24.168 7.104 20.952 7.536 18.072 8.4C17.448 8.592 16.896 8.496 16.416 8.112C15.888 7.776 15.624 7.296 15.624 6.672C15.624 5.904 15.864 5.208 16.344 4.584C16.776 4.008 17.352 3.624 18.072 3.432C21.288 2.664 24.672 2.28 28.224 2.28Z" fill="white"/>
                <path d="M44.856 9.336L45.6072 8.67588L45.6038 8.67211L44.856 9.336ZM45.144 49.152L45.9065 49.799L45.9103 49.7945L45.144 49.152ZM18.432 55.2L18.1743 56.1662L18.1837 56.1687L18.1932 56.1711L18.432 55.2ZM16.704 53.976L17.5262 53.4068L17.5119 53.3862L17.4966 53.3663L16.704 53.976ZM16.776 50.376L16.2025 49.5568L16.1951 49.562L16.1878 49.5673L16.776 50.376ZM18.432 50.16L18.1379 51.1158L18.1402 51.1165L18.432 50.16ZM40.68 45.624L39.8954 45.004L39.8954 45.004L40.68 45.624ZM40.536 12.936L41.3151 12.3089L41.3066 12.2986L40.536 12.936ZM18.072 8.4L17.7846 7.44215L17.7779 7.44422L18.072 8.4ZM16.416 8.112L17.0407 7.33113L16.9985 7.29736L16.9529 7.26834L16.416 8.112ZM16.344 4.584L17.1367 5.19376L17.144 5.184L16.344 4.584ZM18.072 3.432L17.8397 2.45935L17.827 2.46239L17.8143 2.46577L18.072 3.432ZM28.224 3.28C34.8818 3.28 40.142 5.53225 44.1082 9.99989L45.6038 8.67211C41.218 3.73175 35.3902 1.28 28.224 1.28V3.28ZM44.1048 9.99612C48.0716 14.51 50.12 20.893 50.12 29.28H52.12C52.12 20.579 49.9924 13.666 45.6072 8.67589L44.1048 9.99612ZM50.12 29.28C50.12 37.6278 48.1631 43.9944 44.3777 48.5095L45.9103 49.7945C50.0929 44.8056 52.12 37.9242 52.12 29.28H50.12ZM44.3815 48.505C40.5673 53.0003 35.2962 55.28 28.44 55.28V57.28C35.7918 57.28 41.6567 54.8077 45.9065 49.799L44.3815 48.505ZM28.44 55.28C24.758 55.28 21.5045 54.9258 18.6708 54.2289L18.1932 56.1711C21.2155 56.9143 24.634 57.28 28.44 57.28V55.28ZM18.6897 54.2338C18.2036 54.1041 17.8258 53.8396 17.5262 53.4068L15.8818 54.5452C16.4462 55.3604 17.2204 55.9119 18.1743 56.1662L18.6897 54.2338ZM17.4966 53.3663C17.1475 52.9124 16.984 52.4296 16.984 51.888H14.984C14.984 52.8824 15.3005 53.7916 15.9114 54.5857L17.4966 53.3663ZM16.984 51.888C16.984 51.601 17.0808 51.3908 17.3642 51.1847L16.1878 49.5673C15.4152 50.1292 14.984 50.927 14.984 51.888H16.984ZM17.3495 51.1952C17.5456 51.058 17.7702 51.0026 18.1379 51.1158L18.7261 49.2042C17.8458 48.9334 16.9664 49.022 16.2025 49.5568L17.3495 51.1952ZM18.1402 51.1165C21.0823 52.0141 24.3507 52.456 27.936 52.456L27.936 50.456C24.5133 50.456 21.4457 50.0339 18.7238 49.2035L18.1402 51.1165ZM27.936 52.456C33.6328 52.456 38.1833 50.3968 41.4646 46.244L39.8954 45.004C37.0326 48.6272 33.0872 50.456 27.936 50.456L27.936 52.456ZM41.4646 46.244C44.7237 42.1192 46.288 36.4218 46.288 29.28H44.288C44.288 36.1542 42.7803 41.3528 39.8954 45.004L41.4646 46.244ZM46.288 29.28C46.288 22.1772 44.6716 16.4793 41.315 12.309L39.757 13.563C42.7364 17.2647 44.288 22.4628 44.288 29.28H46.288ZM41.3066 12.2986C37.8887 8.16661 33.3269 6.104 27.72 6.104V8.104C32.7691 8.104 36.7513 9.92939 39.7654 13.5734L41.3066 12.2986ZM27.72 6.104C24.0878 6.104 20.773 6.54568 17.7847 7.44217L18.3593 9.35783C21.131 8.52632 24.2482 8.104 27.72 8.104V6.104ZM17.7779 7.44422C17.4469 7.54606 17.2438 7.49359 17.0407 7.33113L15.7913 8.89287C16.5482 9.49841 17.4491 9.63794 18.3661 9.35578L17.7779 7.44422ZM16.9529 7.26834C16.7123 7.11523 16.624 6.95287 16.624 6.672H14.624C14.624 7.63913 15.0637 8.43677 15.8791 8.95566L16.9529 7.26834ZM16.624 6.672C16.624 6.13044 16.7874 5.64763 17.1366 5.19371L15.5514 3.97429C14.9405 4.76837 14.624 5.67756 14.624 6.672H16.624ZM17.144 5.184C17.4364 4.7941 17.8182 4.53462 18.3297 4.39823L17.8143 2.46577C16.8858 2.71338 16.1156 3.2219 15.544 3.984L17.144 5.184ZM18.3043 4.40465C21.4388 3.65611 24.7445 3.28 28.224 3.28V1.28C24.5995 1.28 21.1372 1.67189 17.8397 2.45935L18.3043 4.40465Z" fill="white"/>
                <path d="M59.88 7.768V49.672C59.88 50.056 60.096 50.296 60.528 50.392C62.4 50.728 64.512 50.896 66.864 50.896C73.824 50.896 78.912 49.096 82.128 45.496C85.392 41.896 87.024 36.064 87.024 28C87.024 20.656 85.368 15.256 82.056 11.8C78.792 8.296 73.728 6.544 66.864 6.544C64.512 6.544 62.4 6.712 60.528 7.048C60.096 7.144 59.88 7.384 59.88 7.768ZM58.152 55.216C57 55.072 56.04 54.568 55.272 53.704C54.504 52.792 54.12 51.736 54.12 50.536V6.904C54.12 5.704 54.48 4.672 55.2 3.808C55.968 2.896 56.952 2.368 58.152 2.224C60.792 1.888 63.696 1.72 66.864 1.72C83.952 1.72 92.496 10.48 92.496 28C92.496 46.48 83.952 55.72 66.864 55.72C63.696 55.72 60.792 55.552 58.152 55.216Z" fill="white"/>
                <path d="M60.528 50.392L60.3111 51.3682L60.3311 51.3726L60.3513 51.3763L60.528 50.392ZM82.128 45.496L81.3871 44.8243L81.3822 44.8298L82.128 45.496ZM82.056 11.8L81.3243 12.4816L81.3291 12.4868L81.334 12.4919L82.056 11.8ZM60.528 7.048L60.3513 6.06373L60.3311 6.06736L60.3111 6.07181L60.528 7.048ZM58.152 55.216L58.2783 54.224L58.276 54.2237L58.152 55.216ZM55.272 53.704L54.5071 54.3481L54.5157 54.3584L54.5246 54.3684L55.272 53.704ZM55.2 3.808L54.4351 3.16385L54.4318 3.16781L55.2 3.808ZM58.152 2.224L58.2711 3.2169L58.2783 3.216L58.152 2.224ZM58.88 7.768V49.672H60.88V7.768H58.88ZM58.88 49.672C58.88 50.0616 58.9951 50.4717 59.2987 50.809C59.589 51.1316 59.9655 51.2914 60.3111 51.3682L60.7449 49.4158C60.6585 49.3966 60.711 49.3884 60.7853 49.471C60.8227 49.5126 60.8498 49.5605 60.8655 49.6059C60.8803 49.6487 60.88 49.6744 60.88 49.672H58.88ZM60.3513 51.3763C62.2934 51.7248 64.466 51.896 66.864 51.896V49.896C64.558 49.896 62.5066 49.7312 60.7047 49.4077L60.3513 51.3763ZM66.864 51.896C73.9802 51.896 79.3966 50.0546 82.8738 46.1622L81.3822 44.8298C78.4274 48.1374 73.6678 49.896 66.864 49.896V51.896ZM82.8688 46.1677C86.3797 42.2954 88.024 36.1594 88.024 28H86.024C86.024 35.9686 84.4043 41.4966 81.3872 44.8243L82.8688 46.1677ZM88.024 28C88.024 20.5322 86.3435 14.8286 82.778 11.1081L81.334 12.4919C84.3925 15.6834 86.024 20.7798 86.024 28H88.024ZM82.7877 11.1184C79.2648 7.33643 73.8832 5.544 66.864 5.544V7.544C73.5728 7.544 78.3192 9.25557 81.3243 12.4816L82.7877 11.1184ZM66.864 5.544C64.466 5.544 62.2934 5.71515 60.3513 6.06373L60.7047 8.03227C62.5066 7.70884 64.558 7.544 66.864 7.544V5.544ZM60.3111 6.07181C59.9655 6.1486 59.589 6.30843 59.2987 6.63103C58.9951 6.96833 58.88 7.37836 58.88 7.768H60.88C60.88 7.76555 60.8803 7.79131 60.8655 7.83411C60.8498 7.87948 60.8227 7.92736 60.7853 7.96896C60.711 8.05156 60.6585 8.0434 60.7449 8.02419L60.3111 6.07181ZM58.276 54.2237C57.3636 54.1097 56.6255 53.7215 56.0194 53.0396L54.5246 54.3684C55.4545 55.4145 56.6364 56.0343 58.028 56.2083L58.276 54.2237ZM56.0369 53.0599C55.4218 52.3294 55.12 51.502 55.12 50.536H53.12C53.12 51.97 53.5862 53.2546 54.5071 54.3481L56.0369 53.0599ZM55.12 50.536V6.904H53.12V50.536H55.12ZM55.12 6.904C55.12 5.92103 55.4085 5.1199 55.9682 4.44818L54.4318 3.16781C53.5515 4.2241 53.12 5.48696 53.12 6.904H55.12ZM55.9649 4.45213C56.5672 3.73695 57.319 3.33113 58.2711 3.21687L58.0329 1.23112C56.585 1.40486 55.3688 2.05504 54.4351 3.16386L55.9649 4.45213ZM58.2783 3.216C60.8694 2.88621 63.7305 2.72 66.864 2.72V0.719999C63.6615 0.719999 60.7146 0.889782 58.0257 1.232L58.2783 3.216ZM66.864 2.72C75.2474 2.72 81.3528 4.86729 85.3721 8.98822C89.396 13.1138 91.496 19.388 91.496 28H93.496C93.496 19.092 91.324 12.2262 86.8039 7.59177C82.2792 2.9527 75.5686 0.719999 66.864 0.719999V2.72ZM91.496 28C91.496 37.1044 89.3897 43.7464 85.3538 48.1111C81.3315 52.461 75.2329 54.72 66.864 54.72V56.72C75.5831 56.72 82.3005 54.359 86.8222 49.4689C91.3303 44.5936 93.496 37.3756 93.496 28H91.496ZM66.864 54.72C63.7305 54.72 60.8694 54.5538 58.2783 54.224L58.0257 56.208C60.7146 56.5502 63.6615 56.72 66.864 56.72V54.72Z" fill="white"/>
                <line y1="29" x2="112" y2="29" stroke="white" stroke-width="6" stroke-dasharray="25 3"/>
                </svg>
              
           </div>
            <nav className=' flex  text-right  item-center '>
                
                        <span className='item-center font-semibold text-white mt-auto mb-auto'>
                            {user.name}
                        </span>
                   
                        <img src={user.image} className='w-12 h-12 mt-auto mb-auto mr-6 ml-6  rounded-full '>
                        </img>
                   
                
            </nav>
        </div>
        <div className='flex min-h-screen min-w-screen bg-gray-100  text-center  justify-between'>

            <aside className={visible ? " bg-white w-60  shadow-md transform -translate-x-3/4 transition duration-2 ease-in-out  " : " bg-white w-60  shadow-md transition duration-2 ease-in-out  "} >
            <div onClick={toggle} className='flex cursor-pointer justify-end mr-5 mt-4 '>

            <div className={!visible ? 'c-hamburger c-hamburger--arrow active' : 'c-hamburger c-hamburger--arrow  '}>
            <div className="c-hamburger-inner">
                <span className="c-hamburger-bar"></span>
                <span className="c-hamburger-bar"></span>
                <span className="c-hamburger-bar"></span>
            </div>
            </div>
            </div>
            {!visible ? <div
               className='h-32  justify.center items-center'>

    
                   <span className='font-semibold  text-3xl item-center text-center mx-auto'>
                       <span className='text-indigo-500 font-bold text-4xl'>C</span>oin-<span className='text-indigo-500 font-bold text-4xl'>D</span>ash
                   </span>
               </div>
               : 
               <div className='h-32  justify.center items-center'></div> }
               

                <nav>
                    <ul>
                      
                        <Row visible={visible} to='/dashboard' icon='home'>
                            Dashboard
                        </Row>
                        <Row visible={visible} to='/dashboard/top' icon='top'>
                            Top Coins
                        </Row>                        
                        <Row visible={visible} to='/dashboard/favorites' icon='my_favorites'>
                            Favorites
                        </Row>
                        <Row visible={visible} to='/dashboard/calcuator' icon='calculator'>
                            Calculator
                        </Row>
                        <Row visible={visible} to='/dashboard/tools' icon='tool'>
                            Tools
                        </Row>
                        <Row visible={visible} to='/dashboard/portfolio' icon='portfolio'>
                            Portfolio
                        </Row>
                    </ul>
                </nav>
            </aside>
<div className='m-auto '>
            <h1 className='item-center text-center  font-bold text-5xl'><span className=' text-7xl '>{user.name}</span><br></br> all your crypto data in one single place</h1>
            <span className='font-semibold  text-lg'>
                <p className='mb-20 mt-10 '>
                    Dem Crypto Dashboard der Zukunft. Managen und vergleichen sie ihre favorisierten Cryptowährungen wie noch nie zuvor!
                </p>
                <div onClick={()=> signOut()} className="  rounded-full py-2 px-4 uppercase font-semibold cursor-pointer tracking-wider text-indigo-500 border-indigo-500 border-2 hover:bg-indigo-500 hover:text-white transition ease-out duration-700">Log out</div>
            </span>

            </div>

        </div>
        </>
    )
}

const Row = (props) => {
    const router = useRouter()
    const visibleClasses = !props.visible ?
    "  hover:text-black focus:text-white focus:outline-none focus:shadow-lg hover:bg-gray-200 focus:bg-indigo-500 transition duration-2 ease-in-out  rounded-lg py-2 spacing-2 mr-6 ml-6 mt-6 flex items-center space-x-2" :
    " flex justify-end  hover:text-black focus:outline-none focus:text-white focus:shadow-lg hover:bg-gray-200 focus:bg-indigo-500 ttransition duration-2 ease-in-out  rounded-lg py-2 spacing-2 mr-2 ml-6  mt-6 flex items-center space-x-2"
    const activeClasses = router.asPath == props.to ? 'text-white bg-indigo-500 shadow-lg' : 'text-gray-500 '
   
    return (
        <li className=''>
        <Link href={props.to}>
        <a  className={visibleClasses +' ' + activeClasses } >
            <span  className='ml-2'>{icons[props.icon]} </span>
            {!props.visible? <span className= 'font-semibold' >
                {props.children}
            </span>  : <div></div>  }
        </a>
        </Link>    
        
        </li>
    )
} 
export default Hero

const icons = {
    home: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>),

  top: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
</svg>) ,
  my_favorites: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>),
  calculator: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>),
tool: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>),
portfolio: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>),


}