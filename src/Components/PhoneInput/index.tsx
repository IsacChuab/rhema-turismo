import React, { useCallback } from "react"

import { maskPhone } from "@/Functions/phone";

export const PhoneInput = ({ ...props }) => {
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        maskPhone(e)
    }, [])

    return (
        <div>
            <input { ...props } onKeyUp={handleKeyUp} />
        </div>
    )
}