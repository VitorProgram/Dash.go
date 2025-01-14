import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: 'text' },
                password: { label: "Password", type: 'password' }
            },

            async authorize(credentials) {
                // Corrigido: Usando 'await' para aguardar a resposta da consulta
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                });

                // Verificação das credenciais
                if (user && user.password === credentials?.password) {
                    return { id: user.id.toString(), email: user.email }; // Retorna o usuário se for válido
                }
                
                return null; // Retorna null se as credenciais forem inválidas
            }
        })
    ],
    pages: {
        signIn: "/auth"
    }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
