import React from 'react'
import style from './Button.module.scss'

interface ButtonPros {
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}

function Button({children, type = 'button', onClick} : ButtonPros) {
    return (
        <button onClick={onClick} className={style.botao} type={type}>
            {children}
        </button>
    )
}

export default Button