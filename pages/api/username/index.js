import {getSession, session} from 'next-auth/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req ,res) => {
    if (req.method !== 'POST'){
        return res.status(405).json({message: 'Method not allowed'})
    }

    const session = await getSession({req});

    const contactName = JSON.parse(req.body);
    console.log(session.user)    

    const savedContactName = await prisma.user.update({
        where: { email: session.user.email},
        data: {
            name: contactName
        }
    })
    
    res.json(savedContactName)
}
