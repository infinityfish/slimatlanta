import NextAuth from "next-auth"
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions = {
 
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST!,
          //// eslint-disable-next-line @typescript-eslint/ban-ts-comment: to ignore the error at the next line
          // @ts-ignore
          port: String(process.env.EMAIL_SERVER_PORT),
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
        maxAge: 86400, // Magic links are valid for 86400 secs = 1day
      }),
    // ...add more providers here
  ],
  
  secret: process.env.NEXT_PUBLIC_SECRET,
}
export default NextAuth(authOptions)