"use client"
import Input from "@/components/Input";
import theme from "@/styles/theme";
import { Button, Divider, Flex, Stack, Title } from "@mantine/core";
import { ChangeEvent, useState } from "react";

const CreateUser = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    return (  
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
                    value={password} 
                    onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)} 
                />
                <Input 
                    label="Confirmação de senha" 
                    value={confirmPassword} 
                    onChange={(ev: ChangeEvent<HTMLInputElement>) => setConfirmPassword(ev.target.value)} 
                />
            </Flex>
        </Stack>
    )
}
 
export default CreateUser;