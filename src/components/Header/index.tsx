import { Avatar, Button, Flex, Stack, Text } from "@mantine/core";
import Input from "../Input";
import { FaUserPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import theme from "@/styles/theme";

const Header = () => {
    return (  
        <Flex justify="space-between" align="center" h={80}>
            <Input variant="searching"/>

            <Flex>
                <Flex gap={28} pr={28} style={{borderRight: `1px solid ${theme.colors.gray700}`}}>
                    <Button pr={10} pl={10} variant="transparent">
                        <IoMdNotifications size={20} fill={theme.colors.white}/>
                    </Button>
                    <Button pr={10} pl={10} variant="transparent">
                        <FaUserPlus size={20} fill={theme.colors.white}/>
                    </Button>
                </Flex>

                <Flex gap={16} ml={28}>
                    <Stack justify="center" align="flex-end" gap={8} >
                        <Text size="16px">Vitor Silva</Text>

                        <Text size="14px" c={theme.colors.gray}>
                            vitor@gmail.com
                        </Text>
                    </Stack>

                    <Avatar 
                        size={48} 
                        src="profile.jpeg" 
                        alt="Minha foto de perfil" 
                        bd={`2px solid ${theme.colors.pink}`}
                        style={{cursor: 'pointer'}}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
 
export default Header;