import theme from "@/styles/theme";
import { TextInput } from "@mantine/core";
import styled from "styled-components";

export const InputElement = styled(TextInput)`
    .mantine-TextInput-input {
        height: 32px;
        color: ${theme.colors.white};
        background: ${theme.colors.bg};
        border: 2px solid transparent;

        &:focus {
            background: transparent;
            border-color: ${theme.colors.pink};
        }
    }

    .mantine-TextInput-required {
        color: ${theme.colors.pink};
    }
`