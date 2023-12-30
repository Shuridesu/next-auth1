import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/libs/next-auth/options";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
}
