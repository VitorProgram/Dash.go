import Header from "@/components/Header";
import Loading from "@/components/Loading";
import SideBar from "@/components/SideBar";
import { Flex, Stack } from "@mantine/core";
import { ReactNode, Suspense } from "react";
interface LayoutDashboardProps {
    children: ReactNode
}

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <Suspense fallback={<Loading height="100vh"/>}>
            <Flex w="100%" maw={1240} m="0 auto" pt={16}>
                <SideBar />
                    
                <Stack flex={1}>
                    <Header />
                    {children}
                </Stack>
            </Flex>
        </Suspense>
    );
}
 
export default LayoutDashboard;