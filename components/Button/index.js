import React from 'react'

const variants = [
    "fill",
    "outline",
    "bw"
]
function Button({
    value = "",
    variant = variants[0],
    href,
    onClick
}) {
    return (
        <a className={`custom-button ${variant}`} href={href} target="_blank" rel="noreferrer">
          
            <div className={`main-button ${variant}`} onClick={onClick}>
                <div className='title'>{value}</div>
            </div>
        
            <div className='outline-distorted'></div>
        </a>
    )
}

export default Button