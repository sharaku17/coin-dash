import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import Dashboard_Layout from '../../components/layouts/Dashboard_Layout'
import List from '../../components/List'
import Sparkline from '../../components/Sparkline'




export default function Dashboard({coins_markCap_Desc}){
    const [session,loading] = useSession();
    const [content,setContent] = useState();
    const [showNav, setShowNav] = useState(true);
    const toggle = () => setShowNav(!showNav)

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/api/secret");
            const json = await res.json();

            if(json.content){
                setContent(json.content)
            }
        }
        fetchData();
    }, [session]);

    if (typeof window !== "undefined" && loading) return null;

    if (!session){
        return (
            <div>
                <h1>
                    You aren't signed in, please sign in first.
                </h1>
            </div>
        )
        }else {
            return (

                //Build Dashboard view here 
                <Dashboard_Layout toggle={toggle}  visible={showNav} user={session.user}>
                    <div className=' m-auto'>
                   
                  
                    </div>
        
                </Dashboard_Layout>
            )

        }
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=true')

    const coins_markCap_Desc = await res.json()

    return {
        props: {
            coins_markCap_Desc
        }
    }


}