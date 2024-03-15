import React from 'react'

const Button = ({ text, classNames }: { text: string, classNames?: string }) => {
    return (
        <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-[100px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10   ${classNames}`}>
            {text}
        </button>
    )
}

export default Button
