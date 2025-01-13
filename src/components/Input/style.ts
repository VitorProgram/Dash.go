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

export const SearchingInputElement = styled(TextInput)`
    .mantine-TextInput-input {
        width: 100%;
        max-width: 374px;
        height: 42px;
        padding-left: 28px;
        color: ${theme.colors.white};
        border: none;
        border-radius: 28px;
        background: ${theme.colors.bgTwo};
        
        ::placeholder {
            color: ${theme.colors.grayTwo};
        }
    }

    .mantine-TextInput-section {
        right: 28px;
    }
`