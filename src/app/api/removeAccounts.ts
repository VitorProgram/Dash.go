"use server";
import { prisma } from "../../../lib/prisma";

interface accountProps {
  email: string;
}

export const removeAllAccounts = async (allAccounts: { email: string }[]) => {
  if (!allAccounts || allAccounts.length === 0) {
    console.log("Nenhuma conta para remover.");
    return;
  }

  try {
    await prisma.userAccount.deleteMany({
      where: {
        email: {
          in: allAccounts.map((account) => account.email),
        },
      },
    });

    console.log(`${allAccounts.length} contas removidas.`);
  } catch (error) {
    console.error("Erro ao excluir as contas:", error);
  }
};

export const removeAccount = async ({ email }: accountProps) => {
  const account = await prisma.userAccount.findUnique({
    where: { email },
  });

  if (!account) {
    return console.log("Conta já excluída.");
  }

  try {
    await prisma.userAccount.delete({
      where: { email },
    });

    console.log("Conta removida.");
  } catch (error) {
    console.error("Erro ao excluir a conta.", error);
  }
};
