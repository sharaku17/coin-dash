import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';

export default function Dashboard(){
    const[session,loading] = useSession();
    const[content,setContent] = useState();

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
                <div>
                    <h1>
                        Hello {session.user.name},
                        this is your Dashboard.
                    </h1>
                </div>
            )

        }
}