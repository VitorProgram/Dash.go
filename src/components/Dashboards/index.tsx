"use client"
import theme from "@/styles/theme";
import { AreaChart, BarChart } from "@mantine/charts";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { data } from "../../../lib/data";
import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartDataProps {
    series: Array<{
        name: string,
        data: number[]
    }>,
    options: ApexOptions,
}

const Dashboards = () => {
    const [chartData, setChartData] = useState<ChartDataProps>({
        series: [
            {
                name: 'line-chart',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 120, 300, 500, 800]
            }
        ],
        options: {
            chart: {
              type: "line", // Valor aceito explicitamente
              height: "100%",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Dec"],
            },
        },
    })

    return (  
        <Stack>
            <Title order={3}>👋 Olá, Vitor</Title>

            <Flex gap={16} wrap="wrap">
                <Stack 
                      p={20}
                      gap={0}
                      w="100%"
                      maw={424}
                      h="100%"
                      mah={249}
                      justify="space-between"
                      bg={theme.colors.bgTwo}
                      style={{
                        borderRadius: "8px",
                        overflow: "hidden", 
                      }}
                >
                    <Text>Inscritos no ano</Text>

                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height="100%"
                        width="100%"
                    />
                </Stack>

                <Stack 
                      p={20}
                      gap={0}
                      w="100%"
                      maw={424}
                      h="100%"
                      justify="space-between"
                      mah={249}
                      bg={theme.colors.bgTwo}
                      style={{
                        borderRadius: "8px",
                        overflow: "hidden", 
                      }}
                >
                    <Text>Taxa de abertura</Text>

                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        height="100%"
                        width="100%"
                    />
                </Stack>
            </Flex>
        </Stack>
    );
}
 
export default Dashboards;