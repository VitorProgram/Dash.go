import { prisma } from "../../../../lib/prisma";

interface getAccountsProps {
    userId: string
}

const getAccounts = async ({ userId }: getAccountsProps) => {
    const accounts = await prisma.userAccount.findMany({
        where: { userId }
    })

    console.log("Contas coletadas.")

    return accounts
}
 
export default getAccounts;