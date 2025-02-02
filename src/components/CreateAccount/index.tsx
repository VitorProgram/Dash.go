"use client"

import registerAccount from "@/app/api/auth/registerAccount";
import Input from "@/components/Input";
import theme from "@/styles/theme";
import { Button, Divider, Flex, Stack, Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface CreateAccountProps {
    setIsCreateAccount: (value: boolean) => void; 
}

const CreateAccount = ({ setIsCreateAccount }: CreateAccountProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [userId, setUserId] = useState<string>("");

    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            setUserId(session.user.id as string);
        }
    }, [session]);

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        if (password !== confirmPassword) return console.error(`As senhas não conferem.`);

        await registerAccount({ name, email, password, userId });
        console.log("Conta criada com sucesso.");

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsCreateAccount(false); // Correção na chamada
    };

    return (
        <Stack
            p={24}
            gap={32}
            w="100%"
            bg={theme.colors.bgTwo}
            style={{ borderRadius: '8px' }}
        >
            <form onSubmit={handleSubmit}>
                <Stack gap={32}>
                    <Title order={2}>Criar Usuário</Title>
                    <Divider size="xs" bg={theme.colors.bg} />

                    <Flex gap={32} wrap="wrap">
                        <Input 
                            label="Nome" 
                            value={name} 
                            onChange={(ev: ChangeEvent<HTMLInputElement>) => setName(ev.target.value)} 
                        />
                        <Input 
                            label="E-mail" 
                            value={email} 
                            onChange={(ev: ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)} 
                        />
                    </Flex>

                    <Flex gap={32} wrap="wrap">
                        <Input 
                            label="Senha" 
                            type="password"
                            value={password} 
                            onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)} 
                        />
                        <Input 
                            label="Confirmação de senha" 
                            type="password"
                            value={confirmPassword} 
                            onChange={(ev: ChangeEvent<HTMLInputElement>) => setConfirmPassword(ev.target.value)} 
                        />
                    </Flex>

                    <Flex justify="flex-end" gap={16}>
                        <Button
                            radius={8} 
                            bg={theme.colors.gray}
                            onClick={() => setIsCreateAccount(false)} // Agora fecha o formulário
                        >
                            Cancelar
                        </Button>

                        <Button 
                            radius={8} 
                            bg={theme.colors.pink}
                            type="submit"
                        >
                            Salvar
                        </Button>
                    </Flex>
                </Stack>
            </form>
        </Stack>
    );
}

export default CreateAccount;
