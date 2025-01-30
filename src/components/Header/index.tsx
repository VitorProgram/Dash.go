'use client'

import { Avatar, Button, Flex, Stack, Text } from "@mantine/core";
import Input from "../Input";
import { FaUserPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import theme from "@/styles/theme";
import { ChangeEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
    const [search, setSearch] = useState<string>('');
    const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log("Sessão:", session); // Depuração para ver o que está vindo da sessão

        if (status === "unauthenticated") {
            return router.push("/auth/login"); // Redireciona se não estiver logado            
        }

        if (status === "authenticated" && session?.user) {
            setUserData({
                name: session.user.name || "Usuário",
                email: session.user.email || "sememail@email.com"
            });
        }
    }, [session, status, router]);

    return (  
        <Flex justify="space-between" align="center" h={80}>
            <Input 
                variant="searching" 
                value={search}  
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setSearch(ev.target.value)}
            />

            <Flex>
                <Flex gap={28} pr={28} style={{ borderRight: `1px solid ${theme.colors.gray700}` }}>
                    <Button pr={10} pl={10} variant="transparent">
                        <IoMdNotifications size={20} fill={theme.colors.white} />
                    </Button>
                    <Button pr={10} pl={10} variant="transparent">
                        <FaUserPlus size={20} fill={theme.colors.white} />
                    </Button>
                </Flex>

                <Flex gap={16} ml={28}>
                    <Stack justify="center" align="flex-end" gap={8}>
                        {status === "loading" ? (
                            <Text size="16px">Carregando...</Text>
                        ) : userData ? (
                            <>
                                <Text size="16px">{userData.name}</Text>
                                <Text size="14px" c={theme.colors.gray}>
                                    {userData.email}
                                </Text>
                            </>
                        ) : (
                            <Text size="16px">Erro ao carregar</Text>
                        )}
                    </Stack>

                    <Avatar 
                        size={48} 
                        alt="Minha foto de perfil" 
                        bd={`2px solid ${theme.colors.pink}`}
                        style={{ cursor: 'pointer' }}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;
