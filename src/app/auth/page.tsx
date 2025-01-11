import Input from "@/components/Input";
import theme from "@/styles/theme";
import { Button, Flex, Stack } from "@mantine/core";

const Auth = () => {
    return ( 
    <Flex h="100vh" justify="center" align="center">
        <Stack gap={16} bg="var(--bg-two)" w="100%" maw={360} h="auto" p={32} style={{borderRadius: '6px'}}>
          <Input
            label="E-mail"
          />
          <Input
            label="Senha"
          />
  
          <Button 
            disabled
            bg={theme.colors.pink}
            h={40}
          >
            Entrar
          </Button>
        </Stack>
    </Flex>
    );
}
 
export default Auth;