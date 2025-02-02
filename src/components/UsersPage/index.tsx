"use client"
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Button, Flex, Stack, Title } from "@mantine/core";
import theme from "@/styles/theme";
import { FaPlus } from "react-icons/fa";
import CreateAccount from "../CreateAccount";
import UserAccountsTable from "../UserAccountsTable";

interface UserPageProps {
    accounts?: {
        name: string;
        id: string;
        userId: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
}


const UsersPage = ({ accounts= [] }: UserPageProps) => {
    const [isCreateUser, setIsCreateUser] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading height={500} />
            ) : (
                <Stack
                    p={24} 
                    gap={32} 
                    w="100%" 
                    bg={theme.colors.bgTwo} 
                    style={{ borderRadius: '8px' }}
                >
                    {!isCreateUser ? (
                        <Stack h={450}>
                            <Flex justify="space-between" gap={16}>
                                <Title order={2}>Usuários</Title>
                                <Button 
                                    radius={8} 
                                    bg={theme.colors.pink} 
                                    leftSection={<FaPlus size={16} />}
                                    onClick={() => setIsCreateUser(true)}
                                >
                                    Criar novo
                                </Button>
                            </Flex>

                            <UserAccountsTable accounts={accounts}/>
                        </Stack>
                    ) : (
                        <CreateAccount setIsCreateAccount={setIsCreateUser} />
                    )}
                </Stack>
            )}
        </>
    );
}
 
export default UsersPage;