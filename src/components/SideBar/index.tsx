import theme from "@/styles/theme";
import { Anchor, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { FaUserCog } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiInputMethodLine } from "react-icons/ri";

const SideBar = () => {
    return (  
        <Stack gap={36} w="100%" maw={225}>
            <Flex align="center" h={80}>
                <Image w={100} src="/logo.svg" />
            </Flex>

            <Stack>
                <Title order={5} c={theme.colors.grayTwo} tt="uppercase">Geral</Title>

                <Anchor href="/dashboard" c={theme.colors.white} td="none">
                    <Flex align="center" gap={8}>
                        <MdDashboard size={20} />
                        <Text>Dashboard</Text>
                    </Flex>
                </Anchor>
                <Anchor href="/dashboard" c={theme.colors.pink} td="none">
                    <Flex align="center" gap={8}>
                        <FaUserCog size={20} />
                        <Text>Users</Text>
                    </Flex>
                </Anchor>
            </Stack>
            
            <Stack>
                <Title order={5} c={theme.colors.grayTwo} tt="uppercase">Automação</Title>

                <Anchor href="/dashboard" c={theme.colors.white} td="none">
                    <Flex align="center" gap={8}>
                        <RiInputMethodLine size={20} />
                        <Text>Formulários</Text>
                    </Flex>
                </Anchor>
                <Anchor href="/dashboard" c={theme.colors.white} td="none">
                    <Flex align="center" gap={8}>
                        <IoGitBranch size={20} />
                        <Text>Automação</Text>
                    </Flex>
                </Anchor>
            </Stack>
        </Stack>
    );
}
 
export default SideBar;