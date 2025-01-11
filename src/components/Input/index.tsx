"use client"
import { useState } from "react";
import { InputElement } from "./style";

interface InputProps {
    label: string, 
}

const Input = ({ label }: InputProps) => {
    const [value, setValue] = useState<string>('')

    return (  
        <InputElement
            required
            withAsterisk
            label={label}
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
        />
    );
}
 
export default Input;