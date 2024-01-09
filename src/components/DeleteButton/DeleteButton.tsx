import React from "react";
import './DeleteButton.css'

interface Props {
    onClick: () => void
}

const DeleteButton: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button className="btn-delete" onClick={onClick}>
            {children}
        </button>
    )

}

export default DeleteButton;