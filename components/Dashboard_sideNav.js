import React from 'react'
import Row from './SideNavRow'

const Dashboard_sideNav = ({visible, toggle}) => {
    return (
        <aside className={visible ? " bg-white w-60 flex-shrink-0 -ml-40  shadow-md transform  transition-all duration-2 ease-in-out  " : " bg-white w-60  shadow-md transition-all duration-2 ease-in-out  "} >
            <div onClick={toggle} className='flex cursor-pointer justify-end mr-5 mt-4 '>

            <div className={!visible ? 'c-hamburger mr-2 c-hamburger--arrow active' : 'c-hamburger mr-2 c-hamburger--arrow  '}>
            <div className="c-hamburger-inner ">
                <span className="c-hamburger-bar"></span>
                <span className="c-hamburger-bar"></span>
                <span className="c-hamburger-bar"></span>
            </div>
            </div>
            </div>
            {!visible ? <div
               className='h-20  justify.center  items-center'>

    
                   <div className='font-semibold   text-3xl mt-10 '>
                       <span className='text-indigo-500 font-bold text-4xl'>C</span>oin-<span className='text-indigo-500 font-bold text-4xl'>D</span>ash
                   </div>
               </div>
               : 
               <div className='h-20 mt-10  justify.center items-center'></div> }
               

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
    )
}

export default Dashboard_sideNav


