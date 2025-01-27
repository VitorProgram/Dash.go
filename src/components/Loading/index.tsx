"use client"
import theme from "@/styles/theme";
import { Center, Loader } from "@mantine/core";
import { Rings } from "react-loader-spinner";

interface LoadingProps {
    height: '100vh' | 500
}

const Loading = ({ height }: LoadingProps) => {
    return (
        <Center w="100%" h={height}>
            <Rings
                visible={true}
                height="80"
                width="80"
                color={theme.colors.purple}
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
    </Center>
    )
}
export default Loading;