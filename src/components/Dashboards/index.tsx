import theme from "@/styles/theme";
import { AreaChart, BarChart } from "@mantine/charts";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { data } from "../../../lib/data";

const Dashboards = () => {
    return (  
        <Stack>
            <Title order={3}>👋 Olá, Vitor</Title>

            <Flex gap={16}>
                <Stack p={20} w="100%" maw={424} h={249} bg={theme.colors.bgTwo} style={{borderRadius: "8px"}}>
                    <Text>Inscritos da semana</Text>

                    <AreaChart
                        w="100%"
                        h="100%"
                        data={data}
                        dataKey="date"
                        series={[{ name: 'Apples', color: 'indigo.6' }]}
                        curveType="linear"
                        connectNulls={true}
                    />
                </Stack>

                <Stack p={20} w="100%" maw={424} h={249} bg={theme.colors.bgTwo} style={{borderRadius: "8px"}}>
                    <Text>Ganhos da semana</Text>
                    <BarChart
                        w="100%"
                        h="100%"
                        data={data}
                        dataKey="date"
                        series={[{ name: 'Apples', color: 'indigo.6' }]}
                        tickLine="y"
                    />
                </Stack>
            </Flex>
        </Stack>
    );
}
 
export default Dashboards;