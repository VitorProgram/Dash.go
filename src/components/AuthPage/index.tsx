// components/authPage/index.tsx
"use client"
import { signIn } from "next-auth/react";  // Importando a função signIn do NextAuth
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import Input from "@/components/Input";
import theme from "@/styles/theme";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import Link from "next/link";

interface AuthPageProps {
    title: 'Cadastre-se' | 'Faça Login',
    text: 'Crie sua conta no Dash.go' | 'Faça login no Dash.go',
    registerPage?: true,
    routerPush: '/dashboard' | '/auth/login',
    authFunction: (params: any) => any  // Função para realizar login ou registro
}

const AuthPage = ({ title, text, registerPage, routerPush, authFunction }: AuthPageProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>(
        registerPage ? 'Cadastrar Usuário' : 'Fazer Login'
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async () => {
        if (registerPage && password !== confirmPassword) {
            return console.error("As senhas não conferem.");
        }

        setIsLoading(true);
        setLoading(true);

        let result;
        if (registerPage) {
            // Chamando a função de registro
            result = await authFunction({ name, email, password });
        } else {
            // Chamando a função de login usando NextAuth
            result = await signIn("credentials", { email, password, redirect: false });
        }

        if (result?.error) {
            // Se houver erro, mostrar mensagem de erro
            setButtonText("Erro ao tentar realizar a ação");
        } else {
            setButtonText(registerPage ? 'Usuário Criado' : 'Login Efetuado');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            // Redirecionando após sucesso
            router.push(routerPush);
        }

        setIsLoading(false);
        setLoading(false);
    };

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
                            <Title order={3}>{title}</Title>
                            <Text>{text}</Text>
                        </Stack>

                        <form
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                            onSubmit={(e) => {
                                e.preventDefault();  // Previne o comportamento de submit do formulário
                                handleSubmit();
                            }}
                        >
                            {registerPage && (
                                <Input
                                    label="Nome"
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

                            {routerPush === '/auth/login' ? (
                                <Text>
                                    Já tem uma conta? <Link style={{ color: theme.colors.pink }} href="/auth/login">Faça Login</Link>
                                </Text>
                            ) : (
                                <Text>
                                    Ainda não tem uma conta? <Link style={{ color: theme.colors.pink }} href="/auth/register">Cadastre-se</Link>
                                </Text>
                            )}

                            <Button
                                type="submit"
                                mt={8}
                                bg={theme.colors.pink}
                                h={40}
                                loading={isLoading}
                                disabled={isLoading}
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
