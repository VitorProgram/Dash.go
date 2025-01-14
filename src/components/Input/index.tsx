"use client"
import { ChangeEventHandler, useState } from "react";
import { InputElement, SearchingInputElement } from "./style";
import { FiSearch } from "react-icons/fi";

interface InputProps {
    label?: string,
    value: string,
    onChange: ChangeEventHandler,
    variant?: 'searching',
    type?: 'password',
}

const Input = ({ label, variant, type, value, onChange }: InputProps) => {
    return (  
        <>
            {variant === undefined && (
                <InputElement
                    required
                    withAsterisk
                    label={label}
                    value={value}
                    type={type}
                    onChange={onChange}
                    />
                )}
            {variant === "searching" && (
                <SearchingInputElement
                    type={type}
                    placeholder="Search..."
                    rightSection={<FiSearch />}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    );
}
 
export default Input;