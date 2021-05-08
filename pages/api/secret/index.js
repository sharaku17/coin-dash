import {getSession} from 'next-auth/client'

export default async (req ,res) => {
    const session = await getSession({req});
    co
    if(session){
        res.send({
            content: "Welcome !"
        });
    }else {
        res.send({
            error: "You need to be signed in! "
        })
    }
}
