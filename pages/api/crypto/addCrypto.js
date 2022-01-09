import {getSession, session} from 'next-auth/client';
import prisma from '../../../client'
//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();
console.log(prisma)

export default async (req ,res) => {
    if (req.method !== 'POST'){
        return res.status(405).json({message: 'Method not allowed'})
    }

    const session = await getSession({req});

    const data = JSON.parse(req.body);
    const crypto = data.crypto
    const amount = parseFloat(data.amount)
    console.log(data.amount)
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        },
        include: {
            cryptos: true
        }
    })
    const all_cryptos =  user?.cryptos

    const filteredCryptos = all_cryptos.filter((e) => e.name === crypto) 
    console.log(filteredCryptos)

    if (filteredCryptos.length === 1){
        const savedCrypto = await prisma.user.update({
            where: { email: session.user.email},
            data: {
                cryptos: {
                    update: {
                        data: { amount: amount + parseFloat(filteredCryptos[0].amount) }
                        ,
                        where:{ id: filteredCryptos[0].id } ,
                    }
                }
                
    
            }
        })
        res.send({
            success: "True",
            content: " "
        })

    }
    else{

        const savedCrypto = await prisma.user.update({
            where: { email: session.user.email},
            data: {
                cryptos: {
                    create: {
                        name: crypto,
                        amount: amount,
                    }
                }
                
    
            }
        })
        res.send({
            success: "True",
                content: " "
        })

    }

    // const data = JSON.parse(req.body)
    // console.log(session.user)    

    
    
    // res.status(405).json({message: data})

}
