import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Flex, Stack } from "@mantine/core";
import { ReactNode } from "react";
interface LayoutDashboardProps {
    children: ReactNode
}

const LayoutDashboard = async ({ children }: LayoutDashboardProps) => {
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