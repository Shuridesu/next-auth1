import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: DefaultSession;
    error?: string;
  }
}