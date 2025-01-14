import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Flex, Stack } from "@mantine/core";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface LayoutDashboardProps {
    children: ReactNode
}

const LayoutDashboard = async ({ children }: LayoutDashboardProps) => {
    const session = await getServerSession(nextAuthOptions)
    if(!session) {
        redirect('/auth')
    }

    return (
        <Flex w="100%" maw={1240} m="0 auto" pt={16}>
            <SideBar />
            
            <Stack flex={1}>
                <Header />
                {children}
            </Stack>
        </Flex>
    );
}
 
export default LayoutDashboard;