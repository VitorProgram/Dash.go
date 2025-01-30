"use server"
import { signIn } from "next-auth/react";  // Alterado para importar de 'next-auth/react'
interface loginActionProps {
    email: string;
    password: string;
}

const loginAction = async ({ email, password }: loginActionProps) => {
   const result = await signIn("credentials", {
        email,
        password,
   });

   return result;  
};

export default loginAction;


// Código antigo
// 'use server'
// import prisma from '../../../../lib/prisma';
// import { compare } from 'bcrypt-ts';  // Alterado para usar o método assíncrono

// interface loginActionProps {
//     email: string;
//     password: string;
// }

// const loginAction = async ({ email, password }: loginActionProps) => {
//     try {
//         // Verificando se o usuário existe no banco de dados
//         const existingUser = await prisma.user.findUnique({
//             where: { email },
//         });

//         if (!existingUser) {
//             return { success: false, message: "Usuário não encontrado." };
//         }

//         // Comparando a senha fornecida com a senha hashada armazenada no banco
//         const isPasswordCorrect = await compare(password, existingUser.password);  // Usando o método assíncrono

//         // Se a senha não for correta
//         if (!isPasswordCorrect) {
//             return { success: false, message: "Senha incorreta." };
//         }

//         // Senha correta, login bem-sucedido
//         return { success: true, message: "Login efetuado com sucesso." };
//     } catch (error) {
//         console.error("Erro ao fazer login:", error);
//         return { success: false, message: "Ocorreu um erro ao tentar fazer login. Tente novamente." };
//     }
// };

// export default loginAction;

