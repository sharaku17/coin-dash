import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

import prisma from '../../../client'
//import {PrismaClient} from '@prisma/client'

//const prisma = new PrismaClient();


const autoHandler = (req , res) => NextAuth(req,res,{
    providers: [
        Providers.Email({
            server: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            },
            from:process.env.SMTP_FROM
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
    ],

    adapter: Adapters.Prisma.Adapter({prisma}),
    secret: process.env.SECRET
});
export default autoHandler;