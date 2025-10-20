"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage"

export default function Page() {
    const {
        value
    } = useLocalStorage();

    console.log(value)

    return (
        <p>
            {value ?? []}
        </p>
    )
}