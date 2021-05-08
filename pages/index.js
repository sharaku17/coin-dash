import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {signIn,signOut,useSession} from 'next-auth/client'
import Layout_landingpage from '../components/Layout_landingpage'
import HeroData from '../components/HeroData'

//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()

async function saveName(name){
  console.log(name)
  const response = await fetch('api/username', {
    method: 'POST',
    body: JSON.stringify(name),
  });

  if (!response.ok){
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function Home() {
  const  [session, loading] = useSession();

  console.log(session)

  if (!session) {
    return (
      <Layout_landingpage>
        
      </Layout_landingpage>
  )
  }else{
    return (

      // TODO Build Homepage for coin-dash
    <HeroData username={session.user.name}>

    </HeroData>
    )
  }


}
