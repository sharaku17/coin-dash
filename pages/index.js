
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {signIn,signOut,useSession} from 'next-auth/client'
import Layout_landingpage from '../components/Layout_landingpage'
import HeroData from '../components/HeroData'
import { useState, useEffect } from 'react'

//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to)
    
  }, [to])

  return null
}

export default function Home() {
  const  [session, loading] = useSession();
  const router = useRouter()
  const [showNav, setShowNav] = useState(true);
  const toggle = () => setShowNav(!showNav)
  if(loading){
    return <div></div>
  }

  if (!session) {
    return (
      <Layout_landingpage>
        
      </Layout_landingpage>
  )
  }else {
    return(
    <Redirect to='/dashboard' ></Redirect>
    )
  }



  




}
