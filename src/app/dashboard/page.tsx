import Dashboards from "@/components/Dashboards"
import UserAccountsTable from "@/components/UserAccountsTable";
import { Title } from "@mantine/core";

const Dashboard = () => {
    return ( 
        <>
            <Title order={3}>👋 Olá, Vitor</Title>
            <Dashboards />
        </>
    );
}
 
export default Dashboard;