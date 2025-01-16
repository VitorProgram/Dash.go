"use client"
import theme from "@/styles/theme";
import { Button, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiInputMethodLine } from "react-icons/ri";
import Link from "next/link"; // Importando o Link do Next.js

const SideBar = () => {
    const [anchorSelected, setAnchorSelected] = useState<string>('dashboard')

    const handleSelect = (item: string) => {
        setAnchorSelected(item)
    }

    return (  
        <Stack gap={36} w="100%" maw={225}>
            <Flex align="center" h={80}>
                <Image w={100} src="/logo.svg" />
            </Flex>

            <Stack>
                <Title order={5} c={theme.colors.grayTwo} tt="uppercase">Geral</Title>

                <Link href="/dashboard" passHref>
                    <Button 
                        c={anchorSelected === 'dashboard' ? theme.colors.pink : theme.colors.white} 
                        onClick={() => setAnchorSelected('dashboard')}
                        variant="transparent"
                        p={0}
                        fullWidth={false} // Remove o fullWidth para que o botão não ocupe toda a largura
                    >
                        <Flex align="center" gap={8} justify="flex-start">
                            <MdDashboard size={20} />
                            <Text>Dashboard</Text>
                        </Flex>
                    </Button>
                </Link>

                <Link href="/dashboard/users" passHref>
                    <Button 
                        c={anchorSelected === "users" ? theme.colors.pink : theme.colors.white} 
                        onClick={() => setAnchorSelected("users")}
                        variant="transparent"
                        p={0}
                        fullWidth={false} // Remove o fullWidth
                    >
                        <Flex align="center" gap={8} justify="flex-start">
                            <FaUserCog size={20} />
                            <Text>Users</Text>
                        </Flex>
                    </Button>
                </Link>
            </Stack>
            
            <Stack>
                <Title order={5} c={theme.colors.grayTwo} tt="uppercase">Automação</Title>

                <Link href="/dashboard" passHref>
                    <Button 
                        c={theme.colors.white} 
                        variant="transparent"
                        p={0}
                        fullWidth={false} // Remove o fullWidth
                    >
                        <Flex align="center" gap={8} justify="flex-start">
                            <RiInputMethodLine size={20} />
                            <Text>Formulários</Text>
                        </Flex>
                    </Button>
                </Link>

                <Link href="/dashboard" passHref>
                    <Button 
                        c={theme.colors.white} 
                        variant="transparent"
                        p={0}
                        fullWidth={false} // Remove o fullWidth
                    >
                        <Flex align="center" gap={8} justify="flex-start">
                            <IoGitBranch size={20} />
                            <Text>Automação</Text>
                        </Flex>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
}
 
export default SideBar;
