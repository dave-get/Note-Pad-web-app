import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession } from "next-auth";
import jwt from "jsonwebtoken";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      token: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    token: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          const email = credentials?.email;
          const password = credentials?.password;
          const uri = process.env.NEXT_PUBLIC_BASE_URL;
          const res = await fetch(`${uri}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          // console.log("Backend response:", data);
          
          if (res.ok && data.success && data.authToken) {
            const decoded = jwt.decode(data.authToken);
            // console.log("Decoded token:", decoded);
            
            return {
              id: decoded.id,
              email: decoded.email,
              name: decoded.username,
              role: decoded.role || "user",
              token: data.authToken
            };
          }
          return null;
        } catch (error) {
          console.log("Login error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          name: token.name as string,
          role: token.role as string,
          token: token.token as string
        };
      }
      return session;
    },
  },
};
