'use server'

import { prisma } from "../../../../lib/prisma";
import { hashSync } from "bcrypt-ts";

interface RegisterAccountProps {
    userId: string
    name: string;
    email: string;
    password: string;
}

const registerAccount = async ({ name, email, password, userId }: RegisterAccountProps) => {
    try {
        const account = await prisma.userAccount.findUnique({
            where: { email }
        })
    
        if (account) {
            throw new Error("A conta já está cadastrada.")
        }
    
        const hashedPassword = hashSync(password)
    
        await prisma.userAccount.create({
            data: {
                userId,
                name,
                email,
                password: hashedPassword
            }
        })
    
        return { success: true, message: "Conta do usuário criada." }
    }
    catch (error) {
        console.error("Erro ao registrar uma nova conta pro usuário: ", error)
        
        return { success: false, message: "Ocorreu um erro ao registrar o usuário. Tente novamente." }
    }
}

export default registerAccount;
