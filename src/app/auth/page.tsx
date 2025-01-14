"use client"
import Input from "@/components/Input";
import theme from "@/styles/theme";
import { Button, Flex, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FcPositiveDynamic } from "react-icons/fc";

const Auth = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {      
      console.log(result)
      return
    }

    router.replace('/dashboard')
  }

  return (
    <Flex h="100vh" justify="center" align="center">
      <Stack
        bg={theme.colors.bgTwo}
        w="100%"
        maw={360}
        h="auto"
        p={32}
        style={{ borderRadius: "6px" }}
      >
        <form onSubmit={handleSubmit} style={{width: "100%", display: "flex", flexDirection: "column", gap: "16px"}}>
          <Input
            label="E-mail" 
            value={email}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
            
            />
          <Input 
            label="Senha" 
            type="password"
            value={password}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
          />

          <Button type="submit" bg={theme.colors.pink} h={40}>
            Entrar
          </Button>
        </form>
      </Stack>
    </Flex>
  );
};

export default Auth;
