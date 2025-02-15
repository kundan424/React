import React, { Children } from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-400',
    texColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <div>
            <button className={`px-4 py-2 rounded-lg ${bgColor} 
      ${texColor} ${className}`} {...props}>{children}
            t</button>
        </div>
    )
}

export default Button
