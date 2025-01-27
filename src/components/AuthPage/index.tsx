"use client"
import Input from "@/components/Input";
import theme from "@/styles/theme";
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import Form from "next/form"
import { useRouter } from "next/navigation"; 
import Loading from "../Loading";

interface AuthPageProps {
    title: 'Cadastre-se' | 'Faça Login',
    text: 'Crie sua conta no Dash.go' | 'Faça login no Dash.go',
    registerPage?: true, 
    routerPush: '/dashboard' | '/auth/login'
    authFunction: (params: any) => any
}

const AuthPage = ({ title, text, registerPage, routerPush, authFunction }: AuthPageProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    const [buttonText, setButtonText] = useState<string>(
        registerPage ? 'Cadastrar Usuário' : 'Fazer Login'
    );

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter()

    const handleSubmit = async () => {
        if (routerPush === '/auth/login') {
            if (password != confirmPassword) return console.error("As senhas não conferem.")
            }
        
        const result = await authFunction({ name, email, password });;        
        
        if (result.success) {
            setButtonText(registerPage ? 'Usuário Criado' : 'Login Efetuado');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            router.push(routerPush)
        } else {
            console.log("Senha incorreta.")
            setIsLoading(false);
            setLoading(false)
        }
    }

    return (
        <>
            {loading ? (
                <Loading height="100vh" />
            ) : (
                <Flex h="100vh" justify="center" align="center">
                    <Stack
                        bg={theme.colors.bgTwo}
                        w="100%"
                        maw={380}
                        h="auto"
                        p={32}
                        style={{ borderRadius: "6px" }}
                    >
                        <Stack gap={0}>
                        <Title order={3}>{ title }</Title>
                        <Text>
                            { text }
                        </Text>
                        </Stack>

                        <form 
                            style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}
                        >
                            {registerPage && (
                                <Input
                                    label="Name"
                                    value={name}
                                    name="name"
                                    onChange={(ev: ChangeEvent<HTMLInputElement>) => setName(ev.target.value)}
                                />
                            )}

                            <Input
                                label="E-mail"
                                value={email}
                                name="email"
                                onChange={(ev: ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
                            />
                            <Input
                                label="Senha"
                                type="password"
                                value={password}
                                name="password"
                                onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
                            />
                            
                            {registerPage && (
                                <Input
                                    label="Confirme a senha"
                                    type="password"
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    onChange={(ev: ChangeEvent<HTMLInputElement>) => setConfirmPassword(ev.target.value)}
                                />
                            )}

                            <Button 
                                type="submit" 
                                mt={8} 
                                bg={theme.colors.pink} 
                                h={40} 
                                loading={isLoading} 
                                disabled={isLoading}
                                onClick={() => {
                                    handleSubmit()
                                    setLoading(true)
                                    setIsLoading(true)
                                }}
                            >
                                {buttonText}
                            </Button>
                        </form>
                    </Stack>
                </Flex>
            )}
        </>
    );
};

export default AuthPage;
