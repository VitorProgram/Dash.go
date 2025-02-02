import UsersPage from "@/components/UsersPage";
import { auth } from "../../../../auth";
import { prisma } from "../../../../lib/prisma";
import UserAccountsTable from "@/components/UserAccountsTable";

const Users = async () => {
    const session = await auth()

    if (!session || !session.user?.email) {
        return <p>Você precisa estar logado para ver as contas.</p>
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { userAccount: true },
    })

    const accounts = user?.userAccount
    console.log(accounts)

    return (
        <>
            <UsersPage accounts={accounts}/>
        </>
    )
}

export default Users;
