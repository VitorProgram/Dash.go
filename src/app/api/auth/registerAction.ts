'use server'
import prisma from '../../../../lib/prisma';
import { hashSync } from 'bcrypt-ts';  // Mantemos o uso de hashSync para o registro

interface registerActionProps {
    name: string;
    email: string;
    password: string;
}

const registerAction = async ({ name, email, password }: registerActionProps) => {
    try {
        // Verificando se o usuário já existe
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return { success: false, message: "Usuário já cadastrado." };
        }

        // Gerando o hash da senha
        const hashedPassword = hashSync(password);

        // Criando o usuário com a senha hashada
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return { success: true, message: "Usuário criado com sucesso." };
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        return { success: false, message: "Ocorreu um erro ao tentar registrar o usuário. Tente novamente." };
    }
};

export default registerAction;
