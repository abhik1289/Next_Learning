import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    _id?: string;
    email?: string;
  }
  interface Session {
    user: {
      _id?: string;
      email?: string;
    } & DefaultSession["user"];
  }
}
