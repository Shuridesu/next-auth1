import { JWT } from 'next-auth/jwt';
import { NextAuthOptions,Session } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

interface MyToken extends JWT {
    accessToken?: string;
}


export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [
    GoogleProvider(
        {
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        },
    ),
  ],
  callbacks: {
    jwt({token,account}){
        if(account&&account.accessToken){
            token.accessToken = account.accessToken;
        }
        return token;
    },
    session({session,token}: {session: Session;token: MyToken}){
        session.accessToken = token.accessToken;
        return session;
    },
   },
}



