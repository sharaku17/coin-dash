import {getSession, session} from 'next-auth/client';
import prisma from '../../../client'

export default async (req ,res) => {
    if (req.method !== 'POST'){
        return res.status(405).json({message: 'Method not allowed'})
    }

    const session = await getSession({req});

    const data = JSON.parse(req.body);
    const crypto = data.crypto
    const amount = parseFloat(data.amount)

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

    if (filteredCryptos.length === 1){

        if( (filteredCryptos[0].amount - amount) >= 0){

            const savedCrypto = await prisma.user.update({
                where: { email: session.user.email},
                data: {
                    cryptos: {
                        update: {
                            data: { amount: parseFloat(filteredCryptos[0].amount) - amount }
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
            res.send({
                error: "Withdrawal Failed!",
                content: " "

            })
        }
        

    }
    

}
