"use client"
import theme from "@/styles/theme";
import { Button, Center, Flex, Stack, Title } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoadingRegister, setIsLoadingRegister] = useState<boolean>(false)
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false)
  
  return (
    <Center h="100vh">
      <Stack>
        <Title>Seja bem-vindo ao Dash.go</Title>
        
        <Flex justify="space-around">
          <Link href="/auth/register">
            <Button 
              onClick={() => setIsLoadingRegister(true)} 
              loading={isLoadingRegister} 
              w={150} 
              bg={theme.colors.pink}
            >
              Cadastrar-se
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button 
              onClick={() => setIsLoadingLogin(true)} 
              loading={isLoadingLogin} 
              w={150} 
              bg={theme.colors.pink}
            >
                Entrar
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Center>
  );
}
