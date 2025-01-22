import prisma from '../../../../lib/prisma' // Criando respostas HTTP
import { NextResponse } from 'next/server' 

// Função assíncrona
export const GET = async () => {
    try {
        // Busca todas as contas de todos os usuários
        const accounts = await prisma.account.findMany();
        return NextResponse.json(accounts, { status: 200 });
    } 
       
    // Lida com rros
    catch (error) {
        console.error("Erro ao buscar contas: ", error);
        return NextResponse.json(
            { message: "Erro interno do servidor." },
            { status: 500 }
        );
    }
}