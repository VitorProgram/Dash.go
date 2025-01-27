"use client";
import { useState, useEffect } from "react";
import theme from "@/styles/theme";
import { Flex, Stack, Text } from "@mantine/core";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Loading from "../Loading";

// Carregar Chart dinamicamente no cliente
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartDataProps {
    series: Array<{
        name: string;
        data: number[];
    }>;
    options: ApexOptions;
}

const Dashboards = () => {
    const [chartData, setChartData] = useState<ChartDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simular o carregamento dos dados para o gráfico
        const timeout = setTimeout(() => {
            setChartData({
                series: [
                    {
                        name: "line-chart",
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 120, 300, 500, 800],
                    },
                ],
                options: {
                    chart: {
                        type: "line",
                        height: "100%",
                        toolbar: {
                            show: false,
                        },
                    },
                    xaxis: {
                        categories: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Dec",
                        ],
                    },
                },
            });
            setIsLoading(false); // Finalizar carregamento
        }, 1000); // Simular delay

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Stack>
            <Flex gap={16} wrap="wrap">
                {isLoading ? (
                    <Loading height={500}/>
                ) : (
                    <>
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
                            {chartData && (
                                <Chart
                                    options={chartData.options}
                                    series={chartData.series}
                                    type="line"
                                    height="100%"
                                    width="100%"
                                />
                            )}
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
                            {chartData && (
                                <Chart
                                    options={chartData.options}
                                    series={chartData.series}
                                    type="bar"
                                    height="100%"
                                    width="100%"
                                />
                            )}
                        </Stack>
                    </>
                )}
            </Flex>
        </Stack>
    );
};

export default Dashboards;
