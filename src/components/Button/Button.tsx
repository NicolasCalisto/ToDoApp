import React from "react";
import './Button.css'

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button className="btn-component" onClick={onClick}>
            {children}
        </button>
    )

}

export default Button;