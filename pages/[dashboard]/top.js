import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import Dashboard_Layout from '../../components/layouts/Dashboard_Layout'




export default function Dashboard(){
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
        <h1 className='text-4xl items-center m-auto'> Top</h1>
                </Dashboard_Layout>
            )

        }
}