import {getSession} from 'next-auth/client';
import prisma from '../../../client'


export default async (req ,res) => {
    if (req.method !== 'GET'){
        return res.status(405).json({message: 'Method not allowed'})
    }
    const session = await getSession({req});

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        },
        include: {
            cryptos: true
        }
    })


    res.status(200).json(user.cryptos)
}
