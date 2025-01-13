"use client"
import { useState } from "react";
import { InputElement, SearchingInputElement } from "./style";
import { FiSearch } from "react-icons/fi";

interface InputProps {
    label?: string,
    variant?: 'searching' 
}

const Input = ({ label, variant }: InputProps) => {
    const [value, setValue] = useState<string>('')

    return (  
        <>
            {variant === undefined && (
                <InputElement
                    required
                    withAsterisk
                    label={label}
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                />
            )}
            {variant === "searching" && (
                <SearchingInputElement
                    placeholder="Search..."
                    rightSection={<FiSearch />}
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                />
            )}
        </>
    );
}
 
export default Input;