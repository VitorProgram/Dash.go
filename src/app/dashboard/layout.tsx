import SideBar from "@/components/SideBar";
import { Flex } from "@mantine/core";
import { ReactNode } from "react";

interface LayoutDashboardProps {
    children: ReactNode
}

const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <Flex w="100%" maw={1240} m="0 auto" pt={28}>
            <SideBar />
            {children}
        </Flex>
    );
}
 
export default LayoutDashboard;