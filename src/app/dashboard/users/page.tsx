"use client"

import CreateUser from "@/components/CreateUser";
import theme from "@/styles/theme";
import { Box, Button, Flex, Stack, Title } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import UsersTable from "@/components/UsersTable";
import Loading from "@/components/Loading";

const Users = () => {
    const [isCreateUser, setIsCreateUser] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false); // Finalizar carregamento
        }, 1000); // Simular delay

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ? (
            <Loading height={500}/>
        ) : (
            <Stack 
                p={24} 
                gap={32} 
                w="100%" 
                bg={theme.colors.bgTwo} 
                style={{borderRadius: '8px'}}
            >
                {!isCreateUser ? (
                    <Stack h={450}>
                        <Flex justify="space-between" gap={16}>
                            <Title order={2}>Usuários</Title>
                            <Button 
                                radius={8} 
                                bg={theme.colors.pink} 
                                leftSection={<FaPlus size={16}/>}
                                onClick={() => setIsCreateUser(true)}
                            >
                                Criar novo
                            </Button>
                        </Flex>

                        {/* <UsersTable /> */}
                    </Stack>
                ) : (
                    <Box>
                    <form style={{display: "flex", flexDirection: "column", gap: "32px"}}>
                        <CreateUser />
                        <Flex justify="flex-end" gap={16}>
                            <Button 
                                radius={8} 
                                bg={theme.colors.gray}
                                onClick={() => setIsCreateUser(false)}
                            >
                                Cancelar
                            </Button>
    
                            <Button 
                                radius={8} 
                                bg={theme.colors.pink}
                            >
                                Salvar
                            </Button>
                        </Flex>
                    </form>                        
                    </Box>
                )}
            </Stack>
        )}
        </>
    )
}
 
export default Users;